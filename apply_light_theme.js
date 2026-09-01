const fs = require('fs');

const filePath = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let html = fs.readFileSync(filePath, 'utf8');

const lightCss = `  :root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-card: #ffffff;
  --bg-card-hover: #f1f5f9;
  --accent-cyan: #0284c7;
  --accent-blue: #2563eb;
  --accent-purple: #7c3aed;
  --accent-gold: #d97706;
  --accent-green: #059669;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
  --glass-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  --radius-lg: 20px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  }

  body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-image: 
  radial-gradient(circle at 15% 15%, rgba(37, 99, 235, 0.04) 0%, transparent 40%),
  radial-gradient(circle at 85% 85%, rgba(124, 58, 237, 0.04) 0%, transparent 40%);
  }

  /* HEADER & NAVIGATION */
  header {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  .brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .brand-badge {
  background: rgba(2, 132, 199, 0.08);
  border: 1px solid rgba(2, 132, 199, 0.25);
  color: var(--accent-cyan);
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  -webkit-text-fill-color: var(--accent-cyan);
  }

  .header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  }

  /* DYNAMIC VARIABLE INPUTS BAR (CENTRALIZED PROPORTION SELECTOR) */
  .var-bar {
  background: #ffffff;
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  }

  .var-group {
  display: flex;
  align-items: center;
  gap: 12px;
  }

  .var-group label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-gold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  }

  .mode-badge-static {
  background: rgba(2, 132, 199, 0.08);
  border: 1px solid var(--accent-cyan);
  color: var(--accent-cyan);
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;
  }

  .var-input {
  background: #f8fafc;
  border: 1px solid var(--border-color);
  color: #0f172a;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  outline: none;
  transition: var(--transition);
  min-width: 260px;
  }

  .var-input:focus {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 12px rgba(2, 132, 199, 0.15);
  }

  /* SLIDE CONTAINER */
  .slide-viewport {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  }

  .slide-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  width: 100%;
  box-shadow: var(--glass-shadow);
  display: none;
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .slide-card.active {
  display: block;
  }

  @keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
  }

  .slide-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  }

  .slide-tag {
  color: var(--accent-cyan);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
  }

  .slide-title {
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  }

  .slide-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-top: 0.5rem;
  }

  .slide-number-dropdown {
  background: rgba(2, 132, 199, 0.08);
  border: 1px solid rgba(2, 132, 199, 0.25);
  color: var(--accent-cyan);
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 32px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%230284c7' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  }

  .slide-number-dropdown:hover {
  background-color: rgba(2, 132, 199, 0.15);
  border-color: var(--accent-cyan);
  box-shadow: 0 0 16px rgba(2, 132, 199, 0.2);
  }

  .slide-number-dropdown option {
  background-color: #ffffff;
  color: #0f172a;
  font-weight: 600;
  padding: 10px;
  }

  /* GRID LAYOUT FOR PROMPTS & PREVIEWS */
  .content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  }

  @media (max-width: 1024px) {
  .content-grid {
  grid-template-columns: 1fr;
  }
  }

  /* PROMPT BOX & BUTTONS */
  .prompt-card {
  background: #f8fafc;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  position: relative;
  margin-bottom: 1.5rem;
  transition: var(--transition);
  }

  .prompt-card:hover {
  border-color: var(--accent-cyan);
  box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);
  }

  .prompt-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  }

  .prompt-label {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--accent-cyan);
  display: flex;
  align-items: center;
  gap: 6px;
  }

  .copy-btn {
  background: linear-gradient(135deg, #0284c7, #2563eb);
  color: #ffffff;
  font-weight: 700;
  border: none;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
  }

  .copy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }

  .copy-btn:active {
  transform: translateY(0);
  }

  .prompt-text {
  font-family: 'Consolas', 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #1e293b;
  line-height: 1.6;
  white-space: pre-wrap;
  background: #ffffff;
  padding: 1rem;
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--accent-cyan);
  border: 1px solid #cbd5e1;
  border-left-width: 4px;
  word-break: break-word;
  }

  /* NOTES & OBSERVAÇÕES DRAWER */
  .notes-box {
  background: #fffbe6;
  border: 1px solid #fef08a;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin-top: 1.5rem;
  }

  .notes-header {
  color: #b45309;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
  }

  .notes-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  }

  .notes-list li {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.5;
  position: relative;
  padding-left: 1.25rem;
  }

  .notes-list li::before {
  content: "•";
  color: #d97706;
  font-weight: bold;
  position: absolute;
  left: 0;
  }

  /* FOOTER CONTROL BAR */
  footer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--border-color);
  padding: 1rem 2rem;
  position: sticky;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  .nav-btn-group {
  display: flex;
  gap: 1rem;
  }

  .nav-btn {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #1e293b;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  }

  .nav-btn:hover:not(:disabled) {
  background: #f1f5f9;
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  }

  .nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  }

  .slide-dots {
  display: flex;
  gap: 8px;
  }

  .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: var(--transition);
  }

  .dot.active {
  background: var(--accent-cyan);
  width: 28px;
  border-radius: 10px;
  }

  /* TOAST NOTIFICATION */
  .toast {
  position: fixed;
  bottom: 80px;
  right: 30px;
  background: linear-gradient(135deg, #059669, #0284c7);
  color: #ffffff;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 25px rgba(2, 132, 199, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateY(100px);
  opacity: 0;
  transition: var(--transition);
  z-index: 1000;
  }

  .toast.show {
  transform: translateY(0);
  opacity: 1;
  }

  /* RESPONSIVE DESIGN FOR TABLETS & PHONES */
  @media (max-width: 768px) {
  header {
  padding: 0.75rem 1rem;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  }

  .brand-logo {
  font-size: 1.1rem;
  }

  .var-bar {
  padding: 0.5rem 1rem;
  }

  .var-group {
  width: 100%;
  justify-content: center;
  }

  .slide-viewport {
  padding: 1rem 0.75rem;
  }

  .slide-card {
  padding: 1.25rem;
  border-radius: var(--radius-md);
  }

  .slide-header {
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  }

  .slide-title {
  font-size: 1.4rem;
  }

  .slide-subtitle {
  font-size: 0.85rem;
  }

  .slide-number-dropdown {
  width: 100%;
  font-size: 0.85rem;
  }

  .prompt-card {
  padding: 1rem;
  }

  .prompt-card-header {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  }

  .copy-btn {
  width: 100%;
  justify-content: center;
  padding: 10px 14px;
  }

  .prompt-text {
  font-size: 0.8rem;
  padding: 0.75rem;
  max-height: 250px;
  overflow-y: auto;
  }

  footer {
  padding: 0.75rem 1rem;
  flex-direction: column;
  gap: 10px;
  }

  .nav-btn-group {
  width: 100%;
  justify-content: space-between;
  }

  .nav-btn {
  flex: 1;
  justify-content: center;
  padding: 10px 12px;
  font-size: 0.85rem;
  }

  .slide-dots {
  display: none;
  }

  .toast {
  bottom: 110px;
  right: 15px;
  left: 15px;
  text-align: center;
  justify-content: center;
  font-size: 0.85rem;
  }
  }`;

// Replace <style> block
html = html.replace(/<style>[\s\S]*?<\/style>/, `<style>\n${lightCss}\n  </style>`);

// Also update inline styles for cards & inputs to match light theme
html = html.replace(/background: rgba\(0, 242, 254, 0\.05\); border-color: rgba\(0, 242, 254, 0\.3\);/g, 'background: rgba(2, 132, 199, 0.04); border-color: rgba(2, 132, 199, 0.2);');
html = html.replace(/background: rgba\(10, 13, 20, 0\.6\); border: 1px solid var\(--border-color\);/g, 'background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15,23,42,0.05);');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated apresentacao_board.html to Light Theme!');
