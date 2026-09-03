const fs = require('fs');

const files = [
    'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html',
    'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html'
];

files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Make per-quadro lettering explicit for both logo and subtitle
    content = content
        .replace(/lettering 3D dourado/g, 'lettering 3D dourado no logo e no subtítulo')
        .replace(/lettering 3D facetado/g, 'lettering 3D facetado no logo e no subtítulo')
        .replace(/lettering 3D/g, 'lettering 3D no logo e no subtítulo')
        .replace(/lettering cibernético/g, 'lettering cibernético neon no logo e no subtítulo')
        .replace(/lettering espelhado/g, 'lettering espelhado 3D no logo e no subtítulo')
        .replace(/lettering digital/g, 'lettering digital neon no logo e no subtítulo');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath} with explicit per-bullet logo + subtitle 3D lettering!`);
});
