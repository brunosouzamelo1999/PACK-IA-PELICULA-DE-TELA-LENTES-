# Manual Mestre: Fluxo de Trabalho Agosto 2026 (Versão Definitiva & Consolidada)

Este manual contém a biblioteca oficial de prompts funcionais validados e calibrados para a geração de **Artes de Impressão 2D** e **Mockups 3D de Aprovação** para o ChatGPT (DALL-E 3), Google Labs Flow e Midjourney.

---

## 🎯 Regras Operacionais de Ouro

1. **Criador de Naming N1 Nível Agência (Spigen/Belkin)**:
   - Disparo prévio do Prompt N1 no ChatGPT para gerar 10 nomes em português para películas premium de smartphone:
     - **Nomes 1 a 5**: Nomes diretos e de impacto para as linhas principais (*Proteção, Privacidade, Cristal HD e Top Premium*).
     - **Nomes 6 a 10**: Variações avançadas criadas com sinônimos técnicos e adjetivos diferentes.
   - O gestor escolhe a melhor opção e preenche apenas a variável `{{SUBTITULO}}` (ex: `DIAVEN - DIAMOND-CLASS OPTICAL SHIELD`).
2. **Operação por Variável Única**:
   - O gestor preenche apenas a variável `{{SUBTITULO}}` (ex: `PROTETOR DE LENTE`, `PELÍCULA PRIVACIDADE`).
3. **Diagramação de Marca no Terço Superior**:
   - **Estritamente apenas o bloco do logo da marca e subtítulo** fica posicionado de forma compacta na região do terço superior (com margem de segurança limpa do topo).
4. **Liberdade do Fundo de Estilo Visual**:
   - O background gráfico, texturas e efeitos de estilo podem preencher harmoniosamente toda a superfície da cartela.
5. **Sem Ícones e Sem Furos Desenhados no 2D**:
   - A Arte 2D de Impressão é uma imagem limpa contínua (sem ícones de benefícios e sem furos desenhados).

---

## 📐 As 2 Linhas de Produtos Oficiais & Dimensões Físicas (CorelDRAW)

| Linha de Produto | Estrutura Física | Dimensão Física Oficial | Aspect Ratio no Prompt |
| :--- | :--- | :--- | :--- |
| **LINHA 1: FRAME (Protetor de Lente)** | Cartela Plana de Varejo | **47,0 x 75,0 mm** | `--ar 47:75` |
| **LINHA 2: BOARD (Embalagem de Tela)** | Caixa / Estojo Transparente com Orelhas | **209,0 x 402,0 mm** | `--ar 209:402` |

---

## 📸 SEÇÃO A: LINHA FRAME (PROTETOR DE LENTE DE CÂMERA – 47:75)

> 📏 **DIMENSÃO FÍSICA OFICIAL DA FACA COREL**: **47,0 x 75,0 mm** (Proporção `--ar 47:75`)  
> 🚨 **ESTRUTURA**: Estritamente **Cartela Plana (Flat Retail Card)**. Nunca é caixa!

### 1️⃣ Arte 2D da Cartela FRAME – Saída Única Limpa (47:75)
*Anexe o print da foto da loja/Instagram do cliente e cole:*

```text
Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '{{SUBTITULO}}' fica agrupado de forma compacta e posicionado estritamente centralizado na região do terço superior. A arte de fundo e o estilo visual preenchem 100% da superfície da cartela. Reproduza fielmente o conteúdo da referência: se a imagem anexada possuir a foto de um smartphone com protetores de lentes, preserve-a; se a imagem anexada for uma arte lisa e abstrata sem celular, mantenha a arte lisa de fundo sem adicionar fotos de celular. Imagem retangular plana e contínua sem furos desenhados e sem ícones. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 2️⃣ Arte 2D da Cartela FRAME – Grid 2x2 (4 Variações Simultâneas)
*Anexe o print da foto da loja/Instagram do cliente e cole:*

```text
Layout gráfico em 2D plano para a face frontal de cartela retangular de protetor de lente de câmera, imagem retangular 2D estritamente plana, proporção 47:75. Gere uma grade de 4 variações de artes gráficas distintas (4 opções em um grid 2x2 de apresentação de modelos). Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O bloco do logo da marca e subtítulo '{{SUBTITULO}}' fica agrupado e posicionado centralizado no terço superior. A arte de fundo e estilo preenchem 100% da superfície da cartela. Reproduza fielmente o conteúdo da referência: se a imagem anexada tiver foto de celular, exiba o celular; se a referência for uma arte lisa sem celular, mantenha os 4 quadros com artes lisas de fundo sem adicionar celulares. Imagem retangular plana e contínua sem furos desenhados e sem ícones. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 3️⃣ Re-Padronização Rígida de Proporção DO FRAME (Isolar Cartela Escolhida - Adaptativo)
*Quando o ChatGPT gerar 3 ou 4 variações e você quiser isolar uma arte no enquadramento perfeito em 47:75:*

