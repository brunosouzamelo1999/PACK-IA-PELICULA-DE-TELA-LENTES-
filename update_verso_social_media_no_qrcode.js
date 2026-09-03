const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(boardFile, 'utf8');

// 1. Remove inputQRCode input group and replace with clean 3-column Social Media inputs
const oldSocialInputsHTML = `<!-- DEMO: CAIXA DE ENTRADA DE REDES SOCIAIS E QR CODE -->
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

const newSocialInputsHTML = `<!-- CAIXA DE ENTRADA DAS REDES SOCIAIS NO VERSO -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(124, 58, 237, 0.04); border-color: rgba(124, 58, 237, 0.25);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-purple);">Redes Sociais no Verso (Rodapé):</span>
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
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

content = content.replace(oldSocialInputsHTML, newSocialInputsHTML);

// 2. Update p4bText prompt template (remove QR Code, change to SIGA NOSSAS REDES)
const oldP4bPrompt = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. No rodapé inferior do verso, exiba um QR Code vetorizado nítido com a instrução 'GARANTIA & SUPORTE: [QRCODE]' acompanhado dos ícones vetorizados oficiais de redes sociais: Instagram ([INSTAGRAM]), Facebook ([FACEBOOK]) e Twitter/X ([TWITTER]). Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

const newP4bPrompt = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. No rodapé inferior do verso, exiba uma faixa limpa com a chamada 'SIGA NOSSAS REDES:' acompanhada dos ícones vetorizados oficiais de redes sociais com os usernames: Instagram ([INSTAGRAM]), Facebook ([FACEBOOK]) e Twitter/X ([TWITTER]). Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no qr code, no qrcode, no barcode, no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

content = content.replace(oldP4bPrompt, newP4bPrompt);

// 3. Remove qrcode variable from updatePrompts() in JS
const oldJSVars = `const qrcode = (document.getElementById('inputQRCode') ? document.getElementById('inputQRCode').value.trim() : 'www.cason.com.br/garantia') || 'www.cason.com.br/garantia';
		const insta = (document.getElementById('inputInstagram') ? document.getElementById('inputInstagram').value.trim() : '@cason.oficial') || '@cason.oficial';`;

const newJSVars = `const insta = (document.getElementById('inputInstagram') ? document.getElementById('inputInstagram').value.trim() : '@cason.oficial') || '@cason.oficial';`;

content = content.replace(oldJSVars, newJSVars);

content = content.replace(`.replace(/\\\[QRCODE\\\]/g, qrcode)\n\t\t\t`, '');

fs.writeFileSync(boardFile, content, 'utf8');
console.log('Successfully removed QR Code and updated to "SIGA NOSSAS REDES:" in apresentacao_board.html!');
