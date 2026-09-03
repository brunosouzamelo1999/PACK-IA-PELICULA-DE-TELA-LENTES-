const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';

const readMoreCSS = `
        /* COLLAPSIBLE PROMPT TEXT (5-6 LINES MAX) */
        .prompt-text {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            color: #1e293b;
            line-height: 1.5;
            white-space: pre-wrap;
            background: #ffffff;
            padding: 0.85rem 1rem;
            border-radius: var(--radius-sm);
            border: 1px solid #cbd5e1;
            border-left: 4px solid var(--accent-cyan);
            word-break: break-word;
            max-height: 7.2rem !important; /* ~5 to 6 lines max */
            overflow: hidden;
            transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
        }

        .prompt-text.expanded {
            max-height: 3000px !important;
        }

        .read-more-btn {
            background: none;
            border: none;
            color: #0284c7;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            padding: 4px 0 0 0;
            margin-top: 6px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            outline: none;
            transition: var(--transition);
        }

        .read-more-btn:hover {
            color: #0369a1;
            text-decoration: underline;
        }`;

const toggleReadMoreJS = `
    function toggleReadMore(promptId, btn) {
        const el = document.getElementById(promptId);
        if (!el) return;
        if (el.classList.contains('expanded')) {
            el.classList.remove('expanded');
            btn.innerHTML = 'Ler mais <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>';
        } else {
            el.classList.add('expanded');
            btn.innerHTML = 'Ler menos <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>';
        }
    }
`;

function processFile(filePath, promptIds) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add CSS before </style>
    if (!content.includes('.prompt-text.expanded')) {
        content = content.replace('</style>', readMoreCSS + '\n    </style>');
    }

    // Add JS before script end
    if (!content.includes('function toggleReadMore')) {
        const scriptEndIdx = content.lastIndexOf('</script>');
        if (scriptEndIdx !== -1) {
            content = content.substring(0, scriptEndIdx) + '\n' + toggleReadMoreJS + '\n' + content.substring(scriptEndIdx);
        }
    }

    // Add read-more button after each prompt-text div
    promptIds.forEach(id => {
        const targetDiv = `<div class="prompt-text" id="${id}">`;
        const btnHTML = `\n						<button class="read-more-btn" onclick="toggleReadMore('${id}', this)">Ler mais <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></button>`;
        
        // Find closing </div> of prompt-text if read-more-btn is not already added
        const regex = new RegExp(`(<div class="prompt-text" id="${id}">[\\s\\S]*?<\\/div>)`, 'g');
        content = content.replace(regex, (match) => {
            if (!match.includes(`toggleReadMore('${id}'`)) {
                return match + btnHTML;
            }
            return match;
        });
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated ' + filePath + ' with collapsible 5-6 line prompt text boxes!');
}

processFile(frameFile, ['pn1', 'p1', 'pl1', 'pl2', 'p2c', 'pl3', 'pl4', 'p3c', 'p4', 'p6']);
processFile(boardFile, ['pn1', 'p1', 'pl1', 'pl2', 'p2c', 'pl3', 'pl4', 'p3c', 'p4', 'pn2', 'p4b', 'p6']);
