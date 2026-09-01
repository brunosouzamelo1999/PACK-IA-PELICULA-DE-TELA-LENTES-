# Manual Mestre de Prompts: Sistema de Embalagens AI (Versão Definitiva)

Este manual contém a biblioteca oficial e limpa dos **Prompts Definitivos** calibrados para a geração de **Artes de Impressão 2D** e **Mockups 3D de Aprovação** para o Google Labs Flow, ChatGPT (DALL-E 3) e Midjourney.

---

## 🎯 Regras de Ouro da Engenharia de Prompts

1. **Herança 100% por Foto Anexada**:
   * O gestor anexa o print do Instagram/loja do cliente.
   * O prompt **NÃO contém descrições de cores, estilo ou fundo**. Tudo é lido automaticamente da foto anexada.
2. **Variável Única**:
   * O gestor preenche apenas a variável `{{SUBTITULO}}` (ex: `PROTETOR DE LENTE`, `PELÍCULA PRIVACIDADE`).
3. **Regra de Diagramação do Terço Superior**:
   * O bloco do logo e subtítulo é posicionado estritamente no terço superior com margem de segurança do topo.
4. **Sem Ícones e Sem Furos Desenhados no 2D**:
   * A Arte 2D de Impressão é uma imagem limpa retangular contínua.

---

## 📋 MENU RESUMIDO DE ESCOLHA DE PROMPTS (GUIA RÁPIDO DOS ACCOUNTS)

### 📸 1. LINHA FRAME (47,0 x 75,0 mm | `--ar 47:75`)
* [ ] **1A. Arte 2D Saída Única**: 1 imagem plana retangular contínua limpa.
* [ ] **1B. Arte 2D Grid 2x2**: 4 opções de artes gráficas simultâneas em grade 2x2.
* [ ] **1C. Re-Padronização Rígida de Proporção**: Re-enquadra a cartela escolhida no aspecto `--ar 47:75` quando o ChatGPT gera 3/4 variações distorcidas.
* [ ] **2. Mockup 3D Frame (Perfuração Fiel sem Anéis)**: Render 3D com a perfuração física vazada exata dos 3 furos (2 à esquerda, 1 à direita) sem anéis metálicos ou lentes.
* [ ] **3. Adaptação Dinâmica para Frame**: Aplica qualquer estilo (Cyberpunk, Minimalista, etc.) com elementos de lentes.

### 📱 2. LINHA EMBALAGEM DE TELA (209,0 x 402,0 mm | `--ar 209:402`)
* [ ] **1. Arte 2D Embalagem de Tela**: Imagem 2D com smartphone + película flutuante.
* [ ] **2. Mockup 3D Embalagem de Tela**: Render 3D de estojo acrílico transparente com cabideiro Euro Slot.
* [ ] **3. Adaptação Dinâmica para Tela**: Aplica qualquer estilo com o celular e a película flutuante.

### 📋 3. BOARD DE APRESENTAÇÃO DE LOJA (Placa Rígida de Acrílico)
* [ ] **1. Arte 2D do Board**: Placa retangular com marca e logo em destaque.
* [ ] **2. Mockup 3D do Board**: Placa de acrílico rígido com cantos arredondados na base e corte de orelhas no topo.

### 🛠️ 4. FERRAMENTAS IMAGE-TO-IMAGE & EDIÇÃO
* [ ] **1. Variações de Estilo (3 Opções)**: Gera 3 fundos visuais diferentes em resposta ao chat.
* [ ] **2. Mudança de Cores de Fundo**: Gera variações em Azul, Verde, Vermelho.
* [ ] **3. Adaptação Universal por Foto de Referência (Zero Variáveis)**: Aplica efeito 3D e fonte da foto sem copiar textos.
* [ ] **4. Edição de Cores de Tipografia**: Altera pontualmente a cor do logo (dourado, prata, branco, etc.).
* [ ] **5. Substituição de Película**: Troca a película pela faca real do fabricante (cantos + orelhas).

---

