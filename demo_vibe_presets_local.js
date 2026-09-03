const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(boardFile, 'utf8');

// 1. Add CSS for .vibe-btn
const vibeCSS = `
        /* VIBE & PALETTE SELECTOR BUTTONS */
        .vibe-btn {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            color: #334155;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 6px 14px;
            border-radius: 20px;
            cursor: pointer;
            transition: var(--transition);
        }

        .vibe-btn:hover {
            border-color: #0284c7;
            color: #0284c7;
        }

        .vibe-btn.active {
            background: linear-gradient(135deg, #0284c7, #2563eb);
            color: #ffffff;
            border-color: transparent;
            box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
        }`;

if (!content.includes('.vibe-btn')) {
    content = content.replace('</style>', vibeCSS + '\n    </style>');
}

// 2. Insert Vibe Bar right above slide-viewport or inside .var-bar
const varBarTarget = `<div class="var-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 2rem;">`;

const newVarBar = `<div class="var-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 2rem; flex-wrap: wrap;">
        <div class="mode-badge-static">LINHA BOARD (209 × 402 mm)</div>
        <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;" id="vibeContainer">
            <span style="font-size: 0.75rem; font-weight: 700; color: #0284c7; text-transform: uppercase; margin-right: 4px;">Vibe & Paleta:</span>
            <button class="vibe-btn active" onclick="setVibeStyle('default', this)">🎨 Padrão Cliente</button>
            <button class="vibe-btn" onclick="setVibeStyle('luxo', this)">👑 Luxo Ouro</button>
            <button class="vibe-btn" onclick="setVibeStyle('carbon', this)">🏎️ Tech Carbon</button>
            <button class="vibe-btn" onclick="setVibeStyle('clean', this)">⚪ Clean Prata</button>
            <button class="vibe-btn" onclick="setVibeStyle('neon', this)">⚡ Cyberpunk</button>
        </div>`;

content = content.replace(varBarTarget, newVarBar);

// 3. Add JS variables & setVibeStyle function
const jsVibeLogic = `
    let currentVibe = 'default';

    const vibePrompts = {
        default: '',
        luxo: ' [PALETA VISUAL: Fundo preto fosco matte luxuoso com tipografia e logotipos 3D em ouro escovado, iluminação estúdio de alta joalheria com reflexos metálicos nobres]',
        carbon: ' [PALETA VISUAL: Textura gráfica em fibra de carbono grafite escuro matte com linhas e acentos em azul ciano elétrico brilhante, estética tech stealth nível Spigen]',
        clean: ' [PALETA VISUAL: Fundo branco acetinado limpo e estéril com detalhes sutis em prata metálico e cinza titânio, estética minimalista Apple/Belkin]',
        neon: ' [PALETA VISUAL: Fundo escuro com alto contraste em luzes neon magenta e azul ciano vibrantes, estética cyberpunk futurista]'
    };

    function setVibeStyle(vibeKey, btn) {
        currentVibe = vibeKey;
        document.querySelectorAll('.vibe-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        updatePrompts();
    }
`;

if (!content.includes('let currentVibe')) {
    const scriptTagIdx = content.indexOf('<script>');
    if (scriptTagIdx !== -1) {
        content = content.substring(0, scriptTagIdx + 8) + '\n' + jsVibeLogic + '\n' + content.substring(scriptTagIdx + 8);
    }
}

// 4. Update updatePrompts() to append vibePrompts[currentVibe]
const oldPromptAssign = `p.textContent = (map[id] || '')`;
const newPromptAssign = `p.textContent = (map[id] || '') + vibePrompts[currentVibe]`;

content = content.replace(oldPromptAssign, newPromptAssign);

fs.writeFileSync(boardFile, content, 'utf8');
console.log('Successfully added Vibe Presets Bar locally in apresentacao_board.html!');
