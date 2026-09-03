const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';

// ----------------------------------------------------
// 1. UPDATE apresentacao_board.html
// ----------------------------------------------------
let boardContent = fs.readFileSync(boardFile, 'utf8');

// Remove vibe CSS
const vibeCSSRegex = /\/\* VIBE & COLOR TONE SELECTOR BUTTONS \*\/[\s\S]*?\.color-tone-btn\.active \{[\s\S]*?\}/g;
boardContent = boardContent.replace(vibeCSSRegex, '');

// Restore clean var-bar in board
const cleanBoardVarBar = `<div class="var-bar">
  <div class="mode-badge-static">LINHA BOARD (209 × 402 mm)</div>
  </div>`;
const varBarRegex = /<div class="var-bar"[\s\S]*?<\/div>\s*<\/div>/;
if (varBarRegex.test(boardContent)) {
    boardContent = boardContent.replace(varBarRegex, cleanBoardVarBar);
}

// Remove JS vibe/color tone variables and functions from board
boardContent = boardContent.replace(/let currentVibe = 'default';[\s\S]*?function setColorTone\(toneKey, btn\) \{[\s\S]*?\}/g, '');

// Update Social Media Inputs HTML in Slide 5 of board (adding Website input)
const oldBoardSocialInputs = `<!-- CAIXA DE ENTRADA DAS REDES SOCIAIS NO VERSO -->
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

const newBoardSocialInputs = `<!-- CAIXA DE ENTRADA DAS REDES SOCIAIS E SITE NO VERSO -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(124, 58, 237, 0.04); border-color: rgba(124, 58, 237, 0.25);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-purple);">Redes Sociais & Site no Verso (Rodapé):</span>
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.75rem;">
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
							<div>
								<label style="font-size: 0.75rem; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">Website / Site Oficial:</label>
								<input type="text" id="inputWebsite" class="var-input" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;" value="www.cason.com.br" oninput="updatePrompts()">
							</div>
						</div>
					</div>`;

if (boardContent.includes('inputInstagram')) {
    boardContent = boardContent.replace(oldBoardSocialInputs, newBoardSocialInputs);
}

// Update db.p4bText in Board
const boardP4bOld = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. No rodapé inferior do verso, exiba uma faixa limpa com a chamada 'SIGA NOSSAS REDES:' acompanhada dos ícones vetorizados oficiais de redes sociais com os usernames: Instagram ([INSTAGRAM]), Facebook ([FACEBOOK]) e Twitter/X ([TWITTER]). Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no qr code, no qrcode, no barcode, no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

const boardP4bNew = `p4bText: \`Layout gráfico em 2D plano para a face traseira (verso) de embalagem retangular de película de tela, proporção [PROPORCAO]. Mantenha 100% da identidade visual, cores, textura de fundo e o logo da marca '[SUBTITULO]' no topo da imagem de referência anexada. Na metade esquerda, exiba APENAS a ilustração de uma película de vidro temperado 100% transparente com borda preta fina flutuando isolada (SEM CELULAR / SEM SMARTPHONE). Na metade direita, exiba uma lista vertical limpa com os ícones técnicos minimalistas em vetor alinhados com seus respectivos textos de benefícios: '[BENEFICIOS]'. No rodapé inferior do verso, exiba uma faixa limpa com a chamada 'SIGA NOSSAS REDES:' acompanhada dos ícones vetorizados oficiais de redes sociais e site com seus endereços: Instagram ([INSTAGRAM]), Facebook ([FACEBOOK]), Twitter/X ([TWITTER]) e Website ([WEBSITE]). Reduza a escala de todos os elementos em 15% a 20%, mantendo margens de segurança limpas e generosas em relação às bordas da cartela. --ar [PROPORCAO] --no qr code, no qrcode, no barcode, no smartphone, no phone, no mobile device, no 3d mockup, no box\`,`;

boardContent = boardContent.replace(boardP4bOld, boardP4bNew);

