const fs = require('fs');
const path = require('path');

// 1. UPDATE APRESENTACAO_FRAME.HTML
const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

// Target p6Text for Standard 47:75
const oldFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos dois furos da esquerda), replicando fielmente a faca técnica física original. O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado estritamente no terço superior da cartela. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

const newFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). GEOMETRIA DA FACA PADRÃO (47:75): Os três furos circulares mantêm espaçamento proporcional uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) entre bordas, estando o furo da direita posicionado no ponto médio perpendicular entre os dois furos verticais da esquerda, replicando exatamente o gabarito CAD físico de linha vermelha. O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado estritamente no terço superior da cartela. Não alterar diâmetro, posição relativa ou espaçamento proporcional dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

if (frameContent.includes(oldFrameP6)) {
    frameContent = frameContent.replace(oldFrameP6, newFrameP6);
    console.log('Successfully updated p6Text (47:75) in apresentacao_frame.html');
} else {
    console.warn('Could not match oldFrameP6 in apresentacao_frame.html');
}

fs.writeFileSync(framePath, frameContent, 'utf8');

// 2. UPDATE APRESENTACAO_INTERATIVA.HTML
const interativaPath = path.join(__dirname, 'apresentacao_interativa.html');
if (fs.existsSync(interativaPath)) {
    let interativaContent = fs.readFileSync(interativaPath, 'utf8');

    const oldInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos furos da esquerda), replicando fielmente a faca física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

    const newInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). GEOMETRIA DA FACA DA LENTE: Os três furos circulares mantêm espaçamento proporcional uniforme de aproximadamente 16 px (2.5 mm a 3.0 mm) entre bordas, estando o furo da direita posicionado no ponto médio perpendicular entre os dois furos verticais da esquerda, replicando exatamente o gabarito CAD físico original. O bloco do logo da marca e subtítulo '[SUBTITULO]' fica no terço superior. Não alterar diâmetro, posição relativa ou espaçamento proporcional dos furos. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

    if (interativaContent.includes(oldInterativaP6)) {
        interativaContent = interativaContent.replace(oldInterativaP6, newInterativaP6);
        fs.writeFileSync(interativaPath, interativaContent, 'utf8');
        console.log('Successfully updated p6Text in apresentacao_interativa.html');
    } else {
        console.warn('Could not match oldInterativaP6 in apresentacao_interativa.html');
    }
}
