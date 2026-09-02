const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const b64DualCasePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/caixa_dupla_referencia.jpg';

const b64DualCase = fs.readFileSync(b64DualCasePath).toString('base64');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace Slide 4 block
const s4Start = '<div class="slide-card" id="slide-4">';
const s5Start = '<div class="slide-card" id="slide-5">';
const s5End = '<!-- FOOTER CONTROLS -->';

const idxS4 = html.indexOf(s4Start);
const idxS5 = html.indexOf(s5Start);
const idxFooter = html.indexOf(s5End);

if (idxS4 !== -1 && idxS5 !== -1 && idxFooter !== -1) {
    const newSlide4 = `<div class="slide-card" id="slide-4">
			<div class="slide-header">
				<div>
					<div class="slide-tag">PASSO B4 • PADRONIZAÇÃO FRENTE & ARTE 2D VERSO</div>
					<h1 class="slide-title">Padronização 2D & Arte do Verso (209 × 402 mm)</h1>
					<p class="slide-subtitle">Isolamento da arte da frente aprovada e criação da arte 2D do verso com ícones de benefícios</p>
				</div>
				<select class="slide-number-dropdown" onchange="goToSlide(parseInt(this.value))">
					<option value="1">Slide 1 de 5 • Arte 2D & Naming</option>
					<option value="2">Slide 2 de 5 • Mostruário (Lotes 1 & 2)</option>
					<option value="3">Slide 3 de 5 • Mostruário (Lotes 3 & 4)</option>
					<option value="4" selected>Slide 4 de 5 • Padronização 2D & Verso</option>
					<option value="5">Slide 5 de 5 • Mockup 3D Estojo Duplo</option>
				</select>
			</div>

			<div class="content-grid">
				<div>
					<!-- PROMPT 4A: PADRONIZAÇÃO FRENTE -->
					<div class="prompt-card">
						<div class="prompt-card-header">
							<span class="prompt-label">Prompt 4A: Padronização 2D Frente (Gabarito 209:402)</span>
							<button class="copy-btn" onclick="copyPrompt('p4')">
								<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
								Copiar Frente 2D
							</button>
						</div>
						<div class="prompt-text" id="p4">...</div>
					</div>

					<!-- PROMPT N2: GERADOR DE BENEFÍCIOS -->
					<div class="prompt-card" style="margin-top: 1.25rem;">
						<div class="prompt-card-header">
							<span class="prompt-label" style="color: var(--accent-gold);">Prompt N2: Gerador de Benefícios para o Verso</span>
							<button class="copy-btn" style="background: linear-gradient(135deg, var(--accent-gold), #ff8800);" onclick="copyPrompt('pn2')">
								<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
								Copiar Benefícios
							</button>
						</div>
						<div class="prompt-text" id="pn2">...</div>
					</div>

					<!-- CAIXA DE ENTRADA DOS BENEFÍCIOS -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(2, 132, 199, 0.04); border-color: rgba(2, 132, 199, 0.2);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-cyan);">Digite ou Cole os Benefícios para o Verso (Até 5 tópicos):</span>
						</div>
						<input type="text" id="inputBeneficios" class="var-input" style="width: 100%; font-size: 0.9rem; padding: 10px 14px;" value="1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO" oninput="updatePrompts()" placeholder="Ex: 1. ULTRAFINA • 2. ALTA DEFINIÇÃO • 3. TOQUE SUAVE">
					</div>

					<!-- PROMPT 4B: ARTE 2D VERSO -->
					<div class="prompt-card" style="margin-top: 1.25rem;">
						<div class="prompt-card-header">
							<span class="prompt-label" style="color: var(--accent-purple);">Prompt 4B: Arte 2D do Verso (Com Benefícios & Ícones)</span>
							<button class="copy-btn" style="background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));" onclick="copyPrompt('p4b')">
								<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
								Copiar Verso 2D
							</button>
						</div>
						<div class="prompt-text" id="p4b">...</div>
					</div>
				</div>

				<div>
					<div class="notes-box">
						<div class="notes-header">Instruções de Pré-Impressão (Frente & Verso)</div>
						<ul class="notes-list">
							<li><strong>Padronização da Frente (Prompt 4A)</strong>: Anexe o print da opção escolhida pelo cliente no mostruário para isolar no gabarito 209:402.</li>
							<li><strong>Criação do Verso (Prompt 4B)</strong>: Anexe a Arte 2D da Frente aprovada no 4A e cole os benefícios digitados acima. O prompt adiciona os ícones técnicos no lado direito!</li>
							<li><strong>Flexibilidade de Benefícios</strong>: Você pode utilizar de 1 até no máximo 5 benefícios de acordo com a preferência do cliente.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		`;

    const newSlide5 = `<div class="slide-card" id="slide-5">
			<div class="slide-header">
				<div>
					<div class="slide-tag">PASSO B5 • MOCKUP 3D ESTOJO DUPLO</div>
					<h1 class="slide-title">Mockup 3D Estojo Transparente (Frente + Verso)</h1>
					<p class="slide-subtitle">Renderização 3D fotorealista do estojo plástico aberto em ângulo de apresentação comercial (Frente + Verso)</p>
				</div>
				<select class="slide-number-dropdown" onchange="goToSlide(parseInt(this.value))">
					<option value="1">Slide 1 de 5 • Arte 2D & Naming</option>
					<option value="2">Slide 2 de 5 • Mostruário (Lotes 1 & 2)</option>
					<option value="3">Slide 3 de 5 • Mostruário (Lotes 3 & 4)</option>
					<option value="4">Slide 4 de 5 • Padronização 2D & Verso</option>
					<option value="5" selected>Slide 5 de 5 • Mockup 3D Estojo Duplo</option>
				</select>
			</div>

			<div class="content-grid">
				<div>
					<div class="prompt-card">
						<div class="prompt-card-header">
							<span class="prompt-label" style="color: var(--accent-blue);">Prompt: Mockup 3D Estojo Transparente Aberto (Frente + Verso)</span>
							<button class="copy-btn" style="background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple)); color: #fff;" onclick="copyPrompt('p6')">
								<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
								Copiar Render 3D Duplo
							</button>
						</div>
						<div class="prompt-text" id="p6">...</div>
					</div>
				</div>

				<div>
					<div class="notes-box">
						<div class="notes-header">Apresentação Comercial Final (Frente + Verso)</div>
						<ul class="notes-list">
							<li><strong>Envio de 2 Arquivos (Ordem Obrigatória)</strong>: Anexe 1º a Arte 2D da Frente (gerada no 4A) e 2º a Arte 2D do Verso com benefícios (gerada no 4B).</li>
							<li><strong>Renderização Comercial</strong>: Gera o estojo acrílico transparente aberto exibindo a marca na frente e as especificações no verso com cabideiro Euro Slot.</li>
						</ul>
					</div>

					<!-- FOTO DE REFERÊNCIA DA CAIXA TRANSPARENTE DUPLA -->
					<div style="margin-top: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15,23,42,0.05); border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
						<div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.75rem; text-align: left; display: flex; align-items: center; gap: 6px;">Foto de Referência: Estojo Transparente Aberto (Frente + Verso)
						</div>
						<img src="data:image/jpeg;base64,${b64DualCase}" style="max-width: 100%; max-height: 280px; height: auto; border-radius: 8px; object-fit: contain;" />
					</div>
				</div>
			</div>
		</div>

		`;

    html = html.substring(0, idxS4) + newSlide4 + newSlide5 + html.substring(idxFooter);

    // Update JS script block
    const jsStart = 'const db = {';
    const jsEnd = 'const templates = {';
    const idxJsStart = html.indexOf(jsStart);
    const idxJsEnd = html.indexOf(jsEnd);

    if (idxJsStart !== -1 && idxJsEnd !== -1) {
        const newDbBlock = `const db = {
		p1Text: \`Layout gráfico em 2D plano para a face frontal de embalagem retangular de película de tela de celular, imagem retangular 2D estritamente plana, proporção [PROPORCAO]. Reproduza exatamente o estilo visual, cores da marca, fundo, tipografia e logo da imagem de referência anexada. O topo contém o logo do cliente e o subtítulo '[SUBTITULO]'. No centro da composição, exiba a ilustração de um smartphone moderno de perfil frontal em ângulo sutil destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa. Reduza a escala do bloco do logo, do subtítulo e da ilustração central do produto em 15% a 20%, garantindo margens de segurança limpas e generosas ao redor das bordas da cartela, mantendo a composição compacta e elegante. Flutuando paralelamente sobre a tela do celular, exiba uma película de vidro temperado 100% transparente com o contorno de borda preta fina ultra-precisa ao redor do perímetro do vidro e cantos arredondados (estilo película de tela inteira Full Screen Black Border / 2.5D Glass Shield). Mantenha a proporção [PROPORCAO], a iluminação limpa e a nitidez da arte original. --ar [PROPORCAO] --no top ears, no notch cutouts, no icons, no badges, no box, no 3d mockup\`,

		pl1Text: \`Adaptação multi-estilo Lote 1 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Minimalista Clean): Fundo clean, lettering sans-serif, smartphone Prata com wallpaper minimalista aceso e película HD cristal transparente.
• Quadro 2 (Bauhaus Geométrico): Fundo bauhaus, lettering geométrico, smartphone Titânio Dourado com wallpaper bauhaus aceso e película transparente chanfrada 2.5D.
• Quadro 3 (Brutalismo Monolítico): Fundo brutalista, lettering militar, smartphone Preto Grafite com wallpaper escuro aceso e película de privacidade fumê fosca.
• Quadro 4 (Maximalismo Vibrante): Fundo maximalista, lettering de impacto, smartphone Azul com wallpaper colorido aceso e película com brilho espelhado.
No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados. Reduza a escala do logo, do subtítulo e da ilustração do produto em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas de cada quadro. --ar [PROPORCAO] --no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,

		pl2Text: \`Adaptação multi-estilo Lote 2 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Cyberpunk Neon): Fundo neon, lettering cibernético, smartphone Preto com wallpaper de circuitos neon aceso e película de privacidade fumê com filtro neon.
• Quadro 2 (Luxo Dourado Mármore): Fundo mármore, lettering 3D dourado, smartphone Dourado com wallpaper de ondas de ouro aceso e película HD cristal com chanfro de ouro.
• Quadro 3 (Geométrico Abstrato 3D): Fundo cristalino, lettering 3D facetado, smartphone Prata com wallpaper 3D aceso e película transparente de cristal lapidado.
• Quadro 4 (Pop-Art Memphis): Fundo pop-art, lettering artístico, smartphone Grafite com wallpaper pop aceso e película de vidro com reflexo vibrante.
No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados. Reduza a escala do logo, do subtítulo e da ilustração do produto em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas de cada quadro. --ar [PROPORCAO] --no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,

		p2cText: \`Adaptação da imagem anexada: Mantenha a estrutura, o layout, o logo da marca, a posição do produto e a tipografia do lettering da imagem anexada. Gere novas variações visuais explorando cores inéditas e toques distintos de estilo gráfico no fundo. --ar [PROPORCAO] --no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,

		pl3Text: \`Adaptação multi-estilo Lote 3 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Stealth Carbon Tech): Fundo de fibra de carbono, lettering esportivo, smartphone Preto Fosco com wallpaper carbon aceso e película matte fosca antirreflexo.
• Quadro 2 (Vaporwave Retro-Futurismo): Fundo gradiente 80s, lettering synthwave, smartphone Violeta com wallpaper retrô aceso e película com reflexo iridescente.
• Quadro 3 (Sapphire Crystal): Fundo cristal azul, lettering cromado, smartphone Azul Safira com wallpaper de luz azul aceso e película anti-blue ray com reflexo azulado.
• Quadro 4 (Titanium Industrial): Fundo titânio escovado, lettering a laser, smartphone Titânio Natural com wallpaper industrial aceso e película de cristal temperado 9H.
No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados. Reduza a escala do logo, do subtítulo e da ilustração do produto em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas de cada quadro. --ar [PROPORCAO] --no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,

		pl4Text: \`Adaptação multi-estilo Lote 4 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:
• Quadro 1 (Bento Grid Tech): Layout bento box estilo Apple, lettering UI, smartphone Prata com wallpaper iOS minimalista aceso e película HD cristal limpa.
• Quadro 2 (Liquid Chromium Acid Tech): Fundo mercúrio cromado, lettering espelhado, smartphone Titânio Prateado com wallpaper de mercúrio 3D aceso e película espelhada cromada.
• Quadro 3 (Glassmorphism Frosted): Fundo vidro fosco, lettering 3D, smartphone Branco Estelar com wallpaper pastel aceso e película com textura jateada fosca.
• Quadro 4 (Y2K Glitch Matrix): Fundo matriz cibernética, lettering digital, smartphone Preto Grafite com wallpaper de matriz de dados aceso e película de privacidade fumê escura.
No centro de cada quadro, exiba a ilustração do smartphone moderno destacando a pílula da câmera frontal (Dynamic Island) no topo da tela acesa e a película de vidro temperado flutuando com contorno de borda preta fina e cantos arredondados. Reduza a escala do logo, do subtítulo e da ilustração do produto em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas de cada quadro. --ar [PROPORCAO] --no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,

		p3cText: \`Adaptação da imagem anexada: Mantenha a estrutura, o layout, o logo da marca, a posição do produto e a tipografia do lettering da imagem anexada. Gere novas variações visuais explorando cores inéditas e toques distintos de estilo gráfico no fundo. --ar [PROPORCAO] --no top ears, no notch cutouts, no camera holes, no icons, no badges, no cutouts, no drawn holes, no 3d mockup\`,

		p4Text: \`Padronização rígida de proporção: Pegue exclusivamente a cartela escolhida da imagem anexada e renderize-a isolada como uma arte 2D plana contínua preenchendo 100% da tela na proporção física exata '[PROPORCAO]'. Re-enquadre e preserve integralmente TODOS os elementos gráficos da imagem anexada: mantenha perfeitamente o logo da marca, subtítulo '[SUBTITULO]' no terço superior e a ilustração central do produto. Reduza a escala do logo, do subtítulo e da ilustração do produto em 15% a 20%, mantendo margens de segurança limpas em relação às bordas da cartela. --ar [PROPORCAO] --no die-cut lines, no knife lines, no cutouts, no red contour lines, no holes, no 3d mockup, no shadows\`,

		p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba a ilustração do smartphone com a película de vidro flutuante. Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no 3d mockup, no box\`,

		p6Text: \`Render 3D de estúdio fotorealista de produto de embalagem de estojo acrílico transparente para película de celular sobre mesa de madeira limpa. A embalagem de estojo está aberta em ângulo de apresentação comercial, exibindo a face da FRENTE à esquerda e a face do VERSO à direita com cabideiro Euro Slot no topo. A face da frente exibe a arte 2D gráfica da primeira imagem anexada. A face do verso exibe a arte 2D com os ícones de benefícios da segunda imagem anexada. Acabamento plástico transparente brilhante de estojo rígido, iluminação suave de estúdio commercial, resolução 8k. --no cardboard, no paper box\`
	};

	const templates = {
		pn1: \`Atue como especialista em Naming de marcas globais tech (nível Spigen/Belkin). Gere 10 nomes comerciais curtos em português para películas premium de smartphone:
• Nomes 1 a 5: Nomes diretos e de impacto para as linhas principais (Proteção, Privacidade, Cristal HD e Top Premium).
• Nomes 6 a 10: Variações avançadas criadas com sinônimos técnicos e adjetivos diferentes.
Para cada nome apresente estritamente o formato: NOME - SUBTÍTULO sugerido.\`,

		pn2: \`Atue como especialista em Copywriting de embalagens de tecnologia. Gere até 5 tópicos de benefícios curtos e de alto impacto comercial em português para o verso de embalagem de película de tela:
• Benefícios 1 a 5: Tópicos técnicos diretos (ex: 1. Ultrafina e Resistente, 2. 5X Mais Resistente, 3. Alta Definição, 4. Toque Suave, 5. Fácil Instalação).
Para cada benefício, sugira o ícone minimalista ideal.\`
	};

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

	// UPDATE PROMPTS REALTIME ACCORDING TO USER SUBTITLE & BENEFITS INPUT
	function updatePrompts() {
		const subtitulo = document.getElementById('inputSubtitulo').value.trim() || 'DIAVEN - DIAMOND-CLASS OPTICAL SHIELD';
		const beneficiosEl = document.getElementById('inputBeneficios');
		const beneficios = beneficiosEl ? (beneficiosEl.value.trim() || '1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO') : '1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO';

		const map = {
			p1: db.p1Text,
			pl1: db.pl1Text,
			pl2: db.pl2Text,
			p2c: db.p2cText,
			pl3: db.pl3Text,
			pl4: db.pl4Text,
			p3c: db.p3cText,
			p4: db.p4Text,
			p4b: db.p4bText,
			p6: db.p6Text
		};

		for (const key in map) {
			const el = document.getElementById(key);
			if (el) {
				let updatedText = map[key]
					.replace(/\\[SUBTITULO\\]/g, subtitulo)
					.replace(/\\[BENEFICIOS\\]/g, beneficios)
					.replace(/\\[PROPORCAO\\]/g, proporcao);
				el.textContent = updatedText;
			}
		}

		const pn1El = document.getElementById('pn1');
		if (pn1El) pn1El.textContent = templates.pn1;

		const pn2El = document.getElementById('pn2');
		if (pn2El) pn2El.textContent = templates.pn2;
	}
`;

        const idxScriptEnd = html.indexOf('// SLIDE NAVIGATION');
        if (idxScriptEnd !== -1) {
            html = html.substring(0, idxJsStart) + newDbBlock + '\n\n\t' + html.substring(idxScriptEnd);
            fs.writeFileSync(htmlPath, html, 'utf8');
            console.log('Successfully updated apresentacao_board.html with Verso & Dual Mockup!');
        } else {
            console.error('Could not find SLIDE NAVIGATION index');
        }
    } else {
        console.error('Could not find JS db block');
    }
} else {
    console.error('Could not find Slide 4/5 markers in HTML');
}