## 📸 LINHA 1: CARTELA FRAME (PROTETOR DE LENTE DE CÂMERA)

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

### 📱 PROMPT ALTERNATIVO: ARTE 2D COM CELULAR NO CANTO INFERIOR DIREITO
*Utilize este prompt no Passo 1 ou 3 quando a equipe preferir o celular posicionado nativamente no canto inferior direito para não conflitar com a faca:*

```text
Layout gráfico em 2D plano para cartela de protetor de lente (47:75) com smartphone no canto: Reproduza o estilo visual da imagem anexada. Posicione o logo da marca e subtítulo '{{SUBTITULO}}' centralizados no terço superior. Na metade inferior, posicione a ilustração do módulo de câmera do smartphone com os protetores de lentes alinhada estritamente no canto inferior direito. Arte 2D plana contínua sem furos desenhados. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 5️⃣ Prompt Alternativo: Arte 2D Direta para Exportação de Impressão (Faca Retangular Limpa)
*Anexe a referência do cliente e cole quando quiser uma saída 2D plana 100% contínua sem furos desenhados:*

#### 📸 A. GRID 2X2 LOTE 1 PARA A LINHA FRAME (47:75)
*Anexe a Arte 2D Plana do Frame + a foto do Google e cole:*

```text
Mapeamento posicional 1-para-1: Incorpore a foto do celular com protetores de lentes de cada uma das 4 imagens de referência da foto anexada no seu respectivo quadro (Foto 1 no Quadro 1, Foto 2 no Quadro 2, Foto 3 no Quadro 3 e Foto 4 no Quadro 4). Adaptação multi-estilo Lote 1 em grade 2x2 para Frame de Lente: Mantenha a proporção 47:75. Posicione o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual, texturas e os estilos gráficos preenchem toda a superfície da cartela de forma contínua e harmoniosa. Gere uma grade de 4 artes gráficas distintas e paralelas (um mostruário 2x2), onde cada um dos 4 quadros explora um estilo artístico diferente com paletas de cores únicas: (Quadro 1: Minimalista Clean e Elegante), (Quadro 2: Bauhaus Geométrico Industrial), (Quadro 3: Brutalismo Arquitetônico de Concreto Bruto), e (Quadro 4: Maximalismo Vibrante e Denso). --ar 47:75 --no camera lens, no DSLR lens, no photography camera, no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