```text
Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75'. Re-enquadre e preserve 100% de todos os elementos gráficos da cartela escolhida sem alterar nem inventar elementos: mantenha o logo da marca e subtítulo '{{SUBTITULO}}' no terço superior e o estilo visual de fundo. Se a cartela escolhida for lisa (sem foto de celular), mantenha a arte lisa sem adicionar celular; se a cartela escolhida tiver a foto do celular/lentes, preserve a foto do celular exatamente onde está. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 4️⃣ Prompt Universal de Mockup 2D da Faca Mestre (Coringa Infalível para Qualquer Arte Aprovada)

> 🎯 **ARQUITETURA UNIVERSAL**: Este prompt funciona para **QUALQUER ARTE APROVADA** (seja uma arte criada direto no Passo 1, uma opção do Grid 2x2 do Passo 2 ou uma arte isolada no Passo 3). Funciona com artes lisas, artes com fotos de celulares, artes cheias de elementos ou textos!

*Anexe na ordem: **(1) A Faca Mestre/Gabarito em branco** + **(2) A Arte Aprovada pelo cliente**, e cole:*

```text
Máscara de camada gráfica 2D direta universal: Utilize a primeira imagem anexada (Faca Mestre) estritamente como uma camada de máscara transparente de corte. Projete 100% do design gráfico da segunda imagem anexada por dentro da silhueta deste molde sem adicionar, remover ou alterar NENHUM elemento. Os três furos circulares e o recorte do topo da primeira imagem funcionam como aberturas vazadas transparentes de faca. Não mude de posição nenhum elemento gráfico ou artístico (incluindo textos, logos, fundos, fotos de celular e lentes), a faca pode perfurar e cortar diretamente por cima de qualquer elemento exatamente onde ele está. Imagem 2D plana contínua perfeitamente alinhada. --ar 47:75 --no box, no 3d mockup, no altered geometry, no floating circles
```

#### 🇺🇸 Versão em Inglês:
```text
Universal direct 2D graphic layer mask: Use the first attached reference image (Master Die-Cut) strictly as a transparent layer clipping mask shape. Seamlessly project 100% of the graphic design from the second attached reference image inside the silhouette of this die-cut outline without adding, removing, or modifying ANY element. The three circular holes and top-right notch from the first image act as transparent physical die-cut open windows. Do not change the position of any graphic or artistic element (including text, logos, background textures, phone photos, or lenses), the die-cut punch holes can cut directly on top of any element exactly where it is placed. Flat 2D vector graphic layout with exact die-cut alignment. --ar 47:75 --no box, no 3d mockup, no altered geometry, no floating circles
```

---

### 5️⃣ Prompt Alternativo: Arte 2D Direta para Exportação de Impressão (Faca Retangular Limpa)
*Anexe a referência do cliente e cole quando quiser uma saída 2D plana 100% contínua sem furos desenhados:*

```text
Arte gráfica 2D plana de alta resolução para impressão de cartela retangular vertical de protetor de lente (47x75 mm). Mantenha o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual, cores e ilustração do smartphone com protetores de lentes preenchem a cartela harmoniosamente. Imagem 2D plana contínua sem furos desenhados, sem recortes e sem ícones. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

