const fs = require('fs');
const path = require('path');

// 1. UPDATE APRESENTACAO_FRAME.HTML
const framePath = path.join(__dirname, 'apresentacao_frame.html');
let frameContent = fs.readFileSync(framePath, 'utf8');

// Update Slide 5 Notes List in apresentacao_frame.html
const oldFrameNotes = `<ul class="notes-list">
                            <li><strong>Ordem de Anexo Rígida</strong>: Anexe 1º A Faca em branco do corte selecionado + 2º A Arte 2D Aprovada pelo cliente.</li>
                            <li><strong>Aberturas Vazadas Transparentes</strong>: Os furos circulares das lentes funcionam como aberturas vazadas de faca.</li>
                            <li><strong>Corte Direto</strong>: A faca pode perfurar e cortar diretamente por cima de qualquer elemento exatamente onde ele está.</li>
                        </ul>`;

const newFrameNotes = `<ul class="notes-list">
                            <li><strong>Ordem de Anexo Rígida</strong>: Anexe 1º A Faca em branco do corte selecionado + 2º A Arte 2D Aprovada pelo cliente.</li>
                            <li><strong>Remoção Ativa da Arte (Efeito Remove Background)</strong>: Os furos de corte NÃO são círculos brancos pintados na arte, mas sim a perfuração e remoção total da própria arte gráfica de fundo (vazado transparente de canal alfa).</li>
                            <li><strong>Corte Direto sem Formas Brancas</strong>: A faca perfura, recorta e apaga a arte gráfica por onde passa. Nunca desenhe ou preencha círculos brancos na arte.</li>
                        </ul>`;

if (frameContent.includes(oldFrameNotes)) {
    frameContent = frameContent.replace(oldFrameNotes, newFrameNotes);
    console.log('Successfully updated Slide 5 Notes in apresentacao_frame.html');
} else {
    console.warn('Could not match oldFrameNotes in apresentacao_frame.html');
}

// Target p6Text in apresentacao_frame.html
const oldFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos dois furos da esquerda), replicando fielmente a faca técnica física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo da área dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no box, no 3d mockup, no altered geometry, no floating circles\``;

const newFrameP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos dois furos da esquerda), replicando fielmente a faca técnica física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo da área dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Não mude de posição nenhum outro elemento gráfico ou artístico. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

if (frameContent.includes(oldFrameP6)) {
    frameContent = frameContent.replace(oldFrameP6, newFrameP6);
    console.log('Successfully updated p6Text in apresentacao_frame.html');
} else {
    console.warn('Could not match oldFrameP6 in apresentacao_frame.html');
}

// Target p1Text in apresentacao_frame.html
const oldFrameP1 = `p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser mantido de forma compacta. Se o subtítulo '[SUBTITULO]' estiver próximo da área de corte dos furos superiores, posicione o subtítulo no espaço limpo da região inferior da cartela, garantindo leitura limpa, perfeito equilíbrio visual e distância adequada dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\``;

const newFrameP1 = `p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O fundo gráfico deve ser 100% contínuo, íntegro e limpo. NUNCA desenhe círculos brancos, anéis ou furos simulados na arte gráfica. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser mantido de forma compacta. Se o subtítulo '[SUBTITULO]' estiver próximo da área de corte dos furos superiores, posicione o subtítulo no espaço limpo da região inferior da cartela, garantindo leitura limpa, perfeito equilíbrio visual e distância adequada dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no cutout shapes, no white fills, no icons, no badges, no box, no cutouts, no 3d mockup, no text on borders, no thin borders\``;

if (frameContent.includes(oldFrameP1)) {
    frameContent = frameContent.replace(oldFrameP1, newFrameP1);
    console.log('Successfully updated p1Text in apresentacao_frame.html');
} else {
    console.warn('Could not match oldFrameP1 in apresentacao_frame.html');
}

// Target p4Text in apresentacao_frame.html
const oldFrameP4 = `p4Text: \`Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no terço superior e o estilo visual de fundo. Preencha 100% do enquadramento sem adicionar molduras perimetrais nem textos minúsculos perto das bordas. --ar 47:75 --no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no text on borders, no thin borders\``;

const newFrameP4 = `p4Text: \`Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no terço superior (ou região inferior) e o estilo visual de fundo limpo e contínuo. NUNCA desenhe círculos brancos, anéis ou furos simulados na arte. Preencha 100% do enquadramento sem adicionar molduras perimetrais nem textos minúsculos perto das bordas. --ar 47:75 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no text on borders, no thin borders\``;

if (frameContent.includes(oldFrameP4)) {
    frameContent = frameContent.replace(oldFrameP4, newFrameP4);
    console.log('Successfully updated p4Text in apresentacao_frame.html');
} else {
    console.warn('Could not match oldFrameP4 in apresentacao_frame.html');
}

// Target cuts[1..4] in apresentacao_frame.html
const oldCut1 = `1: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 1): Utilize a primeira imagem anexada (Gabarito Faca Corte 1) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES ALINHADOS VERTICALMENTE NO LADO ESQUERDO da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\``;

