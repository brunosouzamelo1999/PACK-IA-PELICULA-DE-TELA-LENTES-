const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const phraseOld = 'No centro de cada quadro, exiba o smartphone com a película flutuante.';
const phraseNew = 'No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados.';

const negativeOld = '--no icons, no badges, no cutouts, no drawn holes, no 3d mockup';
const negativeNew = '--no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup';

content = content.replace(new RegExp(phraseOld.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), phraseNew);
content = content.replace(new RegExp(negativeOld.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), negativeNew);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated all multi-style prompts (pl1, pl2, pl3, pl4) with Dynamic Island and thin black border glass!');
