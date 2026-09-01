# Guia Rápido de IA: Engenharia de Prompts para Embalagens

Este guia prático ensina como operar e, principalmente, **como editar e customizar os prompts** de embalagem no **Google Labs Flow**. O foco é garantir imagens **perfeitamente de frente (frontal)**, focando na estrutura física, materiais e cores, enquanto textos, logotipos e ilustrações são herdados automaticamente da imagem de referência de estilo (Style Reference) no Flow, sem a necessidade de especificá-los no prompt (evitando distorções na geração de texto).

> 💡 **Novo Fluxo de Prompts Isolados**: Para a criação modular da embalagem por partes (1: Logo, 2: Nome/Lettering, 3: Película Flutuante Hero, 4: Fundo, 5: Composição 2D, 6: Render 3D), acesse o guia dedicado: [fluxo_embalagem_4_elementos.md](file:///c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/fluxo_embalagem_4_elementos.md).

---

## 🚀 Como Funciona a Estrutura de um Prompt de Embalagem?

Todo prompt deste projeto segue uma arquitetura rígida para evitar erros geométricos e angulares. Quando você precisar editar um prompt, lembre-se desta fórmula:

```text
[Tipo de Mockup] + [Especificação Física da Faca/Caixa] + [Paleta de Cores] + [Ângulo de Câmera Frontal] + [Estilo de Render]
```

### Regras de Ouro para Edição e Ajuste Manual:
* **Para forçar a imagem perfeitamente de frente**: Sempre inclua os termos `vista perfeitamente frontal e reta (flat orthogonal front shot)`. Isso impede que a IA gere a caixa na diagonal (perspectiva 3/4).
* **Para as cores e materiais**: Especifique de forma simples no prompt as cores e texturas desejadas (ex: `verde neon vibrante e preto fosco profundo`, `papelão preto premium de acabamento fosco`).
* **Textos e Logotipos**: Não descreva textos, marcas, modelos ou especificações de celular no prompt de texto. A IA herdará esses elementos gráficos diretamente da imagem de referência de estilo (Style Reference) carregada no Flow.

---

## 📝 O que preencher no Formulário do Flow (Variáveis Dinâmicas)

Se você usar o Flow com os campos de entrada, configure os textos abaixo:

### 1. Cartela de Protetor de Lente (Frame Ultimate - 3 Furos)
* **`product_name`**: `Cartela de embalagem de varejo para protetor de lente de câmera de celular, com vista perfeitamente frontal e reta (flat orthogonal front shot). A embalagem é uma cartela retangular vertical com cantos arredondados, apresentando um recorte semi-circular no canto superior direito para baixo`
* **`colors`**: `Padrões de círculos brilhantes em verde neon vibrante sobre um fundo cinza escuro`
* **`style_notes`**: `Materiais e textura: papelão escuro premium, com três furos circulares grandes no centro para lentes de câmera, com bordas brilhantes em neon. O layout e a composição devem seguir o estilo de design da imagem de referência. Apresentação em estúdio limpo, fotorealista.`

### 1B. Cartela de Protetor de Lente (Frame Ultimate - 2 Furos Verticais - Recorte Direito)
* **`product_name`**: `Cartela de embalagem de varejo para protetor de lente de câmera de celular, com vista perfeitamente frontal e reta (flat orthogonal front shot). A embalagem é uma cartela retangular vertical com cantos arredondados, apresentando um recorte semi-circular no canto superior direito para baixo`
* **`colors`**: `Padrões de círculos brilhantes em verde neon vibrante sobre um fundo cinza escuro`
* **`style_notes`**: `Materiais e textura: papelão escuro premium, com dois furos circulares grandes no centro-inferior para lentes de câmera, alinhados verticalmente, com bordas brilhantes em neon. O layout e a composição devem seguir o estilo de design da imagem de referência. Apresentação em estúdio limpo, fotorealista.`

### 2. Película de Tela de Celular (Caixa / Cartucho 180x83x8 mm)
* **Gabarito de Referência (Faca)**: Baseado no arquivo [cartucho_gabarito_180X83X8MM.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/cartucho_gabarito_180X83X8MM.png) (caixa vertical com furo central na parte superior).
* **`product_name`**: `Caixa tipo cartucho retangular vertical para película de tela de celular, com vista perfeitamente frontal e reta (flat orthogonal front-facing view). Dimensões proporcionais exatas de 180x83x8 mm e furo tipo Euro slot no topo centro para pendurar`
* **`colors`**: `Verde neon vibrante e preto fosco profundo`
* **`style_notes`**: `O design impresso na frente é minimalista e limpo, sem poluição visual. Papelão de acabamento fosco premium.`

### 3. Capinha TPU Transparente (Efeito Acrílico/Plástico)
* **Gabarito de Referência (Faca)**: Baseado na mesma caixa vertical do arquivo [cartucho_gabarito_180X83X8MM.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/cartucho_gabarito_180X83X8MM.png) (com furo central na parte superior).
* **`product_name`**: `Caixa de embalagem retangular vertical para capinha de celular, com vista perfeitamente frontal e reta (flat orthogonal front-facing view) e furo tipo Euro slot no topo centro para pendurar`
* **`colors`**: `Bordas brancas minimalistas com face frontal de plástico acrílico transparente`
* **`style_notes`**: `Vista de frente, mostrando a capinha transparente dentro da caixa com reflexo brilhante. O design impresso na frente é minimalista e limpo, sem poluição visual.`

### 4. Capinha TPU Fosca
* **Gabarito de Referência (Faca)**: Baseado na mesma caixa vertical do arquivo [cartucho_gabarito_180X83X8MM.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/cartucho_gabarito_180X83X8MM.png) (com furo central na parte superior).
* **`product_name`**: `Caixa tipo luva de embalagem retangular vertical para capinha de celular, com vista perfeitamente frontal e reta (flat orthogonal front-facing view) e furo tipo Euro slot no topo centro para pendurar`
* **`colors`**: `Cinza escuro fosco e detalhes em cinza escuro`
* **`style_notes`**: `Vista de frente, textura de silicone macia ao toque e acabamento de superfície anti-reflexo. O design impresso na frente é minimalista e limpo, sem poluição visual.`

### 5. Placas de Apresentação (Boards)
* **Gabarito de Referência (Faca)**: Baseado na mesma caixa vertical do arquivo [cartucho_gabarito_180X83X8MM.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/cartucho_gabarito_180X83X8MM.png) (com furo central na parte superior).
* **`product_name`**: `Luva de embalagem para placa de apresentação de produto, com vista perfeitamente frontal e reta (flat orthogonal front-facing view) e furo tipo Euro slot no topo centro para pendurar`
* **`colors`**: `Dourado metálico sobre papelão preto fosco profundo`
* **`style_notes`**: `Vista de frente, papelão rígido com acabamento fosco de luxo, bordas limhas e marcantes. O design impresso na frente é minimalista e limpo, sem poluição visual.`

### 6. Cartucho de Protetor de Lente (Cartucho Frame - 100x83x13 mm)
* **Gabarito de Referência (Faca)**: Baseado no arquivo [cases_brasil_frame_100x83x13.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/cases_brasil_frame_100x83x13.png) (caixa vertical tipo cartucho de 100x83x13 mm com aba Euro slot centralizada no topo).
* **`product_name`**: `Caixa tipo cartucho retangular vertical para protetor de lente de câmera de celular, com vista perfeitamente frontal e reta (flat orthogonal front-facing view). Dimensões físicas proporcionais exatas de 100x83x13 mm e aba com furo tipo Euro slot no topo centro para pendurar`
* **`colors`**: `Preto fosco profundo com faixa azul no canto esquerdo e grafismos em vermelho, branco e azul`
* **`style_notes`**: `O design impresso na frente exibe uma grande ilustração circular do escudo do Capitão América na lateral esquerda, o título vertical "FRAME SLIM" em azul e branco, e a face traseira exibe especificações técnicas e diagrama técnico de anéis em traços brancos sobre fundo preto. Papelão rígido premium com laminação fosca.`

---

## 🎨 Guia de Ajuste Rápido de Prompt (Bate-Bola com o Cliente)

Quando o cliente pedir alterações de cor ou ângulo durante as reuniões, ajuste os termos diretamente:

* **Para alinhar de frente (ângulo reto)**:
  * Reforce os termos: `vista perfeitamente frontal e reta (flat orthogonal front shot)`.
* **Para trocar cores**:
  * Substitua as cores no prompt: por exemplo, mude de `verde neon vibrante e preto fosco profundo` para `azul cobalto e cinza chumbo`.
* **Para alterar o acabamento e materiais**:
  * Ajuste o material: por exemplo, mude de `papelão preto de acabamento fosco` para `papelão com laminação brilhante (glossy finish)`.

---

## 💡 Biblioteca Completa de Prompts Estruturais (Frame Slim)
> Copie o bloco correspondente ao modelo do iPhone para garantir o desenho correto do protetor de lente:

### A) iPhone 11 - 12 - 12 Mini (2 Furos Verticais à Esquerda)
`Com base no arquivo "modelo_slim_iphone11" faça: Maquete profissional em 3D de um protetor de lente de câmera de celular (camera lens protector plate), com vista perfeitamente frontal e reta (flat orthogonal front shot). O protetor é uma peça quadrada com cantos arredondados, apresentando exatamente dois furos circulares vazados alinhados verticalmente no lado esquerdo.`

### B) iPhone 16 - 16 Plus / iPhone 17 (2 Furos Centrados em "8")
`Com base no arquivo "modelo_slim_iphone16" faça: Maquete profissional em 3D de um protetor de lente de câmera de celular (camera lens protector plate), com vista perfeitamente frontal e reta (flat orthogonal front shot). O protetor é uma placa retangular vertical com cantos arredondados, apresentando exatamente dois furos circulares vazados de tamanho e diâmetro idênticos, centralizados, alinhados verticalmente e tangentes entre si no meio (formando uma silhueta de algarismo 8).`

### C) iPhone 13 - 13 Mini / 14 - 14 Plus / 15 - 15 Plus (2 Furos Diagonais)
`Com base no arquivo "modelo_slim_iphone13" faça: Maquete profissional em 3D de um protetor de lente de câmera de celular (camera lens protector plate), com vista perfeitamente frontal e reta (flat orthogonal front shot). O protetor é uma peça quadrada com cantos arredondados, apresentando exatamente dois furos circulares vazados de tamanho e diâmetro idênticos, dispostos de forma diagonal (um no canto superior esquerdo e outro no canto inferior direito).`

### D) iPhone 17 Pro - 17 Pro Max (3 Furos Triangulares)
`Com base no arquivo "modelo_slim_iphone17pro" faça: Maquete profissional em 3D de um protetor de lente de câmera de celular (camera lens protector plate), com vista perfeitamente frontal e reta (flat orthogonal front shot). O protetor é uma peça quadrada com cantos arredondados, apresentando exatamente três furos circulares vazados de tamanho e diâmetro idênticos, dispostos em formato triangular (dois furos alinhados verticalmente no lado esquerdo e um furo centralizado no lado direito).`

---

## 🎴 Biblioteca de Prompts Estruturais para Cartelas de Embalagem (Frame Ultimate)
> Copie o bloco correspondente ao modelo do iPhone para garantir o desenho correto da cartela com os furos das lentes:

### A) Cartela de 3 Furos (iPhone 17 Pro / Pro Max - Recorte Superior Direito)
`Com base no arquivo "modelo_ultimate_iphone17pro" faça: Maquete profissional em 3D de uma cartela de embalagem de varejo para protetor de lente de câmera de celular (camera lens protector packaging card), com vista perfeitamente frontal e reta (flat orthogonal front shot). A embalagem é uma cartela retangular vertical com cantos arredondados, apresentando exatamente um recorte côncavo semicircular no topo do canto superior direito orientado para baixo, e exatamente três furos circulares vazados no centro para lentes de câmera, dispostos em formato triangular (dois furos alinhados verticalmente no lado esquerdo e um furo centralizado no lado direito).`

### B) Cartela de 2 Furos Verticais (iPhone 11 / 12 / 16 / 17 - Recorte Superior Direito)
`Com base no arquivo "modelo_card_recorte_direito_2furos" faça: Maquete profissional em 3D de uma cartela de embalagem de varejo para protetor de lente de câmera de celular (camera lens protector packaging card), com vista perfeitamente frontal e reta (flat orthogonal front shot). A embalagem é uma cartela retangular vertical com cantos arredondados, apresentando exatamente um recorte côncavo semicircular no topo do canto superior direito orientado para baixo, e exatamente dois furos circulares vazados no centro-inferior, alinhados verticalmente um sobre o outro.`

---

## 🎨 Biblioteca de Estilos de Design dos Concorrentes (Os 11 Modelos)
> Use no final dos prompts de Frame Slim ou Frame Ultimate para alterar as artes:

* **MODELO 01 (Estilo Garras Rasgadas - mypro)**:
  `Paleta de cores: marcas de garras rasgadas em verde-petróleo escuro (dark teal claw marks) sobre um fundo preto fosco, com uma linha de contorno vermelha fina nas bordas externas da peça e ao redor dos furos circulares. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 02 (Estilo Linhas Mecânicas - InSafe)**:
  `Paleta de cores: lines e grades vetoriais em tons de roxo profundo e cinza escuro, simulando um padrão blindado mecânico no fundo. O layout e a composição devem seguir o estilo de design da imagem de referência, com finas marcações roxas ao redor dos furos. Materiais e textura: plástico escuro fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 03 (Estilo Faixa L Magenta - CASES BRASIL)**:
  `Paleta de cores: um grafismo em formato de "L" grosso e curvado na cor rosa/magenta brilhante correndo ao longo da borda esquerda e inferior da peça, com o restante da face frontal da peça em cor preta sólida fosca. O logotipo "cases brasil" e o título "LENS MAX" estão no quadrante superior direito em branco e magenta. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico fosco premium, com apresentação em estúdio limpo, fotorealista.`
  *(Exemplo de Edição das Partes: Para alterar as cores das partes (ex: Verde Neon e Cinza Chumbo), altere o texto correspondente: "L" em "verde neon vibrante", fundo em "cinza chumbo fosca" e logotipo em "branco e verde neon").*

* **MODELO 04 (Estilo Faixa Vertical Tech - CELLAIRIS)**:
  `Paleta de cores: fundo cinza escuro dividido ao meio por uma faixa vertical preta grossa centralizada, com linhas e grafismos brilhantes em azul ciano neon decorando as laterais. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 05 (Estilo Luxo Minimalista - CASE & COMPANY)**:
  `Paleta de cores: linhas finas e elegantes em dourado metálico brilhante (gold foil) contornando as bordas externas e ao redor dos furos circulares sobre um fundo preto fosco uniforme. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico de toque suave premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 06 (Estilo Elos Octagonais - UP FORCE)**:
  `Paleta de cores: padrões de formas geométricas octagonais entrelaçadas em roxo neon brilhante e cinza sobre o fundo preto. O layout e a composição devem seguir o estilo de design da imagem de referência, apresentando contornos roxos finos ao redor da peça e dos furos. Materiais e textura: plástico escuro fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 07 (Estilo Mosaico / Vitral - GD CASE)**:
  `Paleta de cores: padrão abstrato de mosaico de pedras irregulares (cobblestone pattern) nas cores pêssego, azul turquesa, cinza e preto no plano de fundo. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 08 (Estilo Linhas de Velocidade - ZIVIZ)**:
  `Paleta de cores: padrões densos de linhas finas diagonais e horizontais brilhantes em laranja neon sobre o fundo preto, com contornos laranja finos ao redor dos furos. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico escuro fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 09 (Estilo Letra Gigante Lateral - ILOVERS)**:
  `Paleta de cores: fundo preto fosco com uma grande textura de letras estilizadas em cinza chumbo na lateral esquerda da peça, contornando sutilmente os furos. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: plástico escuro fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 10 (Estilo Minimalista Escuro Absoluto - TECH SHIELD)**:
  `Paleta de cores: fundo preto fosco absoluto de alta qualidade na cartela, sem grafismos ou texturas adicionais. Apresenta uma linha de contorno extremamente fina e discreta em azul escuro profundo (dark navy blue outline) delimitando as bordas externas da cartela e ao redor de cada um dos furos. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: papelão ou plástico fosco premium, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 11 (Estilo Edição Especial Cinza Chumbo - IBLACK - ANZEN)**:
  `Paleta de cores: fundo em cinza chumbo escuro fosco (slate gray matte) na cartela, com linhas de contorno geométricas finas em cinza claro e branco contornando as bordas externas e ao redor de cada um dos furos. O layout e a composição devem seguir o estilo de design premium da imagem de referência. Materiais e textura: papelão ou plástico escuro fosco de toque suave, com apresentação em estúdio limpo, fotorealista.`

* **MODELO 12 (Estilo Temático de Herói - Capitão América - CASES BRASIL)**:
  `Paleta de cores: fundo preto fosco profundo, com uma faixa vertical azul-marinho na borda esquerda da face frontal e uma ilustração circular do escudo do Capitão América nas cores vermelho, branco e azul. O título vertical "FRAME SLIM" é exibido em letras grossas azul e branca na face frontal direita. A face traseira exibe especificações técnicas e diagrama em traços brancos sobre preto. O layout e a composição devem seguir o estilo de design da imagem de referência. Materiais e textura: papelão rígido com acabamento fosco premium, com apresentação em estúdio limpo, fotorealista.`

---

## 📂 Biblioteca de Recursos Disponíveis (Referências para a IA)

Todos os arquivos reais e referências enviados pelo cliente foram salvos no seu workspace para uso imediato dos gestores:

* **Facas de Corte e Gabaritos**:
  * [pangox_faca_card.jpeg](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/pangox_faca_card.jpeg) – Faca de corte da cartela interna original Pangox.
  * [cartucho_gabarito_180X83X8MM.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/cartucho_gabarito_180X83X8MM.png) – Gabarito oficial de caixa tipo cartucho vertical de varejo.
  * [obli_faca.jpeg](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/obli_faca.jpeg) – Faca de corte antiga do cartucho OBLI.

* **Modelos e Inspirações de Design (Estilos)**:
  * [pangox_competidores_card.jpeg](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/pangox_competidores_card.jpeg) – 9 modelos de designs de concorrentes para embalagens de lentes.
  * [modelos_cartuchos_180X83X8mm.png](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/modelos_cartuchos_180X83X8mm.png) – 10 modelos de designs de caixas para películas de tela.
  * [case_screen_exemplo.jpeg](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/case_screen_exemplo.jpeg) – Arte de referência verde neon da Case & Screen.
  * [pangox_original.jpeg](file:///C:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/pangox_original.jpeg) – Arte original da embalagem Pangox gerada no Flow.
