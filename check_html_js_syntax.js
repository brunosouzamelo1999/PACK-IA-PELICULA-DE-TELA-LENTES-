const fs = require('fs');
const path = require('path');

function checkFile(filename) {
    const filePath = path.join(__dirname, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const scriptMatches = content.match(/<script>([\s\S]*?)<\/script>/gi);
    if (!scriptMatches) {
        console.log(`No <script> tags found in ${filename}`);
        return;
    }
    scriptMatches.forEach((scriptTag, idx) => {
        const jsCode = scriptTag.replace(/^<script>/i, '').replace(/<\/script>$/i, '');
        try {
            new Function(jsCode);
            console.log(`Script #${idx + 1} in ${filename} is VALID!`);
        } catch (e) {
            console.error(`Script #${idx + 1} in ${filename} HAS SYNTAX ERROR:`, e.message);
        }
    });
}

checkFile('apresentacao_frame.html');
checkFile('apresentacao_board.html');