## 📸 SEÇÃO A: LINHA FRAME (PROTETOR DE LENTE DE CÂMERA – 47 × 75 mm)

> 📏 **DIMENSÃO FÍSICA COREL**: **47,0 x 75,0 mm** (Proporção `--ar 47:75`)  
> 🚨 **ESTRUTURA FÍSICA**: Cartela Vertical em Papelão Rígido / Acrílico para Lentes.

### 📸 PROMPTS DO GRID 2X2 MULTI-ESTILO COM LETTERINGS & CELULARES DINÂMICOS (LINHA FRAME – 47:75)

#### 2️⃣A. GRID 2X2 LOTE 1 (Minimalista, Bauhaus, Brutalismo, Maximalismo)
*Anexe a foto da marca/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 1 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. A arte visual e os estilos gráficos preenchem toda a superfície da cartela. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA COMBINAÇÃO DE CELULAR E PROTETORES CORRESPONDENTE:
• Quadro 1 (Minimalista Clean): Fundo clean, lettering minimalista e smartphone Prata com protetores de lentes transparentes cristal.
• Quadro 2 (Bauhaus Geométrico): Fundo bauhaus, lettering geométrico e smartphone Titânio Ouro com protetores de lentes metálicos.
• Quadro 3 (Brutalismo Concreto): Fundo brutalista, lettering militar e smartphone Preto Grafite com protetores de lentes escuros foscos.
• Quadro 4 (Maximalismo Vibrante): Fundo maximalista, lettering de alto impacto e smartphone Azul com protetores de lentes espelhados.
Na metade inferior de cada quadro, exiba o smartphone com os protetores de lentes. --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

#### 2️⃣B. GRID 2X2 LOTE 2 (Cyberpunk, Luxo Dourado, Geométrico 3D, Pop-Art)
*Anexe a foto da marca/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 2 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. A arte visual e os estilos gráficos preenchem toda a superfície da cartela. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA COMBINAÇÃO DE CELULAR E PROTETORES CORRESPONDENTE:
• Quadro 1 (Cyberpunk Neon): Fundo neon futurista, lettering cibernético e smartphone Titânio Escuro com protetores de lentes com aro neon.
• Quadro 2 (Luxo Dourado Mármore): Fundo mármore, lettering 3D dourado e smartphone Dourado com protetores de lentes em relevo de ouro.
• Quadro 3 (Geométrico Abstrato 3D): Fundo facetado, lettering 3D e smartphone Prata com protetores de lentes de cristal lapidado.
• Quadro 4 (Pop-Art Memphis): Fundo pop-art, lettering artístico e smartphone Grafite com protetores de lentes em acabamento vibrante.
Na metade inferior de cada quadro, exiba o smartphone com os protetores de lentes. --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

#### 2️⃣C. GRID 2X2 LOTE 3 (Stealth Carbon, Vaporwave 80s, Safira Cristal, Titânio Industrial)
*Anexe a foto da marca/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 3 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. A arte visual e os estilos gráficos preenchem toda a superfície da cartela. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA COMBINAÇÃO DE CELULAR E PROTETORES CORRESPONDENTE:
• Quadro 1 (Stealth Carbon Tech): Fundo de fibra de carbono, lettering esportivo e smartphone Preto Fosco com protetores de lentes em liga de carbono.
• Quadro 2 (Vaporwave Retro-Futurismo): Fundo gradiente magenta/violeta, lettering 80s e smartphone Violeta com protetores de lentes iridescentes.
• Quadro 3 (Sapphire Crystal): Fundo cristal azul, lettering cromado e smartphone Azul Safira com protetores de lentes em cristal lapidado.
• Quadro 4 (Titanium Industrial): Fundo titânio escovado, lettering a laser e smartphone Titânio Natural com protetores de lentes em metal técnico.
Na metade inferior de cada quadro, exiba o smartphone com os protetores de lentes. --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