```text
Arte gráfica 2D plana de alta resolução para impressão de cartela retangular vertical de protetor de lente (47x75 mm). Mantenha o logo da marca e o subtítulo '{{SUBTITULO}}' centralizados no terço superior da imagem anexada. A arte visual, cores e ilustração do smartphone com protetores de lentes preenchem a cartela harmoniosamente. Imagem 2D plana contínua sem furos desenhados, sem recortes e sem ícones. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 📦 2. PROMPT DE MOCKUP 3D (Aprovação Física – Apenas Perfuração Vazada sem Anéis)
*Anexe a Arte 2D gerada no Passo 1 e cole:*

```text
Render 3D de produto de estúdio fotorealista de uma cartela de varejo plana vertical (47x75 mm) em pé sobre superfície de estúdio limpa, vista frontal reta. Aplique perfeitamente a arte 2D plana da imagem de referência anexada em toda a superfície da cartela. Aplique os recortes físicos da faca: corte o recorte semi-circular côncavo no canto superior direito e faça três furos circulares vazados fisicamente cortados no setor inferior (dois furos alinhados verticalmente no lado esquerdo e um furo no lado direito), exibindo a perfuração vazada limpa da faca sem anéis ou lentes. Iluminação suave de estúdio, resolução 8k. --no box, no 3d box, no cardboard box, no side walls, no depth, no metallic rings, no lenses
```

#### 🇺🇸 Versão em Inglês:
```text
Photorealistic 3D studio render of a vertical flat retail card (47x75 mm) standing upright, flat orthogonal front view. Seamlessly apply the 2D flat rectangular graphic artwork from the attached reference image across the entire card surface. Apply exact physical die-cut cutouts: cut the top-right concave semi-circular notch cutout, and cut three clean circular die-cut lens holes physically open in the lower section (two vertically aligned on the left and one on the right), showing empty die-cut perforations without any rings or lenses. Soft studio lighting, 8k resolution. --no box, no 3d box, no side walls, no depth, no metallic rings, no lenses
```

---


---

### 📦 2. Mockup 3D da Embalagem de Tela (MOCKUP 3D – Estojo de Plástico com Cabideiro)
*Anexe a Arte 2D Plana limpa gerada no Passo 1 e cole:*

```text
Render 3D de produto de estúdio fotorealista de uma embalagem retangular vertical (209x402 mm) em pé sobre superfície de estúdio limpa, vista frontal reta, com cabideiro Euro slot no topo. A face frontal exibe perfeitamente a arte 2D da imagem de referência anexada, com logo do cliente e subtítulo '{{SUBTITULO}}'. Acabamento plástico transparente brilhante, iluminação suave de estúdio, resolução 8k. --no cardboard, no paper texture
```

#### 🇺🇸 Versão em Inglês:
```text
Photorealistic 3D retail packaging mockup standing upright on a minimalist studio podium, flat orthogonal front view. The packaging is a rigid clear acrylic plastic case shell with an integrated molded transparent plastic Euro hang slot on top tab. The printed front face seamlessly applies the 2D graphic artwork from attached reference image. Soft studio lighting, 8k resolution. --no cardboard, no paper texture
```

---

## 📋 LINHA 3: BOARD DE APRESENTAÇÃO DE LOJA (PLACA RÍGIDA DE ACRÍLICO)

## 📱 SEÇÃO B: LINHA BOARD (EMBALAGEM DE PELÍCULA DE TELA – 209 × 402 mm)

> 📏 **DIMENSÃO FÍSICA COREL**: **209,0 x 402,0 mm** (Proporção `--ar 209:402`)  
> 🚨 **ESTRUTURA FÍSICA**: Caixa / Estojo em Plástico Transparente com recorte curvo de Orelhas/Cabideiro Euro Slot no topo e cantos arredondados na base.

---

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

### 1️⃣ PASSO B1: Arte 2D do Board – Saída Única Limpa (209:402)
*Anexe a foto de impressão do board + logo/Instagram do cliente + prompt e envie:*

```text
Layout gráfico em 2D plano para a face frontal de embalagem retangular de película de tela de celular, imagem retangular 2D estritamente plana, proporção 209:402. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O topo contém o logo do cliente e o subtítulo '{{SUBTITULO}}' (ex: PELÍCULA PRIVACIDADE, PELÍCULA VIDRO 9H). No centro da composição, exiba a ilustração de um smartphone moderno com a película de vidro protetora transparente flutuando sobre a tela (com a silhueta da faca: cantos inferiores arredondados e recorte curvo de orelhas no topo). Imagem retangular plana e contínua sem ícones de benefícios. --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

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

*Anexe (1) O gabarito da faca mestre do Board + (2) A Arte 2D do Board e cole:*

```text
Utilize a faca mestre original do board como camada estrutural rígida. Não recrie as linhas de corte nem modifique a geometria do gabarito. Uma arte gráfica bidimensional e plana (flat 2D vector design) para impressão de embalagem board vertical, proporção 209:402. A embalagem possui a faca mestre com recorte curvo de orelhas no topo e cantos arredondados na base. Reproduza fielmente a marca e logo do cliente no topo, o subtítulo '{{SUBTITULO}}' e exiba no centro a ilustração do smartphone moderno com a película de vidro protetora transparente flutuando sobre a tela. [ESTRUTURA RÍGIDA]: Mantenha a fidelidade absoluta ao gabarito de corte anexado. --ar 209:402 --no box, no 3d mockup
```

