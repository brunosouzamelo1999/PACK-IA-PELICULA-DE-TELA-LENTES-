const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const imgStandardPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_frame_standard.png';
const imgUltimatePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_frame_ultimate.png';

let html = fs.readFileSync(htmlPath, 'utf8');

const b64Standard = fs.readFileSync(imgStandardPath).toString('base64');
const b64Ultimate = fs.readFileSync(imgUltimatePath).toString('base64');

// 1. Add image container in Slide 1 right column under notes-box
const slide1CardHtml = `
                    <!-- Cartão da Folha de Impressão Anexa (Dinâmico para Padrão e Ultimate) -->
                    <div style="margin-top: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: center; box-shadow: 0 4px 16px rgba(15,23,42,0.05);">
                        <div style="font-size: 0.85rem; font-weight: 700; color: #0284c7; margin-bottom: 0.75rem; text-align: left;" id="slide1ImgTitle">
                            Folha de Impressão (Linha Frame Padrão 47:75)
                        </div>
                        <img id="slide1RefImage" src="data:image/png;base64,${b64Standard}" alt="Folha de Impressão Frame" style="max-width: 100%; max-height: 380px; border-radius: 8px; border: 1px solid #cbd5e1; object-fit: contain;">
                    </div>`;

// Replace end of notes-box in Slide 1
html = html.replace(
    `<li><strong>Envio de Arquivos</strong>: Anexe 1º a Folha de Impressão (gabarito em branco) e 2º a foto da logo do cliente.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- SLIDE 2 -->`,
    `<li><strong>Envio de Arquivos</strong>: Anexe 1º a Folha de Impressão (gabarito em branco) e 2º a foto da logo do cliente.</li>\n                        </ul>\n                    </div>\n${slide1CardHtml}\n                </div>\n            </div>\n        </div>\n\n        <!-- SLIDE 2 -->`
);

// 2. Add Base64 variables and setFrameMode image update logic in JS
const b64JsObj = `
        const printSheetImages = {
            standard: {
                title: 'Folha de Impressão em Branco (Linha Frame Padrão 47:75)',
                src: 'data:image/png;base64,${b64Standard}'
            },
            ultimate: {
                title: 'Folha de Impressão em Branco (Linha Frame Ultimate 1:1)',
                src: 'data:image/png;base64,${b64Ultimate}'
            }
        };
`;

// Insert printSheetImages right before db object
html = html.replace('const db = {', `${b64JsObj}\n        const db = {`);

// Update setFrameMode to toggle slide 1 image
const setFrameModeCode = `        function setFrameMode(mode) {
            currentFrameMode = mode;
            document.getElementById('btnModeStandard').classList.toggle('active', mode === 'standard');
            document.getElementById('btnModeUltimate').classList.toggle('active', mode === 'ultimate');
            
            document.getElementById('headerLineBadge').textContent = db[mode].badge;
            document.getElementById('cutSelectorContainer').style.display = (mode === 'ultimate') ? 'block' : 'none';

            // Dynamic Slide 1 Print Sheet Image Swap
            const imgEl = document.getElementById('slide1RefImage');
            const titleEl = document.getElementById('slide1ImgTitle');
            if (imgEl && printSheetImages[mode]) {
                imgEl.src = printSheetImages[mode].src;
            }
            if (titleEl && printSheetImages[mode]) {
                titleEl.textContent = printSheetImages[mode].title;
            }

            updatePrompts();
        }`;

html = html.replace(/function setFrameMode\(mode\) \{[\s\S]*?updatePrompts\(\);\n        \}/, setFrameModeCode);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated Slide 1 in apresentacao_frame.html with dynamic print sheet images!');
