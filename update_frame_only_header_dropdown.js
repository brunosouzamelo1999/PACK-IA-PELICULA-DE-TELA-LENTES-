const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';

// ----------------------------------------------------
// 1. UPDATE apresentacao_frame.html ONLY
// ----------------------------------------------------
let frameContent = fs.readFileSync(frameFile, 'utf8');

// Ensure CSS for .header-center-menu exists
if (!frameContent.includes('.header-center-menu')) {
    const cssTarget = '/* HEADER & NAVIGATION */';
    const cssReplacement = `/* HEADER & NAVIGATION */
        .header-center-menu {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header-center-menu .slide-number-dropdown {
            background: #ffffff;
            border: 1px solid var(--accent-cyan);
            color: var(--accent-cyan);
            font-weight: 700;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 0.85rem;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(2, 132, 199, 0.12);
            transition: var(--transition);
        }

        .header-center-menu .slide-number-dropdown:hover {
            background: rgba(2, 132, 199, 0.08);
            box-shadow: 0 0 16px rgba(2, 132, 199, 0.25);
        }`;
    frameContent = frameContent.replace(cssTarget, cssReplacement);
}

// Replace header block in apresentacao_frame.html
const oldFrameHeaderRegex = /<header>[\s\S]*?<\/header>/;
const newFrameHeaderHTML = `<header>
        <div class="brand-logo">
            <span>Packaging AI</span>
            <span class="brand-badge" id="headerLineBadge">LINHA FRAME (47 × 75 mm)</span>
        </div>
        <div class="header-center-menu">
            <select class="slide-number-dropdown" id="headerSlideDropdown" onchange="goToSlide(parseInt(this.value))">
                <option value="1">Slide 1 de 5 • Arte 2D FRENTE & Naming</option>
                <option value="2">Slide 2 de 5 • Mostruário (Lotes 1 & 2)</option>
                <option value="3">Slide 3 de 5 • Mostruário (Lotes 3 & 4)</option>
                <option value="4">Slide 4 de 5 • Padronização 2D</option>
                <option value="5">Slide 5 de 5 • Mockup Faca Mestre</option>
            </select>
        </div>
        <div class="header-controls">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
        </div>
    </header>`;

frameContent = frameContent.replace(oldFrameHeaderRegex, newFrameHeaderHTML);

// Ensure JS updates headerSlideDropdown value
if (!frameContent.includes("document.getElementById('headerSlideDropdown')")) {
    const jsOld = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
        document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);`;
    const jsNew = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
        document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);
        const topDropdown = document.getElementById('headerSlideDropdown');
        if (topDropdown) topDropdown.value = currentSlide;`;
    frameContent = frameContent.replace(jsOld, jsNew);
}

fs.writeFileSync(frameFile, frameContent, 'utf8');
console.log('Successfully updated apresentacao_frame.html ONLY with centered top header slide dropdown menu!');

// ----------------------------------------------------
// 2. REVERT apresentacao_board.html TO CLEAN STANDARD HEADER
// ----------------------------------------------------
let boardContent = fs.readFileSync(boardFile, 'utf8');

const boardHeaderRegex = /<header>[\s\S]*?<\/header>/;
const cleanBoardHeaderHTML = `<header>
  <div class="brand-logo">
  <span>Packaging AI</span>
  <span class="brand-badge">LINHA BOARD</span>
  </div>
  <div class="header-controls">
  <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
  </div>
  </header>`;

boardContent = boardContent.replace(boardHeaderRegex, cleanBoardHeaderHTML);
fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Cleaned apresentacao_board.html header to standard!');