const newCut1 = `1: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 1): Utilize a primeira imagem anexada (Gabarito Faca Corte 1) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES ALINHADOS VERTICALMENTE NO LADO ESQUERDO da primeira imagem funcionam como aberturas de perfuração vazada de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): A arte gráfica é totalmente recortada e apagada dentro da área dos furos (transparência vazada sem círculos brancos pintados). Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry\``;

const oldCut2 = `2: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 2): Utilize a primeira imagem anexada (Gabarito Faca Corte 2) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES ALINHADOS VERTICALMENTE NO CENTRO da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\``;

const newCut2 = `2: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 2): Utilize a primeira imagem anexada (Gabarito Faca Corte 2) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES ALINHADOS VERTICALMENTE NO CENTRO da primeira imagem funcionam como aberturas de perfuração vazada de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): A arte gráfica é totalmente recortada e apagada dentro da área dos furos (transparência vazada sem círculos brancos pintados). Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry\``;

const oldCut3 = `3: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 3): Utilize a primeira imagem anexada (Gabarito Faca Corte 3) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES EM ÂNGULO DIAGONAL da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\``;

const newCut3 = `3: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 3): Utilize a primeira imagem anexada (Gabarito Faca Corte 3) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES EM ÂNGULO DIAGONAL da primeira imagem funcionam como aberturas de perfuração vazada de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): A arte gráfica é totalmente recortada e apagada dentro da área dos furos (transparência vazada sem círculos brancos pintados). Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry\``;

const oldCut4 = `4: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 4): Utilize a primeira imagem anexada (Gabarito Faca Corte 4) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os TRÊS FUROS CIRCULARES EM ARRANJO TRIANGULAR DA CÂMERA (PIRÂMIDE) da primeira imagem funcionam como aberturas vazadas transparentes de faca, com o furo da direita totalmente COLADO e tangente aos dois furos da esquerda (vão zero). Se o subtítulo '[SUBTITULO]' estiver próximo dos furos superiores, posicione o subtítulo no espaço limpo da parte inferior da cartela. Não mude de posição nenhum outro elemento gráfico. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\``;

const newCut4 = `4: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 4): Utilize a primeira imagem anexada (Gabarito Faca Corte 4) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os TRÊS FUROS CIRCULARES EM ARRANJO TRIANGULAR DA CÂMERA (PIRÂMIDE) da primeira imagem funcionam como aberturas de perfuração vazada de faca, com o furo da direita totalmente COLADO e tangente aos dois furos da esquerda (vão zero). REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): A arte gráfica é totalmente recortada e apagada dentro da área dos furos (transparência vazada sem círculos brancos pintados). Se o subtítulo '[SUBTITULO]' estiver próximo dos furos superiores, posicione o subtítulo no espaço limpo da parte inferior da cartela. Não mude de posição nenhum outro elemento gráfico. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry\``;

if (frameContent.includes(oldCut1)) frameContent = frameContent.replace(oldCut1, newCut1);
if (frameContent.includes(oldCut2)) frameContent = frameContent.replace(oldCut2, newCut2);
if (frameContent.includes(oldCut3)) frameContent = frameContent.replace(oldCut3, newCut3);
if (frameContent.includes(oldCut4)) frameContent = frameContent.replace(oldCut4, newCut4);

fs.writeFileSync(framePath, frameContent, 'utf8');
console.log('Saved updated apresentacao_frame.html');

// 2. UPDATE APRESENTACAO_INTERATIVA.HTML
const interativaPath = path.join(__dirname, 'apresentacao_interativa.html');
if (fs.existsSync(interativaPath)) {
    let interativaContent = fs.readFileSync(interativaPath, 'utf8');

    const oldInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap/espaçamento nulo entre a borda do furo da direita e a junção dos furos da esquerda), replicando fielmente a faca física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no box, no 3d mockup, no altered geometry, no floating circles\``;

    const newInterativaP6 = `p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas de perfuração vazada transparente de faca. REMOÇÃO ATIVA DE ARTE (EFEITO REMOVE BACKGROUND): Os furos de corte NÃO são círculos brancos pintados, mas sim a perfuração e remoção total da arte gráfica de fundo nessa área (transparência vazada de canal alfa sem preenchimento). Os três furos circulares formam um arranjo compacto (tri-cluster) onde o furo da direita é totalmente COLADO e tangente à junção dos dois furos da esquerda, com VÃO ZERO (zero gap entre o furo da direita e a junção dos furos da esquerda), replicando fielmente a faca física original. Se o subtítulo '[SUBTITULO]' estiver muito próximo dos furos superiores, o subtítulo pode ser posicionado no espaço livre da parte inferior da cartela para garantir leitura limpa e perfeito equilíbrio visual. Não alterar diâmetro, posição relativa ou geometria colada dos furos. Imagem 2D plana contínua perfeitamente alinhada. --ar [PROPORCAO] --no white circles, no solid white shapes, no painted circles, no drawn holes, no white fills, no box, no 3d mockup, no altered geometry, no floating circles\``;

    if (interativaContent.includes(oldInterativaP6)) {
        interativaContent = interativaContent.replace(oldInterativaP6, newInterativaP6);
        fs.writeFileSync(interativaPath, interativaContent, 'utf8');
        console.log('Successfully updated apresentacao_interativa.html');
    }
}
