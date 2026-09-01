const fs = require('fs');

const filePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let html = fs.readFileSync(filePath, 'utf8');

// Regex for unicode emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]/gu;

// Replace emojis with empty string and clean double spaces
html = html.replace(emojiRegex, '').replace(/  +/g, ' ');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully removed all emojis from apresentacao_board.html');
