const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';

function replaceTerms(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replacements for Faca Mestre / faca mestre
    content = content.replace(/Faca Mestre/g, 'Faca');
    content = content.replace(/faca mestre/g, 'faca');
    content = content.replace(/FACA MESTRE/g, 'FACA');
    content = content.replace(/Faca mestre/g, 'Faca');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated "Faca Mestre" to "Faca" in ' + filePath);
}

replaceTerms(frameFile);
replaceTerms(boardFile);
