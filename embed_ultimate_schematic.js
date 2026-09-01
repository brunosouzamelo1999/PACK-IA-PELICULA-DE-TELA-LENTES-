const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const imgPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/frame_ultimate_cortes.png';

let html = fs.readFileSync(htmlPath, 'utf8');

if (fs.existsSync(imgPath)) {
    const b64 = fs.readFileSync(imgPath).toString('base64');
    const imageCardHtml = `
                    <!-- Tabela / Esquema Técnico de Facas da Linha Ultimate -->
                    <div style="margin-top: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: center; box-shadow: 0 4px 16px rgba(15,23,42,0.05);">
                        <div style="font-size: 0.85rem; font-weight: 700; color: #0284c7; margin-bottom: 0.75rem; text-align: left;">
                            Tabela Técnica de Modelos de Corte (Linha Frame Ultimate)
                        </div>
                        <img src="data:image/png;base64,${b64}" alt="Modelos de Corte da Linha Frame Ultimate" style="max-width: 100%; max-height: 420px; border-radius: 8px; border: 1px solid #cbd5e1; object-fit: contain;">
                    </div>`;

    html = html.replace('</ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>', `</ul>\n                    </div>\n${imageCardHtml}\n                </div>\n            </div>\n        </div>\n\n    </div>`);
    
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('Successfully embedded Ultimate cuts schematic into apresentacao_frame.html!');
} else {
    console.error('Image file not found:', imgPath);
}