// Update updatePrompts() in Board JS
const boardJSVarsOld = `const twit = (document.getElementById('inputTwitter') ? document.getElementById('inputTwitter').value.trim() : '@cason_oficial') || '@cason_oficial';`;
const boardJSVarsNew = `const twit = (document.getElementById('inputTwitter') ? document.getElementById('inputTwitter').value.trim() : '@cason_oficial') || '@cason_oficial';
		const web = (document.getElementById('inputWebsite') ? document.getElementById('inputWebsite').value.trim() : 'www.cason.com.br') || 'www.cason.com.br';`;

boardContent = boardContent.replace(boardJSVarsOld, boardJSVarsNew);

const boardJSReplaceOld = `.replace(/\\[TWITTER\\]/g, twit) + vibePrompts[currentVibe] + colorTonePrompts[currentColorTone];`;
const boardJSReplaceNew = `.replace(/\\[TWITTER\\]/g, twit)
					.replace(/\\[WEBSITE\\]/g, web);`;

boardContent = boardContent.replace(boardJSReplaceOld, boardJSReplaceNew);
boardContent = boardContent.replace(`.replace(/\\[TWITTER\\]/g, twit);`, `.replace(/\\[TWITTER\\]/g, twit)\n					.replace(/\\[WEBSITE\\]/g, web);`);

fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Successfully updated apresentacao_board.html with Social Media + Website inputs!');

// ----------------------------------------------------
// 2. UPDATE apresentacao_frame.html
// ----------------------------------------------------
let frameContent = fs.readFileSync(frameFile, 'utf8');

// Check if Frame has Slide 5 (Arte 2D Verso) and add social inputs if needed
const frameSlide5Target = `<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(2, 132, 199, 0.04); border-color: rgba(2, 132, 199, 0.2);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-cyan);">Digite ou Cole os Benefícios para o Verso (Até 5 tópicos):</span>
						</div>
						<input type="text" id="inputBeneficios" class="var-input" style="width: 100%; font-size: 0.9rem; padding: 10px 14px;" value="1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO" oninput="updatePrompts()" placeholder="Ex: 1. ULTRAFINA • 2. ALTA DEFINIÇÃO • 3. TOQUE SUAVE">
					</div>`;

const frameSlide5Replacement = `<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(2, 132, 199, 0.04); border-color: rgba(2, 132, 199, 0.2);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-cyan);">Digite ou Cole os Benefícios para o Verso (Até 5 tópicos):</span>
						</div>
						<input type="text" id="inputBeneficios" class="var-input" style="width: 100%; font-size: 0.9rem; padding: 10px 14px;" value="1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO" oninput="updatePrompts()" placeholder="Ex: 1. ULTRAFINA • 2. ALTA DEFINIÇÃO • 3. TOQUE SUAVE">
					</div>

					<!-- CAIXA DE ENTRADA DAS REDES SOCIAIS E SITE NO VERSO -->
					<div class="prompt-card" style="margin-top: 1.25rem; background: rgba(124, 58, 237, 0.04); border-color: rgba(124, 58, 237, 0.25);">
						<div class="prompt-card-header" style="margin-bottom: 0.5rem;">
							<span class="prompt-label" style="color: var(--accent-purple);">Redes Sociais & Site no Verso (Rodapé):</span>
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.75rem;">
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
							<div>
								<label style="font-size: 0.75rem; font-weight: 700; color: #475569; display: block; margin-bottom: 4px;">Website / Site Oficial:</label>
								<input type="text" id="inputWebsite" class="var-input" style="width: 100%; font-size: 0.85rem; padding: 8px 12px;" value="www.cason.com.br" oninput="updatePrompts()">
							</div>
						</div>
					</div>`;

if (frameContent.includes('inputBeneficios') && !frameContent.includes('inputInstagram')) {
    frameContent = frameContent.replace(frameSlide5Target, frameSlide5Replacement);
}

fs.writeFileSync(frameFile, frameContent, 'utf8');
console.log('Successfully updated apresentacao_frame.html!');
