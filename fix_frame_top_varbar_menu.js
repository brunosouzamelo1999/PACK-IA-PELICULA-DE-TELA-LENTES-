const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';

// ----------------------------------------------------
// 1. UPDATE apresentacao_frame.html
// ----------------------------------------------------
let frameContent = fs.readFileSync(frameFile, 'utf8');

// Restore clean top header in frame.html
const oldFrameHeader = `<header>
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

const cleanFrameHeader = `<header>
        <div class="brand-logo">
            <span>Packaging AI</span>
            <span class="brand-badge" id="headerBadge">LINHA FRAME PADRÃO (47 × 75 mm)</span>
        </div>
        <div class="header-controls">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
        </div>
    </header>`;

frameContent = frameContent.replace(oldFrameHeader, cleanFrameHeader);

// Replace .var-bar in frame.html to include model selector on left and slide dropdown menu on right
const oldVarBarFrame = `<div class="var-bar">
        <div style="font-size: 0.85rem; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px;">
            SELECIONE O MODELO DO FRAME:
        </div>
        <button class="model-toggle-btn active" id="btnStandard" onclick="switchFrameModel('standard')">
            FRAME PADRÃO (47 × 75 mm)
        </button>
        <button class="model-toggle-btn" id="btnUltimate" onclick="switchFrameModel('ultimate')">
            FRAME ULTIMATE (Quadrada 1:1)
        </button>
    </div>`;

const newVarBarFrame = `<div class="var-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 2rem;">
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px;">
                SELECIONE O MODELO DO FRAME:
            </div>
            <button class="model-toggle-btn active" id="btnStandard" onclick="switchFrameModel('standard')">
                FRAME PADRÃO (47 × 75 mm)
            </button>
            <button class="model-toggle-btn" id="btnUltimate" onclick="switchFrameModel('ultimate')">
                FRAME ULTIMATE (Quadrada 1:1)
            </button>
        </div>
        <div>
            <select class="slide-number-dropdown" id="mainHeaderDropdown" onchange="goToSlide(parseInt(this.value))">
                <option value="1">Slide 1 de 5 • Arte 2D FRENTE & Naming</option>
                <option value="2">Slide 2 de 5 • Mostruário (Lotes 1 & 2)</option>
                <option value="3">Slide 3 de 5 • Mostruário (Lotes 3 & 4)</option>
                <option value="4">Slide 4 de 5 • Padronização 2D</option>
                <option value="5">Slide 5 de 5 • Mockup Faca Mestre</option>
            </select>
        </div>
    </div>`;

frameContent = frameContent.replace(oldVarBarFrame, newVarBarFrame);

fs.writeFileSync(frameFile, frameContent, 'utf8');
console.log('Successfully updated apresentacao_frame.html with slide dropdown placed in var-bar on top!');

// ----------------------------------------------------
// 2. UPDATE apresentacao_board.html
// ----------------------------------------------------
let boardContent = fs.readFileSync(boardFile, 'utf8');

const oldBoardHeader = `<header>
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

const cleanBoardHeader = `<header>
  <div class="brand-logo">
  <span>Packaging AI</span>
  <span class="brand-badge">LINHA BOARD</span>
  </div>
  <div class="header-controls">
  <span style="font-size: 0.85rem; color: var(--text-muted);">Teclas: Seta Esquerda ← / Seta Direita →</span>
  </div>
  </header>`;

boardContent = boardContent.replace(oldBoardHeader, cleanBoardHeader);

// In Board var-bar, place the dropdown on the right side of var-bar
const oldBoardVarBar = `<div class="var-bar">
  <div class="mode-badge-static">LINHA BOARD (209 × 402 mm)</div>
  </div>`;

const newBoardVarBar = `<div class="var-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 2rem;">
  <div class="mode-badge-static">LINHA BOARD (209 × 402 mm)</div>
  <div>
    <select class="slide-number-dropdown" id="mainHeaderDropdown" onchange="goToSlide(parseInt(this.value))">
      <option value="1">Slide 1 de 6 • Arte 2D FRENTE & Naming</option>
      <option value="2">Slide 2 de 6 • Mostruário (Lotes 1 & 2)</option>
      <option value="3">Slide 3 de 6 • Mostruário (Lotes 3 & 4)</option>
      <option value="4">Slide 4 de 6 • Padronização 2D Frente</option>
      <option value="5">Slide 5 de 6 • Arte 2D Verso & Benefícios</option>
      <option value="6">Slide 6 de 6 • Mockup 3D Estojo Duplo</option>
    </select>
  </div>
  </div>`;

boardContent = boardContent.replace(oldBoardVarBar, newBoardVarBar);

fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Successfully updated apresentacao_board.html with slide dropdown placed in var-bar on top!');
