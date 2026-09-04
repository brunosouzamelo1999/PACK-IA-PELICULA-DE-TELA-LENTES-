const fs = require('fs');
const path = require('path');

// 1. UPDATE APRESENTACAO_FRAME.HTML
const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

const oldFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado 47:75. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo funcionam como aberturas de perfuração vazada de máscara alfa (100% transparentes, sem preenchimento branco ou círculos pintados). GEOMETRIA RÍGIDA DO GABARITO CAD (3 FUROS):
• Furo Esquerdo Superior: Referência vertical principal da câmera no eixo X esquerdo.
• Furo Esquerdo Inferior: Posicionado diretamente abaixo do primeiro, compartilhando o mesmo eixo X.
• Furo Direito: Posicionado em seu eixo X próprio à direita, situado verticalmente entre os dois furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico (alinhado ao layout técnico do cooktop de lentes).
• Espaçamento Proporcional: Distância uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) medida estritamente entre as bordas das lentes, preservando a escala física em relação à cartela.
O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado no terço superior. Não reinterpretar, centralizar ou redistribuir os furos. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

const newFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado 47:75. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo funcionam como aberturas de perfuração vazada de máscara alfa (100% transparentes, sem preenchimento branco ou círculos pintados). GEOMETRIA RÍGIDA DO GABARITO CAD (3 FUROS):
• Furo Esquerdo Superior: Referência vertical principal da câmera no eixo X esquerdo.
• Furo Esquerdo Inferior: Posicionado diretamente abaixo do primeiro, compartilhando o mesmo eixo X.
• Furo Direito: Posicionado em seu eixo X próprio à direita, situado verticalmente entre os dois furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico (alinhado ao layout técnico do cooktop de lentes).
• Diâmetro Idêntico Rígido: Todos os 3 furos circulares possuem estritamente o MESMO diâmetro idêntico e uniforme (~32.5% da largura da cartela / Ø 322 px). É proibido alterar a escala do furo direito.
• Espaçamento Proporcional: Distância uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) medida estritamente entre as bordas das lentes, preservando a escala física em relação à cartela.
O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado no terço superior. Não reinterpretar, centralizar ou redistribuir os furos. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no uneven circle diameters, no unequal hole sizes, no box, no 3d mockup, no altered geometry, no floating circles\``;

if (frameContent.includes(oldFrameP6)) {
    frameContent = frameContent.replace(oldFrameP6, newFrameP6);
    console.log('Successfully updated p6Text in apresentacao_frame.html with identical diameter rule');
} else {
    console.warn('Could not match oldFrameP6 in apresentacao_frame.html');
}

fs.writeFileSync(framePath, frameContent, 'utf8');

// 2. UPDATE APRESENTACAO_INTERATIVA.HTML
const interativaPath = path.join(__dirname, 'apresentacao_interativa.html');
if (fs.existsSync(interativaPath)) {
    let interativaContent = fs.readFileSync(interativaPath, 'utf8');

    const oldInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem alterar NENHUM elemento. Os três furos circulares funcionam como aberturas de máscara alfa 100% transparentes. GEOMETRIA RÍGIDA DO GABARITO CAD:
• Furo Esquerdo Superior: Referência no eixo X esquerdo.
• Furo Esquerdo Inferior: Diretamente abaixo, mesmo eixo X.
• Furo Direito: Eixo X próprio à direita, posicionado verticalmente entre os furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico.
• Espaçamento Proporcional: Distância de ~16 px (2.5 a 3.0 mm) entre bordas.
O bloco de logo e subtítulo '[SUBTITULO]' fica no terço superior. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

    const newInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem alterar NENHUM elemento. Os três furos circulares funcionam como aberturas de máscara alfa 100% transparentes. GEOMETRIA RÍGIDA DO GABARITO CAD:
• Furo Esquerdo Superior: Referência no eixo X esquerdo.
• Furo Esquerdo Inferior: Diretamente abaixo, mesmo eixo X.
• Furo Direito: Eixo X próprio à direita, posicionado verticalmente entre os furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico.
• Diâmetro Idêntico Rígido: Todos os 3 furos possuem o MESMO diâmetro uniforme (~32.5% da largura da cartela).
• Espaçamento Proporcional: Distância de ~16 px (2.5 a 3.0 mm) entre bordas.
O bloco de logo e subtítulo '[SUBTITULO]' fica no terço superior. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no uneven circle diameters, no unequal hole sizes, no box, no 3d mockup, no altered geometry, no floating circles\``;

    if (interativaContent.includes(oldInterativaP6)) {
        interativaContent = interativaContent.replace(oldInterativaP6, newInterativaP6);
        fs.writeFileSync(interativaPath, interativaContent, 'utf8');
        console.log('Successfully updated apresentacao_interativa.html with identical diameter rule');
    } else {
        console.warn('Could not match oldInterativaP6 in apresentacao_interativa.html');
    }
}