#### 🇺🇸 Versão em Inglês:
```text
Use original master board die-cut layout as structural base. Do not modify cutlines or template geometry. Flat 2D vector graphic design for vertical display board printing, 209:402 aspect ratio. The board features exact die-cut outline with top curved ear tab notch and rounded bottom corners. Seamlessly apply customer brand logo and subtitle '{{SUBTITLE}}' at the top, and feature the central illustration of a modern smartphone with clear floating tempered glass screen protector film above the screen. [RIGID STRUCTURE]: Maintain absolute fidelity to the attached master template outline. --ar 209:402 --no box, no 3d mockup
```

---

### 📦 2. Mockup 3D do Board Rígido de Acrílico (MOCKUP 3D DO BOARD – Topo de Orelhas & Logo 3D Cromado)
*Anexe a Arte 2D do Board gerada no Passo 1A ou 1B e cole:*

```text
Render 3D de produto de estúdio fotorealista de uma placa board de apresentação em acrílico rígido brilhante em pé sobre superfície de estúdio limpa, vista frontal reta. A placa possui o formato físico da faca: cantos arredondados na base e o recorte curvo com orelhas no topo. A superfície da placa aplica 100% da arte de impressão 2D da imagem de referência anexada, destacando a marca do cliente e o logo central com acabamento 3D metálico cromado reluzente em relevo. Iluminação suave de estúdio, resolução 8k. --no box, no cardboard, no side walls, no depth, no lens holes
```

#### 🇺🇸 Versão em Inglês:
```text
Photorealistic 3D studio render of a rigid clear glossy acrylic display board standing upright, flat orthogonal front view. The board features exact die-cut geometry: rounded bottom corners and top curved ear tab notch. Surface seamlessly applies the 2D graphic artwork from attached reference image, featuring customer brand logo with polished 3D chrome metallic embossed finish. Soft studio lighting, 8k resolution. --no box, no cardboard, no side walls, no depth, no lens holes
```

---

---

## 🎨 FERRAMENTAS DE VARIATIBILIDADE DE DESIGN & ADAPTAÇÃO

### 🔀 1. Prompt de Variações de Estilo de Arte (3 Variações do Mesmo Cliente)
*Digite em resposta à Arte 2D gerada:*

```text
Crie 3 imagens de cartela com estilos de arte gráfica diferentes desta imagem de referência anexada, mantendo o mesmo logo da marca '{{MARCA}}', o subtítulo '{{SUBTITULO}}' e a proporção 260:418. Varie a composição do fundo gráfico (ex: uma com linhas neon tech, uma com textura de fibra de carbono e uma com gradiente suave fluído). --ar 260:418 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 🎨 2. Comando Curto para Variação de Cores em Grade 2x2
*Digite em resposta à imagem gerada ou anexe a arte escolhida:*

```text
Variação de cores 2x2: Gere 4 novas opções em grade 2x2 explorando paletas de cores distintas, vibrantes e contrastantes entre si em cada quadro, preservando perfeitamente o logo da marca, o subtítulo '{{SUBTITULO}}' e o estilo visual da imagem anexada. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 🇺🇸 Versão em Inglês:
```text
2x2 Color Variation: Generate 4 new options in a 2x2 display grid exploring distinct, vibrant, and contrasting color palettes in each frame, while perfectly preserving the brand logo, subtitle '{{SUBTITLE}}', and visual style of the attached reference image. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 🖼️ 3. Prompt Universal de Adaptação de Estilo & Fonte (Curto, Claro & Direto)
*Anexe 2 imagens: (1) Foto da Referência de Estilo/Fonte e (2) Arte 2D Oficial do Cliente, e cole:*

```text
Aplique o estilo visual, a tipografia da fonte e o efeito 3D da primeira imagem de referência para escrever o logo e o subtítulo da segunda imagem anexada. Ignore as palavras da primeira imagem. Mantenha o bloco da marca reduzido no terço superior da cartela e a metade inferior totalmente limpa. --no text from image 1, no icons, no 3d mockup
```

#### 🇺🇸 Versão em Inglês:
```text
Apply the background visual style, font typography, and 3D effect from the first reference image to render the logo and subtitle from the second attached image. Ignore all words from the first image. Keep the brand block compactly scaled in the upper-third region, leaving the lower half clean. --no text from image 1, no icons, no 3d mockup
```

---

---

## 🎨 MÉTODO DINÂMICO DE ADAPTAÇÃO DE ESTILOS POR DEMANDA (100% EVOLUTIVO)

> 💡 **SISTEMA ABERTO**: Novos estilos artísticos e tendências visuais são adicionados dinamicamente conforme a demanda dos clientes. O gestor pode gerar qualquer estilo apenas digitando o nome do estilo desejado ou anexando uma imagem de inspiração!

---

### 🎨 1. Adaptação por Nome de Estilo Desejado (Texto Livre)
*Anexe a Arte 2D Oficial criada no Passo 1 e cole:*

#### 📸 Para a Cartela FRAME (47:75):
```text
Adaptação de estilo dinâmico para Frame de Lente: Mantenha a proporção 47:75, o logo da marca e o subtítulo no terço superior da imagem anexada. Transforme a composição e o fundo gráfico no estilo '{{ESTILO_DESEJADO}}' (ex: Cyberpunk Neon, Futurista 3D, Minimalista Clean, Luxo Dourado, Fibra de Carbono, etc.), misturado com elementos sutis de lentes de câmera de vidro. Metade inferior limpa. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 📱 Para a Embalagem de TELA (209:402):
```text
Adaptação de estilo dinâmico para Embalagem de Tela: Mantenha a proporção 209:402, o logo da marca e o subtítulo no terço superior da imagem anexada. No centro, exiba o smartphone com a película de vidro transparente flutuante integrados ao estilo '{{ESTILO_DESEJADO}}' (ex: Cyberpunk Neon, Futurista 3D, Minimalista Clean, Luxo Dourado, Fibra de Carbono, etc.). --ar 209:402 --no icons, no badges, no cutouts, no drawn holes, no 3d mockup
```

