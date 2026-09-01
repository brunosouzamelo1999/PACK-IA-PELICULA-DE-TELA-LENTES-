const fs = require('fs');
const path = require('path');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const img1Path = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_2d.png';
const img2Path = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/faca_mestre_print.jpeg';

let html = fs.readFileSync(htmlPath, 'utf8');

if (fs.existsSync(img1Path)) {
    const b64_1 = fs.readFileSync(img1Path).toString('base64');
    html = html.replace(/src="folha_impressao_2d\.png"/g, `src="data:image/png;base64,${b64_1}"`);
}

if (fs.existsSync(img2Path)) {
    const b64_2 = fs.readFileSync(img2Path).toString('base64');
    html = html.replace(/src="faca_mestre_print\.jpeg"/g, `src="data:image/jpeg;base64,${b64_2}"`);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully embedded base64 images into HTML!');