#### 2️⃣D. GRID 2X2 LOTE 4 (Bento Grid, Liquid Chromium, Glassmorphism, Y2K Matrix)
*Anexe a foto da marca/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 4 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. A arte visual e os estilos gráficos preenchem toda a superfície da cartela. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA COMBINAÇÃO DE CELULAR E PROTETORES CORRESPONDENTE:
• Quadro 1 (Bento Grid Tech): Layout minimalista bento box, lettering UI e smartphone Prata com protetores de lentes em anéis metálicos clean.
• Quadro 2 (Liquid Chromium Acid Tech): Fundo mercúrio cromado, lettering espelhado e smartphone Titânio Prateado com protetores de lentes cromados líquidos.
• Quadro 3 (Glassmorphism Frosted): Fundo vidro fosco, lettering 3D e smartphone Branco Estelar com protetores de lentes jateados foscos.
• Quadro 4 (Y2K Glitch Matrix): Fundo matriz cibernética, lettering digital e smartphone Preto Grafite com protetores de lentes estilo código neon.
Na metade inferior de cada quadro, exiba o smartphone com os protetores de lentes. --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 📱 PROMPTS DO GRID 2X2 MULTI-ESTILO COM LETTERINGS & CELULARES DINÂMICOS (LINHA BOARD – 209:402)

#### 2️⃣ PASSO B2: Grid 2x2 Lote 1 do Board (Minimalista, Bauhaus, Brutalismo, Maximalismo)
*Anexe a foto de impressão/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 1 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Minimalista Clean): Fundo clean, lettering sans-serif, smartphone Prata com wallpaper minimalista aceso e película HD cristal transparente.
• Quadro 2 (Bauhaus Geométrico): Fundo bauhaus, lettering geométrico, smartphone Titânio Dourado com wallpaper bauhaus aceso e película transparente chanfrada 2.5D.
• Quadro 3 (Brutalismo Monolítico): Fundo brutalista, lettering militar, smartphone Preto Grafite com wallpaper escuro aceso e película de privacidade fumê fosca.
• Quadro 4 (Maximalismo Vibrante): Fundo maximalista, lettering de impacto, smartphone Azul com wallpaper colorido aceso e película com brilho espelhado.
No centro de cada quadro, exiba o smartphone com a película flutuante. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

#### 3️⃣ PASSO B3: Grid 2x2 Lote 2 do Board (Cyberpunk, Luxo Dourado, Geométrico 3D, Pop-Art)
*Anexe a foto de impressão/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 2 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Cyberpunk Neon): Fundo neon, lettering cibernético, smartphone Preto com wallpaper de circuitos neon aceso e película de privacidade fumê com filtro neon.
• Quadro 2 (Luxo Dourado Mármore): Fundo mármore, lettering 3D dourado, smartphone Dourado com wallpaper de ondas de ouro aceso e película HD cristal com chanfro de ouro.
• Quadro 3 (Geométrico Abstrato 3D): Fundo cristalino, lettering 3D facetado, smartphone Prata com wallpaper 3D aceso e película transparente de cristal lapidado.
• Quadro 4 (Pop-Art Memphis): Fundo pop-art, lettering artístico, smartphone Grafite com wallpaper pop aceso e película de vidro com reflexo vibrante.
No centro de cada quadro, exiba o smartphone com a película flutuante. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

#### 3️⃣ PASSO B3.3: Grid 2x2 Lote 3 do Board (Stealth Carbon, Vaporwave 80s, Safira Cristal, Titânio Industrial)
*Anexe a foto de impressão/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 3 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Stealth Carbon Tech): Fundo de fibra de carbono, lettering esportivo, smartphone Preto Fosco com wallpaper carbon aceso e película matte fosca antirreflexo.
• Quadro 2 (Vaporwave Retro-Futurismo): Fundo gradiente 80s, lettering synthwave, smartphone Violeta com wallpaper retrô aceso e película com reflexo iridescente.
• Quadro 3 (Sapphire Crystal): Fundo cristal azul, lettering cromado, smartphone Azul Safira com wallpaper de luz azul aceso e película anti-blue ray com reflexo azulado.
• Quadro 4 (Titanium Industrial): Fundo titânio escovado, lettering a laser, smartphone Titânio Natural com wallpaper industrial aceso e película de cristal temperado 9H.
No centro de cada quadro, exiba o smartphone com a película flutuante. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

