const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Find start of <script> and end of </script>
const scriptStartIdx = html.indexOf('<script>');
const scriptEndIdx = html.indexOf('</script>', scriptStartIdx);

if (scriptStartIdx === -1 || scriptEndIdx === -1) {
    console.error('Could not find <script> tags!');
    process.exit(1);
}

// We read standard b64 images from script before modifying
const imgStandardPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_frame_standard.png';
const imgUltimatePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/folha_impressao_frame_ultimate.png';

const b64Standard = fs.readFileSync(imgStandardPath).toString('base64');
const b64Ultimate = fs.readFileSync(imgUltimatePath).toString('base64');

const cleanJsCode = `<script>
        let currentSlide = 1;
        const totalSlides = 5;
        let currentFrameMode = 'standard'; // 'standard' (47:75) or 'ultimate' (1:1)
        let currentUltimateCut = 1; // 1, 2, 3, 4

        const printSheetImages = {
            standard: {
                title: 'Folha de Impressão em Branco (Linha Frame Padrão 47:75)',
                src: 'data:image/png;base64,${b64Standard}'
            },
            ultimate: {
                title: 'Folha de Impressão em Branco (Linha Frame Ultimate 1:1)',
                src: 'data:image/png;base64,${b64Ultimate}'
            }
        };

        const db = {
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
        };

        const templates = {
            pn1: \`Atue como especialista em Naming de marcas globais tech (nível Spigen/Belkin). Gere 10 nomes comerciais curtos em português para protetores de lente de câmera de smartphone:
• Nomes 1 a 5: Nomes diretos e de impacto para as linhas principais (Safira, Titânio, Diamond Shield e Optic Guard).
• Nomes 6 a 10: Variações avançadas criadas com sinônimos técnicos e adjetivos diferentes.
Para cada nome apresente estritamente o formato: NOME - SUBTÍTULO sugerido.\`
        };

        // SET FRAME MODE (STANDARD 47:75 vs ULTIMATE 1:1)
        function setFrameMode(mode) {
            currentFrameMode = mode;
            document.getElementById('btnModeStandard').classList.toggle('active', mode === 'standard');
            document.getElementById('btnModeUltimate').classList.toggle('active', mode === 'ultimate');
            
            document.getElementById('headerLineBadge').textContent = db[mode].badge;
            document.getElementById('cutSelectorContainer').style.display = (mode === 'ultimate') ? 'block' : 'none';

            // Dynamic Slide 1 Print Sheet Image Swap
            const imgEl = document.getElementById('slide1RefImage');
            const titleEl = document.getElementById('slide1ImgTitle');
            if (imgEl && printSheetImages[mode]) {
                imgEl.src = printSheetImages[mode].src;
            }
            if (titleEl && printSheetImages[mode]) {
                titleEl.textContent = printSheetImages[mode].title;
            }

            updatePrompts();
        }

        // SET ULTIMATE CUT MODEL (1, 2, 3, 4)
        function setUltimateCut(cutNumber) {
            currentUltimateCut = cutNumber;
            for (let i = 1; i <= 4; i++) {
                const btn = document.getElementById(\`btnCut\${i}\`);
                if (btn) btn.classList.toggle('active', i === cutNumber);
            }
            updatePrompts();
        }

        // INITIALIZE DOTS
        function initDots() {
            const dotsContainer = document.getElementById('dotsContainer');
            dotsContainer.innerHTML = '';
            for (let i = 1; i <= totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = \`dot \${i === currentSlide ? 'active' : ''}\`;
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }

        // UPDATE PROMPTS REALTIME
        function updatePrompts() {
            const subtitulo = document.getElementById('inputSubtitulo').value.trim() || 'DIAVEN - DIAMOND-CLASS OPTICAL SHIELD';
            const data = db[currentFrameMode];

            let p6Content = '';
            let p6LabelText = '';

            if (currentFrameMode === 'standard') {
                p6Content = data.p6Text;
                p6LabelText = 'Máscara Transparente da Faca Mestre (3 Furos - Frame 47:75)';
            } else {
                p6Content = data.cuts[currentUltimateCut];
                p6LabelText = \`Máscara Transparente da Faca Mestre Ultimate (Corte Modelo \${currentUltimateCut} - Quadrado 1:1)\`;
            }

            document.getElementById('facaPromptLabel').textContent = p6LabelText;

            const map = {
                p1: data.p1Text,
                pl1: data.pl1Text,
                pl2: data.pl2Text,
                p2c: data.p2cText,
                pl3: data.pl3Text,
                pl4: data.pl4Text,
                p3c: data.p3cText,
                p4: data.p4Text,
                p6: p6Content
            };

            for (const key in map) {
                const el = document.getElementById(key);
                if (el) {
                    let updatedText = map[key].replace(/\\[SUBTITULO\\]/g, subtitulo);
                    el.textContent = updatedText;
                }
            }

            const pn1El = document.getElementById('pn1');
            if (pn1El) pn1El.textContent = templates.pn1;
        }

        // SLIDE NAVIGATION
        function changeSlide(direction) {
            goToSlide(currentSlide + direction);
        }

        function updateDropdowns() {
            const dropdowns = document.querySelectorAll('.slide-number-dropdown');
            dropdowns.forEach(dp => {
                dp.value = currentSlide;
            });
        }

        function goToSlide(slideIndex) {
            if (slideIndex < 1 || slideIndex > totalSlides) return;

            document.getElementById(\`slide-\${currentSlide}\`).classList.remove('active');
            currentSlide = slideIndex;
            document.getElementById(\`slide-\${currentSlide}\`).classList.add('active');

            // UPDATE FOOTER UI & DROPDOWNS
            document.getElementById('btnPrev').disabled = (currentSlide === 1);
            document.getElementById('btnNext').disabled = (currentSlide === totalSlides);
            document.getElementById('slideCounter').textContent = \`Slide \${currentSlide} de \${totalSlides}\`;

            updateDropdowns();
            initDots();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // COPY PROMPT TO CLIPBOARD
        function copyPrompt(elementId) {
            const textToCopy = document.getElementById(elementId).textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast();
            }).catch(err => {
                console.error('Erro ao copiar: ', err);
            });
        }

        // TOAST NOTIFICATION
        function showToast() {
            const toast = document.getElementById('toastNotification');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        }

        // KEYBOARD SHORTCUTS
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
            if (e.key === 'ArrowRight') changeSlide(1);
            if (e.key === 'ArrowLeft') changeSlide(-1);
        });

        // INIT ON LOAD
        window.onload = () => {
            initDots();
            setFrameMode('standard');
        };
    </script>`;

html = html.substring(0, scriptStartIdx) + cleanJsCode + html.substring(scriptEndIdx + 9);
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully rebuilt <script> block in apresentacao_frame.html!');
