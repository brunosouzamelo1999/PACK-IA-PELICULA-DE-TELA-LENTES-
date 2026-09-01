const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

// Update p1Text
const p1Old = `O topo contém o logo do cliente e o subtítulo '[SUBTITULO]'. No centro da composição, exiba a ilustração de um smartphone moderno de perfil frontal em ângulo sutil destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa.`;
const p1New = `O topo contém o logo do cliente e o subtítulo '[SUBTITULO]'. No centro da composição, exiba a ilustração de um smartphone moderno de perfil frontal em ângulo sutil destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa. Reduza a escala do bloco do logo, do subtítulo e da ilustração central do produto em 15% a 20%, garantindo margens de segurança limpas e generosas ao redor das bordas da cartela, mantendo a composição compacta e elegante.`;

content = content.replace(p1Old, p1New);

// Update pl1Text, pl2Text, pl3Text, pl4Text, p4Text
const multiOld = `No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados.`;
const multiNew = `No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados. Reduza a escala do logo, do subtítulo e da ilustração do produto em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas de cada quadro.`;

content = content.replace(new RegExp(multiOld.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), multiNew);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated all Board prompts with 15-20% scale reduction and safety margins in apresentacao_board.html!');
