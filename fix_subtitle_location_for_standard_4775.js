const fs = require('fs');
const path = require('path');

// UPDATE APRESENTACAO_FRAME.HTML
const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

// Target p1Text (47:75)
const oldP1 = `p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O fundo gráfico deve ser 100% contínuo, íntegro e limpo. NUNCA desenhe círculos brancos, anéis ou furos simulados na arte gráfica. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser mantido de forma compacta. Se o subtítulo '[SUBTITULO]' estiver próximo da área de corte dos furos superiores, posicione o subtítulo no espaço limpo da região inferior da cartela, garantindo leitura limpa, perfeito equilíbrio visual e distância adequada dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no cutout shapes, no white fills, no icons, no badges, no box, no cutouts, no 3d mockup, no text on borders, no thin borders\``;

const newP1 = `p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O fundo gráfico deve ser 100% contínuo, íntegro e limpo. NUNCA desenhe círculos brancos, anéis ou furos simulados na arte gráfica. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser agrupado de forma compacta e posicionado estritamente na região do terço superior da cartela, mantendo uma margem de segurança limpa do topo, deixando a metade inferior totalmente limpa para a área dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no cutout shapes, no white fills, no icons, no badges, no box, no cutouts, no 3d mockup, no text on borders, no thin borders\``;

// Target p4Text (47:75)
const oldP4 = `p4Text: \`Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no terço superior (ou região inferior) e o estilo visual de fundo limpo e contínuo. NUNCA desenhe círculos brancos, anéis ou furos simulados na arte. Preencha 100% do enquadramento sem adicionar molduras perimetrais nem textos minúsculos perto das bordas. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no text on borders, no thin borders\``;

const newP4 = `p4Text: \`Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no terço superior e o estilo visual de fundo limpo e contínuo. NUNCA desenhe círculos brancos, anéis ou furos simulados na arte. Preencha 100% do enquadramento sem adicionar molduras perimetrais nem textos minúsculos perto das bordas. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no text on borders, no thin borders\``;

// Target p6Text (47:75)
const oldP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos dois furos da esquerda), replicando fielmente a faca técnica física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo da área dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

const newP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos dois furos da esquerda), replicando fielmente a faca técnica física original. O bloco do logo da marca e subtítulo '[SUBTITULO]' fica posicionado estritamente no terço superior da cartela. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

if (frameContent.includes(oldP1)) {
    frameContent = frameContent.replace(oldP1, newP1);
    console.log('Updated p1Text for 47:75 (Subtitle strictly in top third)');
} else {
    console.warn('Could not find oldP1 match');
}

if (frameContent.includes(oldP4)) {
    frameContent = frameContent.replace(oldP4, newP4);
    console.log('Updated p4Text for 47:75 (Subtitle strictly in top third)');
} else {
    console.warn('Could not find oldP4 match');
}

if (frameContent.includes(oldP6)) {
    frameContent = frameContent.replace(oldP6, newP6);
    console.log('Updated p6Text for 47:75 (Subtitle strictly in top third)');
} else {
    console.warn('Could not find oldP6 match');
}

fs.writeFileSync(framePath, frameContent, 'utf8');
console.log('Saved apresentacao_frame.html');
