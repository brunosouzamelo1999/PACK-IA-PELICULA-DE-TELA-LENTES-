const fs = require('fs');

const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';
let content = fs.readFileSync(frameFile, 'utf8');

const newResponsiveCSS = `
    /* RESPONSIVE DESIGN FOR TABLETS & PHONES */
    @media (max-width: 1024px) {
        .content-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
        }

        .slide-viewport {
            padding: 1.25rem 1rem 120px 1rem !important;
        }

        .slide-card {
            padding: 1.75rem 1.25rem !important;
        }
    }

    @media (max-width: 768px) {
        header {
            padding: 0.75rem 1rem !important;
            flex-direction: column !important;
            gap: 10px !important;
            align-items: center !important;
            text-align: center !important;
        }

        .brand-logo {
            font-size: 1.1rem !important;
            justify-content: center !important;
        }

        .header-center-menu {
            width: 100% !important;
        }

        .header-center-menu .slide-number-dropdown {
            width: 100% !important;
            text-align: center !important;
        }

        .header-controls {
            display: none !important;
        }

        .var-bar {
            padding: 0.75rem 1rem !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
        }

        .model-toggle-btn {
            width: 100% !important;
            justify-content: center !important;
        }

        .slide-viewport {
            padding: 1rem 0.5rem 120px 0.5rem !important;
        }

        .slide-card {
            padding: 1.25rem 1rem !important;
            border-radius: var(--radius-md) !important;
        }

        .slide-title {
            font-size: 1.3rem !important;
        }

        .slide-subtitle {
            font-size: 0.85rem !important;
        }

        .prompt-card-header {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
        }

        .copy-btn {
            width: 100% !important;
            justify-content: center !important;
        }

        footer {
            width: 94vw !important;
            max-width: 480px !important;
            padding: 0.5rem 0.85rem !important;
            gap: 0.75rem !important;
            bottom: 12px !important;
            flex-direction: row !important;
            justify-content: space-between !important;
        }

        .nav-btn {
            padding: 8px 12px !important;
            font-size: 0.8rem !important;
        }

        .slide-info-pill {
            display: none !important;
        }

        .slide-dots {
            gap: 6px !important;
        }
    }`;

if (!content.includes('/* RESPONSIVE DESIGN FOR TABLETS & PHONES */')) {
    content = content.replace('</style>', newResponsiveCSS + '\n    </style>');
    fs.writeFileSync(frameFile, content, 'utf8');
    console.log('Successfully added responsive CSS to apresentacao_frame.html!');
} else {
    console.log('Responsive CSS already present in apresentacao_frame.html');
}
