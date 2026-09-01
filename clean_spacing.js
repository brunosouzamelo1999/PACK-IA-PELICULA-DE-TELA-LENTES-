const fs = require('fs');

const filePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let html = fs.readFileSync(filePath, 'utf8');

// Strip variation selector-16 and non-breaking spaces or double spaces before text
html = html.replace(/\uFE0F/g, '');
html = html.replace(/<div class="mode-badge-static">\s+/g, '<div class="mode-badge-static">');
html = html.replace(/<div class="slide-tag">\s+/g, '<div class="slide-tag">');
html = html.replace(/<span class="prompt-label" style="([^"]+)">\s*/g, '<span class="prompt-label" style="$1">');
html = html.replace(/<span class="prompt-label">\s*/g, '<span class="prompt-label">');
html = html.replace(/<div class="notes-header">\s*/g, '<div class="notes-header">');
html = html.replace(/<div style="font-size: 0\.85rem; font-weight: 700; color: var\(--accent-cyan\); margin-bottom: 0\.75rem; text-align: left; display: flex; align-items: center; gap: 6px;">\s*/g, '<div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.75rem; text-align: left; display: flex; align-items: center; gap: 6px;">');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully cleaned up label spacing!');
