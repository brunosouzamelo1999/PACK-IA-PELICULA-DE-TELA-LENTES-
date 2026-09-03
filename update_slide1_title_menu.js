const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

// Update Slide 1 Tag and Title
content = content.replace(
    '<div class="slide-tag">PASSO B1 • ARTE 2D & NOME</div>',
    '<div class="slide-tag">PASSO B1 • ARTE 2D FRENTE & NAMING</div>'
);
content = content.replace(
    '<h1 class="slide-title">Arte 2D Saída Única & Gerador de Nome</h1>',
    '<h1 class="slide-title">Arte 2D FRENTE Saída Única & Naming</h1>'
);

// Update dropdown options across all slides
content = content.replace(/Slide 1 de 6 • Arte 2D & Naming/g, 'Slide 1 de 6 • Arte 2D FRENTE & Naming');
content = content.replace(/Slide 1 de 6 • Arte 2D & Nome/g, 'Slide 1 de 6 • Arte 2D FRENTE & Naming');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated Slide 1 title and dropdown options to "Arte 2D FRENTE & Naming"!');
