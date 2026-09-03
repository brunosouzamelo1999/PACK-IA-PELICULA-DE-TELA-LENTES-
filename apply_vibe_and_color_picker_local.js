const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(boardFile, 'utf8');

// 1. Add CSS for Vibe Buttons & Color Tone Buttons
const vibeAndToneCSS = `
        /* VIBE & COLOR TONE SELECTOR BUTTONS */
        .vibe-btn, .color-tone-btn {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            color: #334155;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 5px 12px;
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
        }

        .color-tone-btn:hover {
            border-color: var(--tone-color, #7c3aed);
            color: var(--tone-color, #7c3aed);
        }

        .color-tone-btn.active {
            background: var(--tone-color, #7c3aed);
            color: #ffffff;
            border-color: transparent;
            box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }`;

if (!content.includes('.vibe-btn')) {
    content = content.replace('</style>', vibeAndToneCSS + '\n    </style>');
}

// 2. Replace var-bar HTML in apresentacao_board.html
const oldVarBarRegex = /<div class="var-bar">[\s\S]*?<\/div>/;
const newVarBarHTML = `<div class="var-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 2rem; flex-wrap: wrap;">
  <div class="mode-badge-static">LINHA BOARD (209 × 402 mm)</div>
  
  <!-- PART 1: VIBE PRESETS -->
  <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;" id="vibeContainer">
      <span style="font-size: 0.75rem; font-weight: 700; color: #0284c7; text-transform: uppercase; margin-right: 2px;">Vibe:</span>
      <button class="vibe-btn active" onclick="setVibeStyle('default', this)">🎨 Padrão</button>
      <button class="vibe-btn" onclick="setVibeStyle('luxo', this)">👑 Luxo Ouro</button>
      <button class="vibe-btn" onclick="setVibeStyle('carbon', this)">🏎️ Tech Carbon</button>
      <button class="vibe-btn" onclick="setVibeStyle('clean', this)">⚪ Clean Prata</button>
      <button class="vibe-btn" onclick="setVibeStyle('neon', this)">⚡ Cyberpunk</button>
  </div>

  <!-- PART 2: BRUNO'S COLOR TONE SELECTOR -->
  <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;" id="colorToneContainer">
      <span style="font-size: 0.75rem; font-weight: 700; color: #7c3aed; text-transform: uppercase; margin-right: 2px;">Tom de Cor:</span>
      <button class="color-tone-btn active" style="--tone-color: #64748b;" onclick="setColorTone('default', this)">Original</button>
      <button class="color-tone-btn" style="--tone-color: #d97706;" onclick="setColorTone('dourado', this)">🟡 Dourado</button>
      <button class="color-tone-btn" style="--tone-color: #0284c7;" onclick="setColorTone('azul', this)">🔵 Azul</button>
      <button class="color-tone-btn" style="--tone-color: #dc2626;" onclick="setColorTone('vermelho', this)">🔴 Vermelho</button>
      <button class="color-tone-btn" style="--tone-color: #16a34a;" onclick="setColorTone('verde', this)">🟢 Verde</button>
      <button class="color-tone-btn" style="--tone-color: #9333ea;" onclick="setColorTone('roxo', this)">🟣 Roxo</button>
      <button class="color-tone-btn" style="--tone-color: #334155;" onclick="setColorTone('grafite', this)">⚫ Grafite</button>
  </div>
  </div>`;

content = content.replace(oldVarBarRegex, newVarBarHTML);

// 3. Add JS logic for Vibe & Color Tone Selector
const jsVibeAndToneLogic = `
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
    }
`;

if (!content.includes('let currentVibe')) {
    const scriptTagIdx = content.indexOf('<script>');
    if (scriptTagIdx !== -1) {
        content = content.substring(0, scriptTagIdx + 8) + '\n' + jsVibeAndToneLogic + '\n' + content.substring(scriptTagIdx + 8);
    }
}

// 4. Update updatePrompts() to append vibePrompts[currentVibe] + colorTonePrompts[currentColorTone]
const oldPromptAssignRegex = /p\.textContent = \(map\[id\] \|\| ''\)[\s\S]*?;\n\s*\}/;
const newPromptAssignCode = `p.textContent = (map[id] || '') + vibePrompts[currentVibe] + colorTonePrompts[currentColorTone];
					}
				}
			}`;

content = content.replace(oldPromptAssignRegex, newPromptAssignCode);

fs.writeFileSync(boardFile, content, 'utf8');
console.log('Successfully added Vibe Presets and Bruno Color Tone Selector locally in apresentacao_board.html!');
