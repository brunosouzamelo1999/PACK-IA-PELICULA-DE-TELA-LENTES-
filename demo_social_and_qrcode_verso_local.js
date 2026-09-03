const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Add HTML inputs for Social Media & QR Code in Slide 5
const targetInputs = `<!-- CAIXA DE ENTRADA DOS BENEFÍCIOS -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(2, 132, 199, 0.04); border-color: rgba(2, 132, 199, 0.2);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-cyan);">Digite ou Cole os Benefícios para o Verso (Até 5 tópicos):</span>
						</div>
						<input type="text" id="inputBeneficios" class="var-input" style="width: 100%; font-size: 0.9rem; padding: 10px 14px;" value="1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO" oninput="updatePrompts()" placeholder="Ex: 1. ULTRAFINA • 2. ALTA DEFINIÇÃO • 3. TOQUE SUAVE">
					</div>`;

const newInputs = `<!-- CAIXA DE ENTRADA DOS BENEFÍCIOS -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(2, 132, 199, 0.04); border-color: rgba(2, 132, 199, 0.2);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-cyan);">Digite ou Cole os Benefícios para o Verso (Até 5 tópicos):</span>
						</div>
						<input type="text" id="inputBeneficios" class="var-input" style="width: 100%; font-size: 0.9rem; padding: 10px 14px;" value="1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO" oninput="updatePrompts()" placeholder="Ex: 1. ULTRAFINA • 2. ALTA DEFINIÇÃO • 3. TOQUE SUAVE">
					</div>

					<!-- DEMO: CAIXA DE ENTRADA DE REDES SOCIAIS E QR CODE -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(124, 58, 237, 0.04); border-color: rgba(124, 58, 237, 0.25);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-purple);">[DEMO EXCLUSIVA] QR Code & Redes Sociais no Verso:</span>
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
							<div>
								<label style="font-size: 0.75rem; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">Link do QR Code / Garantia:</label>
								<input type="text" id="inputQRCode" class="var-input" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;" value="www.cason.com.br/garantia" oninput="updatePrompts()">
							</div>
							<div>
								<label style="font-size: 0.75rem; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">Instagram:</label>
								<input type="text" id="inputInstagram" class="var-input" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;" value="@cason.oficial" oninput="updatePrompts()">
							</div>
							<div>
								<label style="font-size: 0.75rem; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">Facebook:</label>
								<input type="text" id="inputFacebook" class="var-input" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;" value="fb.com/cason.oficial" oninput="updatePrompts()">
							</div>
							<div>
								<label style="font-size: 0.75rem; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">Twitter / X:</label>
								<input type="text" id="inputTwitter" class="var-input" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;" value="@cason_oficial" oninput="updatePrompts()">
							</div>
						</div>
					</div>`;

content = content.replace(targetInputs, newInputs);

// 2. Update db.p4bText prompt template
const oldP4b = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

const newP4b = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. No rodapé inferior do verso, exiba um QR Code vetorizado nítido com a instrução 'GARANTIA & SUPORTE: [QRCODE]' acompanhado dos ícones vetorizados oficiais de redes sociais: Instagram ([INSTAGRAM]), Facebook ([FACEBOOK]) e Twitter/X ([TWITTER]). Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

content = content.replace(oldP4b, newP4b);

// 3. Update updatePrompts() in JS to read inputQRCode, inputInstagram, inputFacebook, inputTwitter
const oldUpdateJs = `const map = {
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
		};`;

const newUpdateJs = `const qrcode = (document.getElementById('inputQRCode') ? document.getElementById('inputQRCode').value.trim() : 'www.cason.com.br/garantia') || 'www.cason.com.br/garantia';
		const insta = (document.getElementById('inputInstagram') ? document.getElementById('inputInstagram').value.trim() : '@cason.oficial') || '@cason.oficial';
		const face = (document.getElementById('inputFacebook') ? document.getElementById('inputFacebook').value.trim() : 'fb.com/cason.oficial') || 'fb.com/cason.oficial';
		const twit = (document.getElementById('inputTwitter') ? document.getElementById('inputTwitter').value.trim() : '@cason_oficial') || '@cason_oficial';

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
		};`;

content = content.replace(oldUpdateJs, newUpdateJs);

const replaceStrOld = `.replace(/\\[BENEFICIOS\\]/g, beneficios)`;
const replaceStrNew = `.replace(/\\[BENEFICIOS\\]/g, beneficios)
					.replace(/\\[QRCODE\\]/g, qrcode)
					.replace(/\\[INSTAGRAM\\]/g, insta)
					.replace(/\\[FACEBOOK\\]/g, face)
					.replace(/\\[TWITTER\\]/g, twit)`;

content = content.replace(replaceStrOld, replaceStrNew);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated apresentacao_board.html locally with Social Media & QR Code Demo!');
