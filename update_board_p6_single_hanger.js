const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const b64PolymerPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/estojo_polimero_real.jpg';

let html = fs.readFileSync(htmlPath, 'utf8');

// Update p6Text prompt
const p6Old = `p6Text: \`Render 3D de estúdio fotorealista de produto de embalagem de estojo acrílico transparente para película de celular sobre mesa de madeira limpa. A embalagem de estojo está aberta em ângulo de apresentação comercial, exibindo a face da FRENTE à esquerda e a face do VERSO à direita com cabideiro Euro Slot no topo. A face da frente exibe a arte 2D gráfica da primeira imagem anexada. A face do verso exibe a arte 2D com os ícones de benefícios da segunda imagem anexada. Acabamento plástico transparente brilhante de estojo rígido, iluminação suave de estúdio commercial, resolução 8k. --no cardboard, no paper box\``;

const p6New = `p6Text: \`Render 3D de estúdio fotorealista de embalagem de estojo duplo em polímero plástico transparente articulado, em pé e aberto sobre mesa de madeira limpa. A metade da FRENTE (à esquerda) possui o topo retangular liso e limpo (SEM CABIDEIRO NO LADO DA FRENTE). APENAS a metade do VERSO (à direita) possui o cabideiro de polímero estendido no topo com o furo Euro Slot, reproduzindo a geometria física da primeira imagem de referência anexada. A face da frente aplica 100% da arte 2D gráfica da segunda imagem anexada. A face do verso aplica 100% da arte 2D da terceira imagem anexada. Acabamento em polímero transparente brilhante de estojo rígido, iluminação suave de estúdio commercial 8k. --ar 3:2 --no double hangers, no hanger on left side, no cardboard, no paper box\``;

html = html.replace(p6Old, p6New);

// Update Base64 image in Slide 6 if polymer image exists
if (fs.existsSync(b64PolymerPath)) {
    const b64Polymer = fs.readFileSync(b64PolymerPath).toString('base64');
    // Replace the base64 image inside Slide 6
    const imgRegex = /<img src="data:image\/jpeg;base64,[^"]+" style="max-width: 100%; max-height: 280px;/;
    html = html.replace(imgRegex, `<img src="data:image/jpeg;base64,${b64Polymer}" style="max-width: 100%; max-height: 280px;`);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated p6Text in apresentacao_board.html with single right-side Euro Slot hanger rule!');