#### 3️⃣ PASSO B3.4: Grid 2x2 Lote 4 do Board (Bento Grid, Liquid Chromium, Glassmorphism, Y2K Matrix)
*Anexe a foto de impressão/Instagram do cliente e cole:*

```text
Adaptação multi-estilo Lote 4 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Bento Grid Tech): Layout bento box estilo Apple, lettering UI, smartphone Prata com wallpaper iOS minimalista aceso e película HD cristal limpa.
• Quadro 2 (Liquid Chromium Acid Tech): Fundo mercúrio cromado, lettering espelhado, smartphone Titânio Prateado com wallpaper de mercúrio 3D aceso e película espelhada cromada.
• Quadro 3 (Glassmorphism Frosted): Fundo vidro fosco, lettering 3D, smartphone Branco Estelar com wallpaper pastel aceso e película com textura jateada fosca.
• Quadro 4 (Y2K Glitch Matrix): Fundo matriz cibernética, lettering digital, smartphone Preto Grafite com wallpaper de matriz de dados aceso e película de privacidade fumê escura.
No centro de cada quadro, exiba o smartphone com a película flutuante. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

### 📸 PROMPT CORINGA UNIVERSAL DE VARIAÇÃO DE PRINT (CORES & TOQUES DE ESTILO)

> 💡 **QUANDO USAR**: Tirou um print/printscreen de uma arte que ficou incrível e quer ver variações dela com **novas cores e toques de estilo inéditos** sem perder o layout original? Anexe o print e cole este prompt:

```text
Adaptação da imagem anexada: Preserve a estrutura, o layout, o logo da marca e a posição do produto da imagem anexada. Gere novas variações visuais explorando cores inéditas e toques distintos de estilo gráfico no fundo. --ar {{PROPORCAO}} --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```
*(Preencha `{{PROPORCAO}}` com `47:75` para Frame de Lente ou `209:402` para Película Board)*

---

### 2️⃣ PASSO B2: Grid 2x2 Lote 1 do Board (Minimalista, Bauhaus, Brutalismo, Maximalismo)
*Anexe a Arte 2D criada no Passo B1 (ou foto do cliente) e cole:*

```text
Adaptação multi-estilo Lote 1 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual e os estilos gráficos preenchem toda a superfície da embalagem. No centro de cada quadro, exiba o smartphone com a película de vidro transparente flutuante. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), onde cada um dos 4 quadros explora um estilo artístico diferente com paletas de cores únicas: (Quadro 1: Minimalista Clean), (Quadro 2: Bauhaus Geométrico), (Quadro 3: Brutalismo Monolítico de Concreto), e (Quadro 4: Maximalismo Vibrante Explosivo). --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

**COMANDO 1 (Variação de Cores Mantendo os 4 Estilos do Lote 1):**
```text
Variação de cores mantendo os 4 estilos Lote 1: Gere 4 novas opções em grade 2x2 explorando paletas de cores inéditas, mas PRESERVANDO RÍGIDAMENTE o estilo artístico de cada quadro (Quadro 1: Minimalista Clean, Quadro 2: Bauhaus Geométrico, Quadro 3: Brutalismo de Concreto e Quadro 4: Maximalismo Vibrante). Mantenha o logo e o smartphone com a película flutuante. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

### 3️⃣ PASSO B3: Grid 2x2 Lote 2 do Board (Cyberpunk, Luxo Dourado, Geométrico 3D, Pop-Art)
*Anexe a Arte 2D criada no Passo B1 e cole:*

```text
Adaptação multi-estilo Lote 2 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual e os estilos gráficos preenchem toda a superfície da embalagem. No centro de cada quadro, exiba o smartphone com a película de vidro transparente flutuante. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), com 4 novos estilos artísticos: (Quadro 1: Cyberpunk Neon Futurista), (Quadro 2: Luxo Dourado Mármore), (Quadro 3: Geométrico Abstrato 3D com facetas de cristal), e (Quadro 4: Pop-Art Memphis Vibrante). --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

