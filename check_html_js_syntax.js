const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
    console.error('Script tag not found!');
    process.exit(1);
}

try {
    // Check syntax by compiling the script in a sandbox
    new vm.Script(scriptMatch[1]);
    console.log('JavaScript syntax in apresentacao_frame.html is 100% VALID!');
} catch (err) {
    console.error('JS Syntax Error:', err);
    process.exit(1);
}
