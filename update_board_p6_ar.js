const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const oldPhrase = `--ar 3:2 --no double hangers, no hanger on left side, no cardboard, no paper box`;
const newPhrase = `--ar 1:1 --no double hangers, no hanger on left side, no cardboard, no paper box`;

const oldDesc = `A face da frente aplica 100% da arte 2D gráfica da segunda imagem anexada. A face do verso aplica 100% da arte 2D da terceira imagem anexada.`;
const newDesc = `Cada metade do estojo preserva estritamente a proporção retangular vertical física 209:402. A face da frente aplica 100% da arte 2D gráfica da segunda imagem anexada. A face do verso aplica 100% da arte 2D da terceira imagem anexada.`;

content = content.replace(oldPhrase, newPhrase);
content = content.replace(oldDesc, newDesc);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated p6Text aspect ratio to 1:1 preserving 209:402 card proportions!');