**COMANDO 1 (Variação de Cores Mantendo os 4 Estilos do Lote 2):**
```text
Variação de cores mantendo os 4 estilos Lote 2: Gere 4 novas opções em grade 2x2 explorando paletas de cores inéditas, mas PRESERVANDO RÍGIDAMENTE o estilo artístico de cada quadro (Quadro 1: Cyberpunk Neon, Quadro 2: Luxo Dourado Mármore, Quadro 3: Geométrico Abstrato 3D e Quadro 4: Pop-Art Memphis Vibrante). Mantenha o logo e o smartphone com a película flutuante. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

### 4️⃣ PASSO B4: Padronização plano 2d 209 × 402 mm
*Anexe a Arte 2D criada no Passo B1 (ou o print da opção escolhida) e cole:*

```text
Layout gráfico 2D plano, imagem retangular 2D estritamente plana, proporção exata 209:402. Reproduza as cores da marca, estilo de fundo e logo da imagem de referência anexada. Imagem retangular plana e limpa contínua sem linhas de faca ou contornos de corte. --ar 209:402 --no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no shadows
```

---

### 5️⃣ PASSO B5: PROMPT DE OURO ANTI-DESLOCAMENTO (FACA MESTRE RÍGIDA BOARD)

> 🚨 **PROMPT DE OURO GUARDA RIGOROSA (PROTEÇÃO ANTI-DESLOCAMENTO DE FACA)**:  
> Este é o prompt oficial blindado para renderizar a Arte 2D com a Faca Mestre (Orelhas no topo e cantos arredondados) com 100% de alinhamento estrutural rígido ao gabarito de corte:

```text
Utilize a faca mestre original do board como camada estrutural rígida. Não recrie as linhas de corte nem modifique a geometria do gabarito. Uma arte gráfica bidimensional e plana (flat 2D vector design) para impressão de embalagem board vertical, proporção 209:402. A embalagem possui a faca mestre com recorte curvo de orelhas no topo e cantos arredondados na base. Reproduza fielmente a marca e logo do cliente no topo, o subtítulo '{{SUBTITULO}}' e exiba no centro a ilustração do smartphone moderno com a película de vidro protetora transparente flutuando sobre a tela. [ESTRUTURA RÍGIDA]: Mantenha a fidelidade absoluta ao gabarito de corte anexado. --ar 209:402 --no box, no 3d mockup
```

---

### 6️⃣ PASSO B6: Mockup 3D do Board (Estojo / Caixa Acrílica Transparente com Cabideiro)
*Anexe a Arte 2D do Board gerada nos passos anteriores e cole:*

```text
Render 3D de produto de estúdio fotorealista de uma embalagem de caixa retangular vertical (209x402 mm) em pé sobre superfície de estúdio limpa, vista frontal reta, com cabideiro Euro slot no topo. A face frontal exibe perfeitamente a arte 2D da imagem de referência anexada, destacando a marca do cliente no topo, o subtítulo '{{SUBTITULO}}' e a ilustração central do celular com a película flutuante. Acabamento plástico acrílico transparente brilhante de estojo rígido, iluminação suave de estúdio comercial, resolução 8k. --no cardboard, no paper texture, no lens holes
```

---

### 🏛️ 1. PROMPT MESTRE DE MOSTRUÁRIO GRID 2X2 – LOTE 1 (MINIMALISTA, BAUHAUS, BRUTALISMO, MAXIMALISMO)

> 💡 **LOTE 1 DE ESTILOS**: Após gerar a Arte 2D Plana inicial, anexe-a e envie este prompt mestre. A IA vai gerar uma **grade 2x2 de apresentação mostrando 4 opções de artes paralelas** (1 de cada um dos 4 estilos do Lote 1).

> 📌 **SE VOCÊ ANEXAR UMA IMAGEM COM 4 FOTOS DO GOOGLE DE PROTETORES DE LENTES**: Cole esta instrução curta junto com o prompt mestre:
> `Mapeamento posicional 1-para-1: Incorpore a foto do celular com protetores de lentes de cada uma das 4 imagens de referência da foto anexada no seu respectivo quadro (Foto 1 no Quadro 1, Foto 2 no Quadro 2, Foto 3 no Quadro 3 e Foto 4 no Quadro 4).`

---

#### 📸 A. GRID 2X2 LOTE 1 PARA A LINHA FRAME (47:75)
*Anexe a Arte 2D Plana do Frame + a foto do Google e cole:*

```text
Mapeamento posicional 1-para-1: Incorpore a foto do celular com protetores de lentes de cada uma das 4 imagens de referência da foto anexada no seu respectivo quadro (Foto 1 no Quadro 1, Foto 2 no Quadro 2, Foto 3 no Quadro 3 e Foto 4 no Quadro 4). Adaptação multi-estilo Lote 1 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual, texturas e os estilos gráficos preenchem toda a superfície da cartela de forma contínua e harmoniosa. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), onde cada um dos 4 quadros explora um estilo artístico diferente com paletas de cores únicas: (Quadro 1: Minimalista Clean e Elegante), (Quadro 2: Bauhaus Geométrico Industrial), (Quadro 3: Brutalismo Arquitetônico de Concreto Bruto), e (Quadro 4: Maximalismo Vibrante e Denso). --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

