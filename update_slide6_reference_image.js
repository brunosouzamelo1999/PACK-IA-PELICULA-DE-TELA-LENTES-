const fs = require('fs');

const htmlPath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const b64Path = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/estojo_polimero_referencia_nova.png';

let html = fs.readFileSync(htmlPath, 'utf8');

if (fs.existsSync(b64Path)) {
    const b64 = fs.readFileSync(b64Path).toString('base64');
    
    // Find the Slide 6 reference image element
    const imgRegex = /<img src="data:image\/[^;]+;base64,[^"]+" style="max-width: 100%; max-height: 280px;/;
    
    if (imgRegex.test(html)) {
        html = html.replace(imgRegex, `<img src="data:image/png;base64,${b64}" style="max-width: 100%; max-height: 280px;`);
        fs.writeFileSync(htmlPath, html, 'utf8');
        console.log('Successfully updated Slide 6 reference image in apresentacao_board.html!');
    } else {
        console.error('Could not find image regex match in apresentacao_board.html');
    }
} else {
    console.error('New reference image file does not exist');
}
