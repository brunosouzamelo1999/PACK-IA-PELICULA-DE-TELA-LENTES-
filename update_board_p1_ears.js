const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const target = `p1Text: \`Layout gráfico em 2D plano para a face frontal de embalagem retangular de película de tela de celular, imagem retangular 2D estritamente plana, proporção [PROPORCAO]. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O topo contém o logo do cliente e o subtítulo '[SUBTITULO]'. No centro da composição, exiba a ilustração de um smartphone moderno modelo 17 Pro Max com a película de vidro temperado transparente com borda preta fina contornando a tela flutuando sobre a tela (com a silhueta da faca: cantos arredondados e bordas pretas de alta precisão). Imagem retangular plana e contínua sem ícones de benefícios. --ar [PROPORCAO] --no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,`;

const replacement = `p1Text: \`Layout gráfico em 2D plano para a face frontal de embalagem retangular de película de tela de celular, imagem retangular 2D estritamente plana, proporção [PROPORCAO]. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O topo contém o logo do cliente e o subtítulo '[SUBTITULO]'. No centro da composição, exiba a ilustração de um smartphone moderno modelo 17 Pro Max com a película de vidro protetora transparente flutuando sobre a tela. A película possui a silhueta da faca física real: borda preta fina contornando a extremidade, cantos inferiores arredondados e o recorte curvo de orelhas no topo. Imagem retangular plana e contínua sem ícones de benefícios. --ar [PROPORCAO] --no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated p1Text with curved ears notch in apresentacao_board.html');
} else {
    console.error('Target string not found!');
}
