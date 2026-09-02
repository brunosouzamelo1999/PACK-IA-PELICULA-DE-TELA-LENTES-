const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const targetOld = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba a ilustração do smartphone com a película de vidro flutuante. Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no 3d mockup, no box\`,`;

const targetNew = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

if (content.includes(targetOld)) {
    content = content.replace(targetOld, targetNew);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated p4bText (Verso 2D) to render ONLY the floating glass film without smartphone!');
} else {
    console.error('Target string not found!');
}
