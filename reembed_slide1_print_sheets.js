const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const stdPrintSheetPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_frame_standard.png';
const b64StdPrintSheet = fs.readFileSync(stdPrintSheetPath).toString('base64');

// Locate printSheetImages block
const printSheetStart = 'const printSheetImages = {';
const printSheetEnd = 'const db = {';

const startIdx = html.indexOf(printSheetStart);
const endIdx = html.indexOf(printSheetEnd, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    const ultPrintSheetPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_frame_ultimate.png';
    const b64UltPrintSheet = fs.readFileSync(ultPrintSheetPath).toString('base64');

    const newPrintSheetBlock = `const printSheetImages = {
            standard: {
                title: 'Folha de Impressão em Branco (Linha Frame Padrão 47:75)',
                src: 'data:image/png;base64,${b64StdPrintSheet}'
            },
            ultimate: {
                title: 'Folha de Impressão em Branco (Linha Frame Ultimate 1:1)',
                src: 'data:image/png;base64,${b64UltPrintSheet}'
            }
        };\n\n        `;

    html = html.substring(0, startIdx) + newPrintSheetBlock + html.substring(endIdx);
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('Successfully re-embedded Slide 1 blank print sheet image for Frame Padrão!');
} else {
    console.error('Could not locate printSheetImages block!');
}
