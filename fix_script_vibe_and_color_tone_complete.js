const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(boardFile, 'utf8');

const completeScriptHeader = `<script>
    let currentVibe = 'default';
    let currentColorTone = 'default';

    const vibePrompts = {
        default: '',
        luxo: ' [ESTILO: Fundo preto fosco matte luxuoso com tipografia e logotipos 3D em ouro escovado, iluminação estúdio com reflexos metálicos nobres]',
        carbon: ' [ESTILO: Textura gráfica em fibra de carbono grafite escuro matte com linhas e acentos em azul ciano elétrico brilhante, estética tech stealth]',
        clean: ' [ESTILO: Fundo branco acetinado limpo e estéril com detalhes sutis em prata metálico e cinza titânio, estética minimalista Apple/Belkin]',
        neon: ' [ESTILO: Fundo escuro com alto contraste em luzes neon magenta e azul ciano vibrantes, estética cyberpunk futurista]'
    };

    const colorTonePrompts = {
        default: '',
        dourado: ' [TOM DE COR: Predominância de tons dourados cintilantes em ouro nobre com destaques metálicos quentes]',
        azul: ' [TOM DE COR: Predominância de tons azul ciano elétrico e azul royal cristalino de alta definição]',
        vermelho: ' [TOM DE COR: Predominância de tons vermelho carmim e rubi metálico de alto impacto]',
        verde: ' [TOM DE COR: Predominância de tons verde esmeralda e neon metálico tech de alta fidelidade]',
        roxo: ' [TOM DE COR: Predominância de tons roxo ultravioleta e violeta metálico cibernético]',
        grafite: ' [TOM DE COR: Predominância de tons grafite escuro matte, preto stealth e titânio escuro]'
    };

    function setVibeStyle(vibeKey, btn) {
        currentVibe = vibeKey;
        document.querySelectorAll('.vibe-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        updatePrompts();
    }

    function setColorTone(toneKey, btn) {
        currentColorTone = toneKey;
        document.querySelectorAll('.color-tone-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        updatePrompts();
    }`;

const oldScriptHeaderRegex = /<script>[\s\S]*?let currentSlide = 1;/;
content = content.replace(oldScriptHeaderRegex, completeScriptHeader + '\n\n let currentSlide = 1;');

// Ensure updatePrompts() appends both vibePrompts[currentVibe] and colorTonePrompts[currentColorTone]
const updatePromptsRegex = /function updatePrompts\(\)[\s\S]*?\}\s*\}\s*\}/;
const newUpdatePromptsFunc = `function updatePrompts() {
		const subtitulo = (document.getElementById('inputSubtitulo') ? document.getElementById('inputSubtitulo').value.trim() : 'DIAVEN - DIAMOND-CLASS OPTICAL SHIELD') || 'DIAVEN - DIAMOND-CLASS OPTICAL SHIELD';
		const beneficios = (document.getElementById('inputBeneficios') ? document.getElementById('inputBeneficios').value.trim() : '1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO') || '1. ULTRAFINA E RESISTENTE • 2. 5X MAIS RESISTENTE • 3. ALTA DEFINIÇÃO • 4. TOQUE SUAVE • 5. FÁCIL INSTALAÇÃO';
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
		};

		for (const id in map) {
			const p = document.getElementById(id);
			if (p) {
				p.textContent = (map[id] || '')
					.replace(/\\[SUBTITULO\\]/g, subtitulo)
					.replace(/\\[PROPORCAO\\]/g, proporcao)
					.replace(/\\[BENEFICIOS\\]/g, beneficios)
					.replace(/\\[INSTAGRAM\\]/g, insta)
					.replace(/\\[FACEBOOK\\]/g, face)
					.replace(/\\[TWITTER\\]/g, twit) + vibePrompts[currentVibe] + colorTonePrompts[currentColorTone];
			}
		}
	}`;

content = content.replace(updatePromptsRegex, newUpdatePromptsFunc);

fs.writeFileSync(boardFile, content, 'utf8');
console.log('Successfully fixed script header and updatePrompts in apresentacao_board.html!');