---

### 3️⃣ Re-Padronização Rígida de Proporção DO FRAME (Isolar Cartela Escolhida)
*Quando o ChatGPT gerar 3 ou 4 variações e você quiser isolar uma arte no enquadramento perfeito sem perder o celular/lentes, anexe o print e cole:*

```text
Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '47:75' (para Frame) ou '209:402' (para Tela/Board). Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca e subtítulo '{{SUBTITULO}}' no terço superior, o estilo visual de fundo E A ILUSTRAÇÃO/FOTO DO SMARTPHONE COM OS PROTETORES DE LENTES DE CÂMERA da cartela selecionada. Preencha 100% do enquadramento sem remover o celular nem os protetores de lentes. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

#### 🇺🇸 Versão em Inglês:
```text
Rigid ratio standardization: Take exclusively the chosen card from the attached reference image and render it isolated as a flat 2D continuous artwork filling 100% of the canvas frame in the exact physical aspect ratio '47:75' (for Frame) or '209:402' (for Board). Seamlessly re-frame and preserve ALL graphic elements from the attached image: maintain customer brand logo and subtitle '{{SUBTITLE}}' in the upper-third, the visual background style, AND THE ENTIRE SMARTPHONE CAMERA MODULE AND LENS PROTECTORS ILLUSTRATION from the selected card. Do not remove the smartphone or lens protectors. --ar 47:75 --no icons, no badges, no box, no cutouts, no drawn holes, no 3d mockup
```

---

### 🖼️ 2. Adaptação por Imagem de Referência Anexada (Zero Variáveis)
*Anexe 2 imagens: (1) Foto da Referência de Estilo/Fonte e (2) Arte 2D Oficial do Cliente, e cole:*

```text
Aplique o estilo visual, a tipografia da fonte e o efeito 3D da primeira imagem de referência para escrever o logo e o subtítulo da segunda imagem anexada. Ignore as palavras da primeira imagem. Mantenha o bloco da marca reduzido no terço superior da cartela e a metade inferior totalmente limpa. --no text from image 1, no icons, no 3d mockup
```

---
