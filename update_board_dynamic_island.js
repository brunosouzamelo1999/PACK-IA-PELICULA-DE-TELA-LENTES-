const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /p1Text:\s*`[\s\S]*?`,/;
const replacement = `p1Text: \`Layout gráfico em 2D plano para a face frontal de embalagem retangular de película de tela de celular, imagem retangular 2D estritamente plana, proporção [PROPORCAO]. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O topo contém o logo do cliente e o subtítulo '[SUBTITULO]'. No centro da composição, exiba a ilustração de um smartphone moderno de perfil frontal em ângulo sutil destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa. Flutuando paralelamente sobre a tela do celular, exiba uma película de vidro temperado 100% transparente com o contorno de borda preta fina ultra-precisa ao redor do perímetro do vidro e cantos arredondados (estilo película de tela inteira Full Screen Black Border / 2.5D Glass Shield). Mantenha a proporção [PROPORCAO], a iluminação limpa e a nitidez da arte original. --ar [PROPORCAO] --no top ears, no notch cutouts, no icons, no badges, no box, no 3d mockup\`,`;

if (targetRegex.test(content)) {
    content = content.replace(targetRegex, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated p1Text with Dynamic Island camera detail in apresentacao_board.html!');
} else {
    console.error('Target regex not found in apresentacao_board.html!');
}
