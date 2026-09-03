const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let boardContent = fs.readFileSync(boardFile, 'utf8');

// 1. Add CSS for .header-center-menu if not present
if (!boardContent.includes('.header-center-menu')) {
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
    boardContent = boardContent.replace(cssTarget, cssReplacement);
}

// 2. Replace <header> HTML
const oldBoardHeaderRegex = /<header>[\s\S]*?<\/header>/;
const newBoardHeaderHTML = `<header>
  <div class="brand-logo">
  <span>Packaging AI</span>
  <span class="brand-badge">LINHA BOARD</span>
  </div>
  <div class="header-center-menu">
  <select class="slide-number-dropdown" id="headerSlideDropdown" onchange="goToSlide(parseInt(this.value))">
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

boardContent = boardContent.replace(oldBoardHeaderRegex, newBoardHeaderHTML);

// 3. Remove dropdown from var-bar if present
const varBarDropdownRegex = /<div>\s*<select class="slide-number-dropdown" id="mainHeaderDropdown"[\s\S]*?<\/select>\s*<\/div>/g;
boardContent = boardContent.replace(varBarDropdownRegex, '');

// 4. Update JS goToSlide to synchronize headerSlideDropdown value
if (!boardContent.includes("document.getElementById('headerSlideDropdown')")) {
    const jsOldBoard = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
		document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);`;
    const jsNewBoard = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
		document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);
		const topDropdown = document.getElementById('headerSlideDropdown');
		if (topDropdown) topDropdown.value = currentSlide;`;
    boardContent = boardContent.replace(jsOldBoard, jsNewBoard);
}

fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Successfully updated apresentacao_board.html with centered slide dropdown menu in top header!');
