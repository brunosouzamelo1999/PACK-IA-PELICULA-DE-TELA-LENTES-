const fs = require('fs');
const path = require('path');

const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

const oldFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). GEOMETRIA E ALINHAMENTO ELEVADO DA FACA PADRÃO (47:75): Os três furos circulares mantêm espaçamento proporcional uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) entre bordas. ALINHAMENTO VERTICAL DO FURO DA DIREITA: O centro do furo circular da direita deve SUBIR e ficar posicionado na metade da altura exata (ponto médio elevado) entre o furo superior esquerdo e o furo inferior esquerdo, formando um arranjo triangular perfeitamente alinhado sem descair. O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado estritamente no terço superior da cartela. Não alterar diâmetro, posição relativa ou espaçamento proporcional dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

const newFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado 47:75. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo funcionam como aberturas de perfuração vazada de máscara alfa (100% transparentes, sem preenchimento branco ou círculos pintados). GEOMETRIA RÍGIDA DO GABARITO CAD (3 FUROS):
• Furo Esquerdo Superior: Referência vertical principal da câmera no eixo X esquerdo.
• Furo Esquerdo Inferior: Posicionado diretamente abaixo do primeiro, compartilhando o mesmo eixo X.
• Furo Direito: Posicionado em seu eixo X próprio à direita, situado verticalmente entre os dois furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico (alinhado ao layout técnico do cooktop de lentes).
• Espaçamento Proporcional: Distância uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) medida estritamente entre as bordas das lentes, preservando a escala física em relação à cartela.
O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado no terço superior. Não reinterpretar, centralizar ou redistribuir os furos. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

if (frameContent.includes(oldFrameP6)) {
    frameContent = frameContent.replace(oldFrameP6, newFrameP6);
    fs.writeFileSync(framePath, frameContent, 'utf8');
    console.log('Successfully updated p6Text in apresentacao_frame.html');
} else {
    console.warn('Still could not match oldFrameP6 in apresentacao_frame.html');
}
