const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const b64DualCasePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/caixa_dupla_referencia.jpg';

const b64DualCase = fs.readFileSync(b64DualCasePath).toString('base64');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace Slide 4 and Slide 5 HTML with new Slide 4, Slide 5, and Slide 6 HTML
const s4Start = '<div class="slide-card" id="slide-4">';
const footerStart = '<!-- FOOTER CONTROLS -->';

const idxS4 = html.indexOf(s4Start);
const idxFooter = html.indexOf(footerStart);

if (idxS4 !== -1 && idxFooter !== -1) {
    const newSlides = `<div class="slide-card" id="slide-4">
			<div class="slide-header">
				<div>
					<div class="slide-tag">PASSO B4 • PADRONIZAÇÃO 2D FRENTE</div>
					<h1 class="slide-title">Padronização 2D Frente (209 × 402 mm)</h1>
					<p class="slide-subtitle">Isolamento da arte gráfica frontal aprovada pelo cliente no gabarito físico</p>
				</div>
				<select class="slide-number-dropdown" onchange="goToSlide(parseInt(this.value))">
					<option value="1">Slide 1 de 6 • Arte 2D & Naming</option>
					<option value="2">Slide 2 de 6 • Mostruário (Lotes 1 & 2)</option>
					<option value="3">Slide 3 de 6 • Mostruário (Lotes 3 & 4)</option>
					<option value="4" selected>Slide 4 de 6 • Padronização 2D Frente</option>
					<option value="5">Slide 5 de 6 • Arte 2D Verso & Benefícios</option>
					<option value="6">Slide 6 de 6 • Mockup 3D Estojo Duplo</option>
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
				</div>

				<div>
					<div class="notes-box">
						<div class="notes-header">Instruções de Pré-Impressão da Frente</div>
						<ul class="notes-list">
							<li><strong>Print da Opção Escolhida</strong>: Anexe a imagem recortada do quadro que o cliente aprovou nos passos anteriores.</li>
							<li><strong>Remoção de Ruídos</strong>: Este prompt remove automaticamente marcas de faca, sombras 3D e elementos externos.</li>
							<li><strong>Fidelidade Proporcional</strong>: Garante que a imagem gerada fique 100% pronta para o gabarito no CorelDRAW.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- SLIDE 5 -->
		<div class="slide-card" id="slide-5">
			<div class="slide-header">
				<div>
					<div class="slide-tag">PASSO B5 • ARTE 2D VERSO & BENEFÍCIOS</div>
					<h1 class="slide-title">Arte 2D do Verso & Benefícios (209 × 402 mm)</h1>
					<p class="slide-subtitle">Criação da arte gráfica traseira com lista de benefícios e ícones vetorizados</p>
				</div>
				<select class="slide-number-dropdown" onchange="goToSlide(parseInt(this.value))">
					<option value="1">Slide 1 de 6 • Arte 2D & Naming</option>
					<option value="2">Slide 2 de 6 • Mostruário (Lotes 1 & 2)</option>
					<option value="3">Slide 3 de 6 • Mostruário (Lotes 3 & 4)</option>
					<option value="4">Slide 4 de 6 • Padronização 2D Frente</option>
					<option value="5" selected>Slide 5 de 6 • Arte 2D Verso & Benefícios</option>
					<option value="6">Slide 6 de 6 • Mockup 3D Estojo Duplo</option>
				</select>
			</div>

			<div class="content-grid">
				<div>
					<!-- PROMPT N2: GERADOR DE BENEFÍCIOS -->
					<div class="prompt-card">
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
						<div class="notes-header">Instruções de Pré-Impressão do Verso</div>
						<ul class="notes-list">
							<li><strong>Criação do Verso (Prompt 4B)</strong>: Anexe a Arte 2D da Frente aprovada no Slide 4 e cole os benefícios digitados acima. O prompt adiciona os ícones técnicos no lado direito e a película transparente flutuando no lado esquerdo.</li>
							<li><strong>Flexibilidade de Tópicos</strong>: Você pode utilizar de 1 até no máximo 5 benefícios de acordo com o pedido do cliente.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- SLIDE 6 -->
		<div class="slide-card" id="slide-6">
			<div class="slide-header">
				<div>
					<div class="slide-tag">PASSO B6 • MOCKUP 3D ESTOJO DUPLO</div>
					<h1 class="slide-title">Mockup 3D Estojo Transparente (Frente + Verso)</h1>
					<p class="slide-subtitle">Renderização 3D fotorealista do estojo plástico aberto em ângulo de apresentação comercial (Frente + Verso)</p>
				</div>
				<select class="slide-number-dropdown" onchange="goToSlide(parseInt(this.value))">
					<option value="1">Slide 1 de 6 • Arte 2D & Naming</option>
					<option value="2">Slide 2 de 6 • Mostruário (Lotes 1 & 2)</option>
					<option value="3">Slide 3 de 6 • Mostruário (Lotes 3 & 4)</option>
					<option value="4">Slide 4 de 6 • Padronização 2D Frente</option>
					<option value="5">Slide 5 de 6 • Arte 2D Verso & Benefícios</option>
					<option value="6" selected>Slide 6 de 6 • Mockup 3D Estojo Duplo</option>
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
							<li><strong>Envio de 3 Arquivos (Ordem Obrigatória)</strong>: Anexe 1º a Foto de Referência do Estojo Aberto em Pé, 2º a Arte 2D da Frente (gerada no Slide 4) e 3º a Arte 2D do Verso com benefícios (gerada no Slide 5).</li>
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

    html = html.substring(0, idxS4) + newSlides + html.substring(idxFooter);

    // Update totalSlides to 6
    html = html.replace(/const totalSlides = 5;/g, 'const totalSlides = 6;');

    // Update Slide 1, 2, 3 dropdowns to 6 slides
    html = html.replace(/Slide 1 de 5/g, 'Slide 1 de 6')
               .replace(/Slide 2 de 5/g, 'Slide 2 de 6')
               .replace(/Slide 3 de 5/g, 'Slide 3 de 6')
               .replace(/Slide 4 de 5/g, 'Slide 4 de 6')
               .replace(/Slide 5 de 5/g, 'Slide 5 de 6');

    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('Successfully restructured apresentacao_board.html to 6 dedicated slides!');
} else {
    console.error('Could not find indices for Slide 4 / Footer in apresentacao_board.html');
}
