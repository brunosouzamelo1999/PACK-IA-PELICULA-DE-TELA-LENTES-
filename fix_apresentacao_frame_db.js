const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const fullDbObj = `        const db = {
            standard: {
                badge: 'LINHA FRAME PADRÃO (47 × 75 mm)',
                proporcao: '47:75',
                p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser agrupado de forma compacta e posicionado estritamente na região do terço superior da cartela, mantendo uma margem de segurança limpa do topo (abaixo da futura linha de corte côncavo), deixando a metade inferior totalmente limpa para a área dos furos das lentes. Imagem retangular plana e contínua sem ícones de benefícios, sem textos pequenos perto da borda, sem molduras perimetrais. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl1Text: \`Adaptação multi-estilo Lote 1 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA POSIÇÃO EXCLUSIVA DE PROTETORES DE LENTES:
• Quadro 1 (Minimalista Clean): Fundo clean, lettering sans-serif, vista da parte traseira inteira do smartphone Prata com o módulo de câmeras destacando os 3 protetores de lentes instalados nas câmeras.
• Quadro 2 (Bauhaus Geométrico): Fundo bauhaus, lettering geométrico, somente os 3 protetores de lentes de câmera metálicos flutuando isolados com brilho de vidro e aro bauhaus.
• Quadro 3 (Brutalismo Monolítico): Fundo brutalista, lettering militar, smartphone Preto Grafite deitado horizontalmente mostrando as lentes de câmera e os protetores escuros foscos.
• Quadro 4 (Maximalismo Vibrante): Fundo maximalista, lettering de impacto, close-up super macro em ângulo 3D com o protetor de lente metálico flutuando em corte de encaixe perfeito sobre a lente do celular.
--ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl2Text: \`Adaptação multi-estilo Lote 2 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA POSIÇÃO EXCLUSIVA DE PROTETORES DE LENTES:
• Quadro 1 (Cyberpunk Neon): Fundo neon, lettering cibernético, vista da parte traseira inteira do smartphone Preto com o módulo de câmeras destacando os 3 protetores de lentes com aro neon.
• Quadro 2 (Luxo Dourado Mármore): Fundo mármore, lettering 3D dourado, somente os 3 protetores de lentes de câmera em ouro 3D flutuando isolados com brilho de vidro e aro de ouro.
• Quadro 3 (Geométrico Abstrato 3D): Fundo cristalino, lettering 3D facetado, smartphone Prata deitado horizontalmente mostrando as lentes de câmera e os protetores em cristal lapidado.
• Quadro 4 (Pop-Art Memphis): Fundo pop-art, lettering artístico, close-up super macro em ângulo 3D com o protetor de lente colorido flutuando em corte de encaixe perfeito sobre a lente do celular.
--ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                p2cText: \`Variação de cores 2x2: Gere 4 novas opções em grade 2x2 explorando paletas de cores distintas, vibrantes e contrastantes entre si em cada quadro, preservando perfeitamente o logo da marca, o subtítulo '[SUBTITULO]' e o estilo visual da imagem anexada. Sem textos nas bordas ou molduras perimetrais. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl3Text: \`Adaptação multi-estilo Lote 3 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA POSIÇÃO EXCLUSIVA DE PROTETORES DE LENTES:
• Quadro 1 (Stealth Carbon Tech): Fundo de fibra de carbono, lettering esportivo, vista da parte traseira inteira do smartphone Preto Fosco com o módulo de câmeras destacando os 3 protetores de lentes em liga de carbono.
• Quadro 2 (Vaporwave Retro-Futurismo): Fundo gradiente 80s, lettering synthwave, somente os 3 protetores de lentes de câmera iridescentes flutuando isolados com brilho de vidro e aro 80s.
• Quadro 3 (Sapphire Crystal): Fundo cristal azul, lettering cromado, smartphone Azul Safira deitado horizontalmente mostrando as lentes de câmera e os protetores em cristal lapidado.
• Quadro 4 (Titanium Industrial): Fundo titânio escovado, lettering a laser, close-up super macro em ângulo 3D com o protetor de lente em metal técnico flutuando em corte de encaixe perfeito sobre a lente do celular.
--ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl4Text: \`Adaptação multi-estilo Lote 4 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA POSIÇÃO EXCLUSIVA DE PROTETORES DE LENTES:
• Quadro 1 (Bento Grid Tech): Layout bento box estilo Apple, lettering UI, vista da parte traseira inteira do smartphone Prata com o módulo de câmeras destacando os 3 protetores de lentes metálicos clean.
• Quadro 2 (Liquid Chromium Acid Tech): Fundo mercúrio cromado, lettering espelhado, somente os 3 protetores de lentes de câmera cromados líquidos flutuando isolados com brilho de vidro e aro espelhado.
• Quadro 3 (Glassmorphism Frosted): Fundo vidro fosco, lettering 3D, smartphone Branco Estelar deitado horizontalmente mostrando as lentes de câmera e os protetores jateados foscos.
• Quadro 4 (Y2K Glitch Matrix): Fundo matriz cibernética, lettering digital, close-up super macro em ângulo 3D com o protetor de lente estilo código neon flutuando em corte de encaixe perfeito sobre a lente do celular.
--ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                p3cText: \`Variação de cores 2x2: Gere 4 novas opções em grade 2x2 explorando paletas de cores distintas, vibrantes e contrastantes entre si em cada quadro, preservando perfeitamente o logo da marca, o subtítulo '[SUBTITULO]' e o estilo visual da imagem anexada. Sem textos nas bordas ou molduras perimetrais. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                p4Text: \`Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no terço superior e o estilo visual de fundo. Preencha 100% do enquadramento sem adicionar molduras perimetrais nem textos minúsculos perto das bordas. --ar 47:75 --no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no text on borders, no thin borders\`,

                p6Text: \`Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre 3 Furos) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Os três furos circulares devem manter exatamente Ø 68 px, com espaçamento uniforme de aproximadamente 16 px entre bordas. O furo da direita deve estar geometricamente equidistante dos dois furos da esquerda, posicionado no ponto médio perpendicular entre eles. Não alterar diâmetro, posição relativa ou geometria dos furos. Não mude de posição nenhum elemento gráfico ou artístico (incluindo textos, logos e fundos), a faca pode perfurar e cortar diretamente por cima de qualquer elemento exatamente onde ele está. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no box, no 3d mockup, no altered geometry, no floating circles\`
            },
            ultimate: {
                badge: 'LINHA FRAME ULTIMATE (Quadrada 1:1)',
                proporcao: '1:1',
                p1Text: \`Layout gráfico em 2D plano para a face frontal de cartela quadrada de protetor de lente de câmera (Linha Smart Frame Ultimate), imagem 2D estritamente plana, proporção exata 1:1. Arte 100% limpa e abstrata focada apenas na identidade visual de fundo. Reproduza exatamente o estilo visual de fundo, cores da marca, textura, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '[SUBTITULO]' deve ser agrupado de forma compacta e posicionado no topo da cartela, deixando toda a área central e inferior totalmente limpa com o arte de fundo abstrato. Imagem plana contínua sem ilustração de celular, sem ilustrações de lentes de câmera, sem anéis de protetores, sem textos pequenos perto da borda e sem molduras perimetrais. --ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl1Text: \`Adaptação multi-estilo Lote 1 em grade 2x2 para Frame Ultimate Quadrado (1:1): Mantenha a proporção 1:1. Posicione o logo da marca e o subtítulo '[SUBTITULO]' no topo. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA PALETA CONCEITUAL PURA DE FUNDO (SEM NENHUM CELULAR OU LENTE DESENHADA):
• Quadro 1 (Minimalista Clean): Fundo minimalista clean de alto impacto, iluminação suave de estúdio, textura sofisticada e lettering sans-serif no topo.
• Quadro 2 (Bauhaus Geométrico): Fundo gráfico bauhaus com formas abstratas elegantes em tom azul corporativo e amarelo, lettering geométrico no topo.
• Quadro 3 (Brutalismo Monolítico): Fundo brutalista escuro em liga metálica jateada fosca com tipografia militar técnica no topo.
• Quadro 4 (Maximalismo Vibrante): Fundo gráfico maximalista moderno com gradientes fluídos de alta energia, contraste vibrante e lettering de impacto no topo.
--ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl2Text: \`Adaptação multi-estilo Lote 2 em grade 2x2 para Frame Ultimate Quadrado (1:1): Mantenha a proporção 1:1. Posicione o logo da marca e o subtítulo '[SUBTITULO]' no topo. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA PALETA CONCEITUAL PURA DE FUNDO (SEM NENHUM CELULAR OU LENTE DESENHADA):
• Quadro 1 (Cyberpunk Neon): Fundo escuro tech com linhas abstratas em circuitos neon ciano e roxo, lettering cibernético no topo.
• Quadro 2 (Luxo Dourado Mármore): Fundo em mármore branco com veios em ouro 3D líquido refinado, lettering premium em ouro no topo.
• Quadro 3 (Geométrico Abstrato 3D): Fundo conceitual em cristal facetado abstrato com refração de luz e lettering 3D no topo.
• Quadro 4 (Pop-Art Memphis): Fundo artístico contemporâneo memphis com padrões visuais criativos e lettering de destaque no topo.
--ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                p2cText: \`Variação de cores 2x2 para Frame Ultimate (1:1): Gere 4 novas opções em grade 2x2 explorando paletas de cores distintas, vibrantes e contrastantes entre si em cada quadro, preservando perfeitamente o logo da marca, o subtítulo '[SUBTITULO]' e o estilo de fundo abstrato da imagem anexada. Mantenha a arte 100% limpa sem celulares, lentes ou molduras perimetrais. --ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl3Text: \`Adaptação multi-estilo Lote 3 em grade 2x2 para Frame Ultimate Quadrado (1:1): Mantenha a proporção 1:1. Posicione o logo da marca e o subtítulo '[SUBTITULO]' no topo. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA PALETA CONCEITUAL PURA DE FUNDO (SEM NENHUM CELULAR OU LENTE DESENHADA):
• Quadro 1 (Stealth Carbon Tech): Fundo técnico em trama de fibra de carbono fosca de alta precisão com lettering esportivo no topo.
• Quadro 2 (Vaporwave Retro-Futurismo): Fundo gradiente iridescente retro-futurista 80s com iluminação synthwave e lettering estilizado no topo.
• Quadro 3 (Sapphire Crystal): Fundo cristalino abstrato em tons de azul safira profundo com efeitos de brilho óptico e lettering cromado no topo.
• Quadro 4 (Titanium Industrial): Fundo metálico em titânio escovado com textura industrial técnica e lettering gravado a laser no topo.
--ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                pl4Text: \`Adaptação multi-estilo Lote 4 em grade 2x2 para Frame Ultimate Quadrado (1:1): Mantenha a proporção 1:1. Posicione o logo da marca e o subtítulo '[SUBTITULO]' no topo. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA PALETA CONCEITUAL PURA DE FUNDO (SEM NENHUM CELULAR OU LENTE DESENHADA):
• Quadro 1 (Bento Grid Tech): Layout bento box gráfico abstrato estilo UI Apple com blocos de tonalidades limpas e lettering técnico no topo.
• Quadro 2 (Liquid Chromium Acid Tech): Fundo abstrato em mercúrio líquido cromado espelhado com reflexos metálicos e lettering espelhado no topo.
• Quadro 3 (Glassmorphism Frosted): Fundo translúcido em vidro fosco jateado com desfoque elegante e lettering 3D no topo.
• Quadro 4 (Y2K Glitch Matrix): Fundo matriz digital cibernética Y2K com efeitos de código neon abstrato e lettering futurista no topo.
--ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                p3cText: \`Variação de cores 2x2 para Frame Ultimate (1:1): Gere 4 novas opções em grade 2x2 explorando paletas de cores distintas, vibrantes e contrastantes entre si em cada quadro, preservando perfeitamente o logo da marca, o subtítulo '[SUBTITULO]' e o estilo de fundo abstrato da imagem anexada. Mantenha a arte 100% limpa sem celulares, lentes ou molduras perimetrais. --ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup, no text on borders, no thin borders\`,

                p4Text: \`Padronização rígida de proporção para Frame Ultimate Quadrado: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '1:1'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no topo e a arte de fundo abstrata. Preencha 100% do enquadramento sem adicionar ilustrações de celulares, lentes de câmera, molduras perimetrais ou textos minúsculos perto das bordas. --ar 1:1 --no smartphone, no phone, no camera lens, no protector rings, no lens circles, no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no text on borders, no thin borders\`,

                cuts: {
                    1: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 1): Utilize a primeira imagem anexada (Gabarito Faca Corte 1) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES ALINHADOS VERTICALMENTE NO LADO ESQUERDO da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\`,
                    2: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 2): Utilize a primeira imagem anexada (Gabarito Faca Corte 2) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES ALINHADOS VERTICALMENTE NO CENTRO da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\`,
                    3: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 3): Utilize a primeira imagem anexada (Gabarito Faca Corte 3) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os DOIS FUROS CIRCULARES EM ÂNGULO DIAGONAL da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\`,
                    4: \`Máscara de camada gráfica 2D direta (Frame Ultimate - Faca Corte Modelo 4): Utilize a primeira imagem anexada (Gabarito Faca Corte 4) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde quadrado (1:1) sem alterar nenhum elemento. Os TRÊS FUROS CIRCULARES EM ARRANJO TRIANGULAR DA CÂMERA (PIRÂMIDE) da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico, a faca pode perfurar diretamente por cima de qualquer elemento. Imagem 2D plana contínua perfeitamente alinhada. --ar 1:1 --no box, no 3d mockup, no altered geometry\`
                }
            }
        };`;

const startTag = 'const printSheetImages = {';
const endTag = 'const templates = {';

const startIdx = html.indexOf(startTag);
const endIdx = html.indexOf(endTag);

if (startIdx !== -1 && endIdx !== -1) {
    // Find where printSheetImages ends (the end of printSheetImages };)
    const printSheetEnd = html.indexOf('};', startIdx);
    const before = html.substring(0, printSheetEnd + 2);
    const after = html.substring(endIdx);
    
    html = before + '\n\n' + fullDbObj + '\n\n        ' + after;
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('Successfully fixed db object in apresentacao_frame.html!');
} else {
    console.error('Could not find tags:', startIdx, endIdx);
}
