const fs = require('fs');
const path = require('path');

// 1. UPDATE APRESENTACAO_FRAME.HTML
const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

const oldFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado 47:75 (canvas 993x1584 px). Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo funcionam como aberturas de perfuração vazada de máscara alfa (100% transparentes, sem preenchimento branco ou círculos pintados).

MAPEAMENTO RÍGIDO DE COORDENADAS E DIÂMETRO AMPLIADO (3 FUROS):
• Furo Esquerdo Superior: Centro X = 24% | Y = 56% | Diâmetro Ampliado = 35% a 36% da largura da cartela (~355 px).
• Furo Esquerdo Inferior: Centro X = 24% | Y = 74% | Diâmetro Ampliado = 35% a 36% da largura da cartela (~355 px), compartilhado no mesmo eixo X.
• Furo Direito: Centro X = 65% | Y = 62% | Diâmetro Ampliado = 34% a 35% da largura (~345 px), ligeiramente mais compacto e posicionado verticalmente entre os furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico.
• Espaçamento Proporcional: Distância uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) entre as bordas das lentes, preenchendo com maior destaque a área útil da cartela.

O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado no terço superior. Não reinterpretar, centralizar ou redistribuir os furos. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no border overflow, no edge collision, no box, no 3d mockup, no altered geometry, no floating circles\``;

const newFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado 47:75 (canvas 993x1584 px). Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo funcionam como aberturas de perfuração vazada de máscara alfa (100% transparentes, sem preenchimento branco ou círculos pintados).

MAPEAMENTO RÍGIDO DE COORDENADAS E SEPARAÇÃO PROPORCIONAL (3 FUROS):
• Furo Esquerdo Superior: Centro X = 23% | Y = 54% | Diâmetro = 34% a 35% da largura da cartela (~345 px).
• Furo Esquerdo Inferior: Centro X = 23% | Y = 76% | Diâmetro = 34% a 35% da largura (~345 px), compartilhado no mesmo eixo X com separação vertical limpa do furo superior.
• Furo Direito: Centro X = 67% | Y = 63% | Diâmetro = 33% a 34% da largura (~335 px), posicionado verticalmente entre os furos esquerdos (LIGEIRAMENTE ACIMA do ponto médio) e afastado à direita.
• Vão e Separação Proporcional: Distância limpa e visível de aproximadamente 20 px a 25 px (3.5 mm a 4.0 mm) entre as bordas de cada um dos 3 furos, garantindo que fiquem ligeiramente separados e independentes entre si (sem encostar ou colar), replicando exatamente o gabarito CAD de linha vermelha.

O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado no terço superior. Não reinterpretar, centralizar ou redistribuir os furos. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no touching circles, no merged cutouts, no border overflow, no edge collision, no box, no 3d mockup, no altered geometry, no floating circles\``;

if (frameContent.includes(oldFrameP6)) {
    frameContent = frameContent.replace(oldFrameP6, newFrameP6);
    console.log('Successfully updated p6Text in apresentacao_frame.html with proportional circle separation');
} else {
    console.warn('Could not match oldFrameP6 in apresentacao_frame.html');
}

fs.writeFileSync(framePath, frameContent, 'utf8');

// 2. UPDATE APRESENTACAO_INTERATIVA.HTML
const interativaPath = path.join(__dirname, 'apresentacao_interativa.html');
if (fs.existsSync(interativaPath)) {
    let interativaContent = fs.readFileSync(interativaPath, 'utf8');

    const oldInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem alterar NENHUM elemento. Os três furos circulares funcionam como aberturas de máscara alfa 100% transparentes. GEOMETRIA RÍGIDA DO GABARITO CAD COM DIÂMETRO AMPLIADO:
• Furo Esquerdo Superior: Centro X = 24% | Y = 56% | Diâmetro = 35% a 36% da largura.
• Furo Esquerdo Inferior: Centro X = 24% | Y = 74% | Diâmetro = 35% a 36% da largura, mesmo eixo X.
• Furo Direito: Centro X = 65% | Y = 62% | Diâmetro = 34% a 35% da largura, situado verticalmente entre os furos esquerdos, LIGEIRAMENTE ACIMA do ponto médio geométrico.
• Espaçamento Proporcional: Distância de ~16 px (2.5 a 3.0 mm) entre bordas, preenchendo mais a área da cartela.
O bloco de logo e subtítulo '[SUBTITULO]' fica no terço superior. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no border overflow, no edge collision, no box, no 3d mockup, no altered geometry, no floating circles\``;

    const newInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte em sistema de coordenadas normalizado. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem alterar NENHUM elemento. Os três furos circulares funcionam como aberturas de máscara alfa 100% transparentes. GEOMETRIA RÍGIDA DO GABARITO CAD COM SEPARAÇÃO PROPORCIONAL:
• Furo Esquerdo Superior: Centro X = 23% | Y = 54% | Diâmetro = 34% a 35% da largura.
• Furo Esquerdo Inferior: Centro X = 23% | Y = 76% | Diâmetro = 34% a 35% da largura, mesmo eixo X com separação vertical limpa.
• Furo Direito: Centro X = 67% | Y = 63% | Diâmetro = 33% a 34% da largura, posicionado entre os furos esquerdos (LIGEIRAMENTE ACIMA do ponto médio) e afastado à direita.
• Vão e Separação Proporcional: Distância limpa de ~20 px a 25 px (3.5 a 4.0 mm) entre as bordas de cada furo (sem encostar ou colar), replicando o gabarito CAD.
O bloco de logo e subtítulo '[SUBTITULO]' fica no terço superior. Aplicar como máscara alfa com recorte transparente real. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no touching circles, no merged cutouts, no border overflow, no edge collision, no box, no 3d mockup, no altered geometry, no floating circles\``;

    if (interativaContent.includes(oldInterativaP6)) {
        interativaContent = interativaContent.replace(oldInterativaP6, newInterativaP6);
        fs.writeFileSync(interativaPath, interativaContent, 'utf8');
        console.log('Successfully updated apresentacao_interativa.html with proportional circle separation');
    } else {
        console.warn('Could not match oldInterativaP6 in apresentacao_interativa.html');
    }
}