#### 📱 B. GRID 2X2 LOTE 1 PARA A LINHA BOARD / TELA (209:402)
*Anexe a Arte 2D Plana do Board criada no Passo B1 e cole:*

```text
Adaptação multi-estilo Lote 1 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual e os estilos gráficos preenchem toda a superfície da embalagem. No centro de cada quadro, exiba o smartphone com a película de vidro flutuante. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), onde cada um dos 4 quadros explora um estilo artístico diferente com paletas de cores únicas: (Quadro 1: Minimalista Clean), (Quadro 2: Bauhaus Geométrico), (Quadro 3: Brutalismo Monolítico de Concreto), e (Quadro 4: Maximalismo Vibrante Explosivo). --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

## 🚀 2. PROMPT MESTRE DE MOSTRUÁRIO GRID 2X2 – LOTE 2 (CYBERPUNK NEON, LUXO DOURADO, GEOMÉTRICO 3D, POP-ART MEMPHIS)

> 💡 **LOTE 2 DE ESTILOS (NOVOS ESTILOS)**: Anexe a Arte 2D Plana inicial e envie este prompt para gerar mais 4 novos conceitos visuais distintos de alto impacto!

---

#### 📸 A. GRID 2X2 LOTE 2 PARA A LINHA FRAME (47:75)
*Anexe a Arte 2D Plana do Frame + a foto do Google e cole:*

```text
Mapeamento posicional 1-para-1: Incorpore a foto do celular com protetores de lentes de cada uma das 4 imagens de referência da foto anexada no seu respectivo quadro (Foto 1 no Quadro 1, Foto 2 no Quadro 2, Foto 3 no Quadro 3 e Foto 4 no Quadro 4). Adaptação multi-estilo Lote 2 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual, texturas e os estilos gráficos preenchem toda a superfície da cartela de forma contínua e harmoniosa. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), onde cada um dos 4 quadros explora um estilo artístico novo e diferente: (Quadro 1: Cyberpunk Neon Futurista com circuitos brilhantes), (Quadro 2: Luxo Dourado Elegante em preto mármore e filigranas de ouro polido), (Quadro 3: Geométrico Abstrato 3D com facetas de cristal), e (Quadro 4: Pop-Art Memphis Design Vibrante e Moderno). --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 🎨 COMANDO CURTO PARA VARIAÇÃO DE CORES EM GRADE 2X2

> 💡 **QUANDO USAR**: Quando você gostar de um estilo e quiser gerar **4 novas opções com paletas de cores totalmente diferentes e vibrantes**, anexe a arte escolhida e cole este comando curto:

```text
Variação de cores 2x2: Gere 4 novas opções em grade 2x2 explorando paletas de cores distintas, vibrantes e contrastantes entre si em cada quadro, preservando perfeitamente o logo da marca, o subtítulo '{{SUBTITULO}}' e o estilo visual da imagem anexada. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 🇺🇸 Versão em Inglês:
```text
2x2 Color Variation: Generate 4 new options in a 2x2 display grid exploring distinct, vibrant, and contrasting color palettes in each frame, while perfectly preserving the brand logo, subtitle '{{SUBTITLE}}', and visual style of the attached reference image. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

