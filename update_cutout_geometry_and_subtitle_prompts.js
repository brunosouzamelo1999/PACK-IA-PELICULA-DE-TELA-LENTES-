const fs = require('fs');
const path = require('path');

// 1. UPDATE APRESENTACAO_FRAME.HTML
const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

// Target p6Text in apresentacao_frame.html
const oldFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares devem manter exatamente Ø 68 px, com espaçamento uniforme de aproximadamente 16 px entre bordas. O furo da direita deve estar geometricamente equidistante dos dois furos da esquerda, posicionado no ponto médio perpendicular entre eles. Não alterar diâmetro, posição relativa ou geometria dos furos. Não mude de posição nenhum elemento gráfico ou artístico (incluindo textos, logos e fundos), a faca pode perfurar e cortar diretamente por cima de qualquer elemento exatamente onde ele está. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no box, no 3d mockup, no altered geometry, no floating circles\``;

const newFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos dois furos da esquerda), replicando fielmente a faca técnica física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo da área dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no box, no 3d mockup, no altered geometry, no floating circles\``;

// Target p1Text in apresentacao_frame.html
const oldFrameP1 = `p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser agrupado de forma compacta e posicionado estritamente na região do terço superior da cartela, mantendo uma margem de segurança limpa do topo, deixando a metade inferior totalmente limpa para a área dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\``;

const newFrameP1 = `p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser mantido de forma compacta. Se o subtítulo '[SUBTITULO]' estiver próximo da área de corte dos furos superiores, posicione o subtítulo no espaço limpo da região inferior da cartela, garantindo leitura limpa, perfeito equilíbrio visual e distância adequada dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\``;

// Target cuts[4] in apresentacao_frame.html
const oldFrameCut4 = `4: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 4): Utilize a primeira imagem anexada (Gabarito Faca Corte 4) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os TRÊS FUROS CIRCULARES EM ARRANJO TRIANGULAR DA CÂMERA (PIRÂMIDE) da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\``;

const newFrameCut4 = `4: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 4): Utilize a primeira imagem anexada (Gabarito Faca Corte 4) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os TRÊS FUROS CIRCULARES EM ARRANJO TRIANGULAR DA CÂMERA (PIRÂMIDE) da primeira imagem funcionam como aberturas vazadas transparentes de faca, com o furo da direita totalmente COLADO e tangente aos dois furos da esquerda (vão zero). Se o subtítulo '[SUBTITULO]' estiver próximo dos furos superiores, posicione o subtítulo no espaço limpo da parte inferior da cartela. Não mude de posição nenhum outro elemento gráfico. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\``;

if (frameContent.includes(oldFrameP6)) {
    frameContent = frameContent.replace(oldFrameP6, newFrameP6);
    console.log('Successfully updated p6Text in apresentacao_frame.html');
} else {
    console.warn('Could not find exact oldFrameP6 match in apresentacao_frame.html');
}

if (frameContent.includes(oldFrameP1)) {
    frameContent = frameContent.replace(oldFrameP1, newFrameP1);
    console.log('Successfully updated p1Text in apresentacao_frame.html');
} else {
    console.warn('Could not find exact oldFrameP1 match in apresentacao_frame.html');
}

if (frameContent.includes(oldFrameCut4)) {
    frameContent = frameContent.replace(oldFrameCut4, newFrameCut4);
    console.log('Successfully updated cuts[4] in apresentacao_frame.html');
} else {
    console.warn('Could not find exact oldFrameCut4 match in apresentacao_frame.html');
}

fs.writeFileSync(framePath, frameContent, 'utf8');

// 2. UPDATE APRESENTACAO_INTERATIVA.HTML
const interativaPath = path.join(__dirname, 'apresentacao_interativa.html');
if (fs.existsSync(interativaPath)) {
    let interativaContent = fs.readFileSync(interativaPath, 'utf8');
    const oldInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares devem manter exatamente Ø 68 px, com espaçamento uniforme de aproximadamente 16 px entre bordas. O furo da direita deve estar geometricamente equidistante dos dois furos da esquerda, posicionado no ponto médio perpendicular entre eles. Não alterar diâmetro, posição relativa ou geometria dos furos. Não mude de posição nenhum elemento gráfico ou artístico (incluindo textos, logos, fundos, fotos de celular e lentes), a faca pode perfurar e cortar diretamente por cima de qualquer elemento exatamente onde ele está. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no box, no 3d mockup, no altered geometry, no floating circles\``;

    const newInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap/espaçamento nulo entre a borda do furo da direita e a junção dos furos da esquerda), replicando fielmente a faca física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no box, no 3d mockup, no altered geometry, no floating circles\``;

    if (interativaContent.includes(oldInterativaP6)) {
        interativaContent = interativaContent.replace(oldInterativaP6, newInterativaP6);
        fs.writeFileSync(interativaPath, interativaContent, 'utf8');
        console.log('Successfully updated p6Text in apresentacao_interativa.html');
    } else {
        console.warn('Could not find exact oldInterativaP6 match in apresentacao_interativa.html');
    }
}
