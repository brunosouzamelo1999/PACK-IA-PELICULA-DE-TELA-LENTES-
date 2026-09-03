const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';

// ----------------------------------------------------
// 1. UPDATE apresentacao_frame.html
// ----------------------------------------------------
let frameContent = fs.readFileSync(frameFile, 'utf8');

// Replace header HTML
const oldFrameHeaderHTML = `<header>
        <div class="brand-logo">
            <span>Packaging AI</span>
            <span class="brand-badge" id="headerBadge">LINHA FRAME PADRÃO (47 × 75 mm)</span>
        </div>
        <div class="header-controls">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
        </div>
    </header>`;

const newFrameHeaderHTML = `<header>
        <div class="brand-logo">
            <span>Packaging AI</span>
            <span class="brand-badge" id="headerBadge">LINHA FRAME PADRÃO (47 × 75 mm)</span>
        </div>
        <div class="header-dropdown-container">
            <select class="slide-number-dropdown" id="mainHeaderDropdown" onchange="goToSlide(parseInt(this.value))">
                <option value="1">Slide 1 de 5 • Arte 2D FRENTE & Naming</option>
                <option value="2">Slide 2 de 5 • Mostruário (Lotes 1 & 2)</option>
                <option value="3">Slide 3 de 5 • Mostruário (Lotes 3 & 4)</option>
                <option value="4">Slide 4 de 5 • Padronização 2D Frente</option>
                <option value="5">Slide 5 de 5 • Arte 2D Verso & Benefícios</option>
            </select>
        </div>
        <div class="header-controls">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
        </div>
    </header>`;

frameContent = frameContent.replace(oldFrameHeaderHTML, newFrameHeaderHTML);

// Remove individual slide-card dropdowns from slide headers
const dropdownRegex = /<select class="slide-number-dropdown" onchange="goToSlide\(parseInt\(this\.value\)\)">[\s\S]*?<\/select>/g;
frameContent = frameContent.replace(dropdownRegex, '');

// Update JS goToSlide() to update mainHeaderDropdown.value
const frameGoToSlideOld = `const currentCard = document.getElementById('slide-' + currentSlide);
        if (currentCard) {
            const dropdown = currentCard.querySelector('.slide-number-dropdown');
            if (dropdown && dropdown.options[dropdown.selectedIndex]) {
                const pill = document.getElementById('slideInfoPill');
                if (pill) pill.textContent = dropdown.options[dropdown.selectedIndex].text;
            }
        }`;

const frameGoToSlideNew = `const mainDropdown = document.getElementById('mainHeaderDropdown');
        if (mainDropdown) {
            mainDropdown.value = currentSlide;
            const pill = document.getElementById('slideInfoPill');
            if (pill && mainDropdown.options[mainDropdown.selectedIndex]) {
                pill.textContent = mainDropdown.options[mainDropdown.selectedIndex].text;
            }
        }`;

frameContent = frameContent.replace(frameGoToSlideOld, frameGoToSlideNew);

fs.writeFileSync(frameFile, frameContent, 'utf8');
console.log('Successfully updated apresentacao_frame.html with centralized top header slide menu!');

// ----------------------------------------------------
// 2. UPDATE apresentacao_board.html
// ----------------------------------------------------
let boardContent = fs.readFileSync(boardFile, 'utf8');

const oldBoardHeaderHTML = `<header>
  <div class="brand-logo">
  <span>Packaging AI</span>
  <span class="brand-badge">LINHA BOARD</span>
  </div>
  <div class="header-controls">
  <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
  </div>
  </header>`;

const newBoardHeaderHTML = `<header>
  <div class="brand-logo">
  <span>Packaging AI</span>
  <span class="brand-badge">LINHA BOARD</span>
  </div>
  <div class="header-dropdown-container">
  <select class="slide-number-dropdown" id="mainHeaderDropdown" onchange="goToSlide(parseInt(this.value))">
  <option value="1">Slide 1 de 6 • Arte 2D FRENTE & Naming</option>
  <option value="2">Slide 2 de 6 • Mostruário (Lotes 1 & 2)</option>
  <option value="3">Slide 3 de 6 • Mostruário (Lotes 3 & 4)</option>
  <option value="4">Slide 4 de 6 • Padronização 2D Frente</option>
  <option value="5">Slide 5 de 6 • Arte 2D Verso & Benefícios</option>
  <option value="6">Slide 6 de 6 • Mockup 3D Estojo Duplo</option>
  </select>
  </div>
  <div class="header-controls">
  <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
  </div>
  </header>`;

boardContent = boardContent.replace(oldBoardHeaderHTML, newBoardHeaderHTML);

// Remove individual slide-card dropdowns from board slide headers
boardContent = boardContent.replace(dropdownRegex, '');

const boardGoToSlideOld = `const currentCard = document.getElementById('slide-' + currentSlide);
		if (currentCard) {
			const dropdown = currentCard.querySelector('.slide-number-dropdown');
			if (dropdown && dropdown.options[dropdown.selectedIndex]) {
				const pill = document.getElementById('slideInfoPill');
				if (pill) pill.textContent = dropdown.options[dropdown.selectedIndex].text;
			}
		}`;

const boardGoToSlideNew = `const mainDropdown = document.getElementById('mainHeaderDropdown');
		if (mainDropdown) {
			mainDropdown.value = currentSlide;
			const pill = document.getElementById('slideInfoPill');
			if (pill && mainDropdown.options[mainDropdown.selectedIndex]) {
				pill.textContent = mainDropdown.options[mainDropdown.selectedIndex].text;
			}
		}`;

boardContent = boardContent.replace(boardGoToSlideOld, boardGoToSlideNew);

fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Successfully updated apresentacao_board.html with centralized top header slide menu!');