#### 📱 B. GRID 2X2 LOTE 2 PARA A LINHA BOARD / TELA (209:402)
*Anexe a Arte 2D Plana do Board criada no Passo B1 e cole:*

```text
Adaptação multi-estilo Lote 2 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção 209:402. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual e os estilos gráficos preenchem toda a superfície da embalagem. No centro de cada quadro, exiba o smartphone com a película de vidro flutuante. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), com 4 novos estilos artísticos: (Quadro 1: Cyberpunk Neon Futurista), (Quadro 2: Luxo Dourado Mármore), (Quadro 3: Geométrico Abstrato 3D), e (Quadro 4: Pop-Art Memphis Vibrante). --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

### 📜 PROMPTS INDIVIDUAIS DOS 4 ESTILOS (FRAME 47:75)

#### 🌿 1. FRAME Minimalista (Anéis Metalizados + Seda Clean)
```text
Adaptação de estilo Minimalista para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. Gere 4 variações de artes gráficas em grade 2x2 no estilo Minimalista ultra-clean, com fundo neutro suave preenchendo a cartela, linhas finas puras e grafismos de anéis metálicos de protetor de lente de celular. --ar 47:75 --no camera lens, no DSLR lens, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 📐 2. FRAME Bauhaus (Geometria + Anéis Metalizados)
```text
Adaptação de estilo Bauhaus para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. Gere 4 variações de artes gráficas em grade 2x2 no estilo Bauhaus icônico, com formas geométricas puras de fundo, contraste de cores sólidas e grafismos de anéis metálicos de protetor de lente de celular. --ar 47:75 --no camera lens, no DSLR lens, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 🧱 3. FRAME Brutalismo (Concreto Bruto + Anéis Metalizados)
```text
Adaptação de estilo Brutalista para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. Gere 4 variações de artes gráficas em grade 2x2 no estilo Brutalista, com fundo em textura monolítica de concreto escuro preenchendo a cartela e grafismos de anéis metálicos de protetor de lente de celular. --ar 47:75 --no camera lens, no DSLR lens, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 🎆 4. FRAME Maximalismo (Gradientes Vibrantes + Anéis Metalizados)
```text
Adaptação de estilo Maximalista para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. Gere 4 variações de artes gráficas em grade 2x2 no estilo Maximalista vibrante, com camadas explosivas de grafismos iridescentes preenchendo a cartela e reflexos de anéis metálicos de protetor de lente de celular. --ar 47:75 --no camera lens, no DSLR lens, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 🛠️ 3. OUTRAS FERRAMENTAS IMAGE-TO-IMAGE DE EDIÇÃO

#### 🛠️ Substituição Cirúrgica de Película (Faca Real do Fabricante)
*Anexe 2 imagens: (1) A Arte da Embalagem gerada e (2) O gabarito da Faca da Película Real do Cliente, e cole:*

```text
Modificação de imagem de referência: Mantenha 100% do layout, fundo, cores, logo da marca e a posição do smartphone da primeira imagem de referência anexada. Substitua apenas a película de vidro flutuante transparente que está sobre a tela do celular pela película protetora da segunda imagem de referência anexada, aplicando fielmente o seu formato físico real da faca (cantos inferiores arredondados e recorte curvo com orelhas na borda superior). Preserve a nitidez do celular e da arte original.
```

---

#### 🎨 Edição de Cores de Tipografia (Logo & Subtítulo)
*Anexe a Arte 2D do Frame ou Board gerado e cole:*

```text
Edição pontual de imagem de referência: Mantenha 100% do layout, fundo, ilustrações, formato da embalagem e composição da imagem de referência anexada. Altere apenas a cor da tipografia do logo da marca para '{{COR_DO_LOGO}}' (ex: metálico cromado polido, branco sólido, dourado luxo) e a cor do texto do subtítulo para '{{COR_DO_SUBTITULO}}' (ex: branco fosco, cinza claro). Preserve o estilo de fonte e o design original.
```

---
