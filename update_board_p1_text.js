const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const target = `No centro da composição, exiba a ilustração de um smartphone moderno com a película de vidro protetora transparente flutuando sobre a tela (com a silhueta da faca: cantos inferiores arredondados e recorte curvo de orelhas no topo).`;
const replacement = `No centro da composição, exiba a ilustração de um smartphone moderno modelo 17 Pro Max com a película de vidro temperado transparente com borda preta fina contornando a tela flutuando sobre a tela (com a silhueta da faca: cantos arredondados e bordas pretas de alta precisão).`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated p1Text in apresentacao_board.html');
} else {
    console.error('Target string not found!');
}
