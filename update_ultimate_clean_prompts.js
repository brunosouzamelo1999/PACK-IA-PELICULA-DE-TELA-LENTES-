const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const newUltimateObj = `            ultimate: {
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
            }`;

html = html.replace(/ultimate:\s*\{[\s\S]*?\}\s*\}\s*;/m, `${newUltimateObj}\n        };`);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated Frame Ultimate prompts to be 100% clean of smartphones and lenses!');
