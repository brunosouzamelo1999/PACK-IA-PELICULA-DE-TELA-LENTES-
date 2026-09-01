const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Read standard die image and ultimate table image
const stdDiePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/faca_mestre_frame_standard.png';
const ultTablePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/frame_ultimate_cortes.png';

const b64StdDie = fs.readFileSync(stdDiePath).toString('base64');
const b64UltTable = fs.readFileSync(ultTablePath).toString('base64');

// 2. Replace HTML container in Slide 5
const oldContainerStart = '<!-- Tabela / Esquema Técnico de Facas da Linha Ultimate -->';
const oldContainerEnd = '</div>\n                    </div>\n                </div>\n            </div>';

const newContainer = `<!-- Tabela / Esquema Técnico Dinâmico de Facas (Slide 5) -->
                    <div style="margin-top: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: center; box-shadow: 0 4px 16px rgba(15,23,42,0.05);">
                        <div style="font-size: 0.85rem; font-weight: 700; color: #0284c7; margin-bottom: 0.75rem; text-align: left;" id="slide5DieTitle">
                            Esquema Técnico da Faca Mestre (3 Furos - Linha Frame Padrão 47:75)
                        </div>
                        <img id="slide5DieImage" src="data:image/png;base64,${b64StdDie}" style="max-width: 100%; max-height: 280px; height: auto; border-radius: 8px; object-fit: contain;" />
                    </div>`;

const containerStartIdx = html.indexOf(oldContainerStart);
const containerEndIdx = html.indexOf('</div>\n                </div>\n            </div>\n        </div>', containerStartIdx);

if (containerStartIdx !== -1 && containerEndIdx !== -1) {
    const before = html.substring(0, containerStartIdx);
    const after = html.substring(containerEndIdx);
    html = before + newContainer + '\n' + after;
} else {
    console.error('Could not locate Slide 5 image container!');
}

// 3. Add slide5DieImages object into JS script and update setFrameMode
const jsTarget = 'const printSheetImages = {';
const newJsObj = `const slide5DieImages = {
            standard: {
                title: 'Esquema Técnico da Faca Mestre (3 Furos - Linha Frame Padrão 47:75)',
                src: 'data:image/png;base64,${b64StdDie}'
            },
            ultimate: {
                title: 'Tabela Técnica de Modelos de Corte (Linha Frame Ultimate 1:1)',
                src: 'data:image/png;base64,${b64UltTable}'
            }
        };

        const printSheetImages = {`;

html = html.replace('const printSheetImages = {', newJsObj);

// Update setFrameMode to swap slide5DieImage and slide5DieTitle
const oldSetFrameModeCode = `            // Dynamic Slide 1 Print Sheet Image Swap
            const imgEl = document.getElementById('slide1RefImage');
            const titleEl = document.getElementById('slide1ImgTitle');
            if (imgEl && printSheetImages[mode]) {
                imgEl.src = printSheetImages[mode].src;
            }
            if (titleEl && printSheetImages[mode]) {
                titleEl.textContent = printSheetImages[mode].title;
            }`;

const newSetFrameModeCode = `            // Dynamic Slide 1 Print Sheet Image Swap
            const imgEl = document.getElementById('slide1RefImage');
            const titleEl = document.getElementById('slide1ImgTitle');
            if (imgEl && printSheetImages[mode]) {
                imgEl.src = printSheetImages[mode].src;
            }
            if (titleEl && printSheetImages[mode]) {
                titleEl.textContent = printSheetImages[mode].title;
            }

            // Dynamic Slide 5 Die Cut Schematic Swap
            const dieImgEl = document.getElementById('slide5DieImage');
            const dieTitleEl = document.getElementById('slide5DieTitle');
            if (dieImgEl && slide5DieImages[mode]) {
                dieImgEl.src = slide5DieImages[mode].src;
            }
            if (dieTitleEl && slide5DieImages[mode]) {
                dieTitleEl.textContent = slide5DieImages[mode].title;
            }`;

html = html.replace(oldSetFrameModeCode, newSetFrameModeCode);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated Slide 5 dynamic die schematic image in apresentacao_frame.html!');
