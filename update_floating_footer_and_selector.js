const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';

// ----------------------------------------------------
// 1. UPDATE apresentacao_frame.html
// ----------------------------------------------------
let frameContent = fs.readFileSync(frameFile, 'utf8');

// Update .var-bar CSS to justify-content: flex-start
frameContent = frameContent.replace(
    /justify-content:\s*center;/g,
    'justify-content: flex-start;'
);

// Update footer CSS to floating bottom bar
const oldFooterCSS = `/* FOOTER CONTROL BAR */
        footer {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(16px);
            border-top: 1px solid var(--border-color);
            padding: 1rem 2rem;
            position: sticky;
            bottom: 0;
            z-index: 100;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }`;

const newFooterCSS = `/* FLOATING FOOTER CONTROL BAR */
        footer {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(2, 132, 199, 0.25);
            box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
            padding: 0.6rem 1.5rem;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 40px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex-wrap: nowrap;
        }

        .slide-info-pill {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--accent-cyan);
            background: rgba(2, 132, 199, 0.08);
            border: 1px solid rgba(2, 132, 199, 0.2);
            padding: 4px 14px;
            border-radius: 20px;
            white-space: nowrap;
        }`;

frameContent = frameContent.replace(oldFooterCSS, newFooterCSS);

// Update footer HTML structure
const oldFooterHTML = `<!-- FOOTER CONTROLS -->
    <footer>
        <div class="nav-btn-group">
            <button class="nav-btn" id="prevBtn" onclick="changeSlide(-1)">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                Anterior
            </button>
            <button class="nav-btn" id="nextBtn" onclick="changeSlide(1)">
                Próximo
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
        </div>

        <div class="slide-dots" id="dotsContainer"></div>

        <div style="font-size: 0.85rem; color: var(--text-muted);">
            Pressione <strong>F11</strong> para modo tela cheia na apresentação
        </div>
    </footer>`;

const newFooterHTML = `<!-- FLOATING FOOTER CONTROLS -->
    <footer>
        <div class="nav-btn-group">
            <button class="nav-btn" id="prevBtn" onclick="changeSlide(-1)">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                Anterior
            </button>
            <button class="nav-btn" id="nextBtn" onclick="changeSlide(1)">
                Próximo
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
        </div>

        <div class="slide-dots" id="dotsContainer"></div>

        <div class="slide-info-pill" id="slideInfoPill">Slide 1 de 5 • Arte 2D FRENTE & Naming</div>
    </footer>`;

frameContent = frameContent.replace(oldFooterHTML, newFooterHTML);

// Update JS goToSlide() to update slideInfoPill
const frameGoToSlideOld = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
        document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);
        updatePrompts();`;

const frameGoToSlideNew = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
        document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);

        const currentCard = document.getElementById('slide-' + currentSlide);
        if (currentCard) {
            const dropdown = currentCard.querySelector('.slide-number-dropdown');
            if (dropdown && dropdown.options[dropdown.selectedIndex]) {
                const pill = document.getElementById('slideInfoPill');
                if (pill) pill.textContent = dropdown.options[dropdown.selectedIndex].text;
            }
        }
        updatePrompts();`;

frameContent = frameContent.replace(frameGoToSlideOld, frameGoToSlideNew);

fs.writeFileSync(frameFile, frameContent, 'utf8');
console.log('Successfully updated apresentacao_frame.html with left-aligned selector and floating bottom bar with slide info!');

// ----------------------------------------------------
// 2. UPDATE apresentacao_board.html
// ----------------------------------------------------
let boardContent = fs.readFileSync(boardFile, 'utf8');

boardContent = boardContent.replace(
    /justify-content:\s*center;/g,
    'justify-content: flex-start;'
);

const oldBoardFooterCSS = `/* FOOTER CONTROL BAR */
  footer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--border-color);
  padding: 1rem 2rem;
  position: sticky;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }`;

const newBoardFooterCSS = `/* FLOATING FOOTER CONTROL BAR */
  footer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(2, 132, 199, 0.25);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  padding: 0.6rem 1.5rem;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 40px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: nowrap;
  }

  .slide-info-pill {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-cyan);
  background: rgba(2, 132, 199, 0.08);
  border: 1px solid rgba(2, 132, 199, 0.2);
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
  }`;

boardContent = boardContent.replace(oldBoardFooterCSS, newBoardFooterCSS);

const oldBoardFooterHTML = `<!-- FOOTER CONTROLS -->
	<footer>
		<div class="nav-btn-group">
			<button class="nav-btn" id="prevBtn" onclick="changeSlide(-1)">
				<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
				Anterior
			</button>
			<button class="nav-btn" id="nextBtn" onclick="changeSlide(1)">
				Próximo
				<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
			</button>
		</div>

		<div class="slide-dots" id="dotsContainer"></div>

		<div style="font-size: 0.85rem; color: var(--text-muted);">
			Pressione <strong>F11</strong> para modo tela cheia na apresentação
		</div>
	</footer>`;

const newBoardFooterHTML = `<!-- FLOATING FOOTER CONTROLS -->
	<footer>
		<div class="nav-btn-group">
			<button class="nav-btn" id="prevBtn" onclick="changeSlide(-1)">
				<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
				Anterior
			</button>
			<button class="nav-btn" id="nextBtn" onclick="changeSlide(1)">
				Próximo
				<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
			</button>
		</div>

		<div class="slide-dots" id="dotsContainer"></div>

		<div class="slide-info-pill" id="slideInfoPill">Slide 1 de 6 • Arte 2D FRENTE & Naming</div>
	</footer>`;

boardContent = boardContent.replace(oldBoardFooterHTML, newBoardFooterHTML);

const boardGoToSlideOld = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
		document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);
		updatePrompts();`;

const boardGoToSlideNew = `document.getElementById('prevBtn').disabled = (currentSlide === 1);
		document.getElementById('nextBtn').disabled = (currentSlide === totalSlides);

		const currentCard = document.getElementById('slide-' + currentSlide);
		if (currentCard) {
			const dropdown = currentCard.querySelector('.slide-number-dropdown');
			if (dropdown && dropdown.options[dropdown.selectedIndex]) {
				const pill = document.getElementById('slideInfoPill');
				if (pill) pill.textContent = dropdown.options[dropdown.selectedIndex].text;
			}
		}
		updatePrompts();`;

boardContent = boardContent.replace(boardGoToSlideOld, boardGoToSlideNew);

fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Successfully updated apresentacao_board.html with left-aligned selector and floating bottom bar with slide info!');
