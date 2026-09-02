const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const p6Old = `p6Text: \`Render 3D de estúdio fotorealista de embalagem de estojo duplo em polímero plástico transparente articulado, em pé e aberto sobre mesa de madeira limpa. A metade da FRENTE (à esquerda) possui o topo retangular liso e limpo (SEM CABIDEIRO NO LADO DA FRENTE). APENAS a metade do VERSO (à direita) possui o cabideiro de polímero estendido no topo com o furo Euro Slot, reproduzindo a geometria física da primeira imagem de referência anexada. Cada metade do estojo preserva estritamente a proporção retangular vertical física 209:402. A face da frente aplica 100% da arte 2D gráfica da segunda imagem anexada. A face do verso aplica 100% da arte 2D da terceira imagem anexada. Acabamento em polímero transparente brilhante de estojo rígido, iluminação suave de estúdio commercial 8k. --ar 1:1 --no double hangers, no hanger on left side, no cardboard, no paper box\``;

const p6New = `p6Text: \`Render 3D de estúdio fotorealista de embalagem de estojo duplo em polímero plástico transparente articulado, em pé e aberto sobre mesa de madeira limpa. A metade da FRENTE (à esquerda) possui o topo retangular liso sem cabideiro e exibe 100% da arte da segunda imagem anexada (SMARTPHONE + PELÍCULA FLUTUANTE SOBRE A TELA). APENAS a metade do VERSO (à direita) possui o cabideiro de polímero estendido no topo com furo Euro Slot e exibe 100% da arte da terceira imagem anexada (APENAS PELÍCULA ISOLADA SEM CELULAR AO LADO DOS 5 BENEFÍCIOS). Cada metade preserva a proporção vertical 209:402. Acabamento em polímero transparente brilhante, iluminação de estúdio commercial 8k. --ar 1:1 --no double hangers, no hanger on left side, no cardboard, no paper box\``;

if (content.includes(p6Old)) {
    content = content.replace(p6Old, p6New);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated p6Text to explicitly dictate Smartphone+Film on Front shell and Film-only on Back shell!');
} else {
    console.error('p6Old target string not found');
}
