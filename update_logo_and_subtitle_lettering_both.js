const fs = require('fs');

const boardFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
const frameFile = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_frame.html';

const oldPhrase = `CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO.`;

const newPhrase = `CADA QUADRO DEVE APLICAR UMA HARMONIZAÇÃO TIPOGRÁFICA COMPLETA DE LETTERING, FONTE E ACABAMENTO VISUAL DE FORMA UNIFICADA TANTO PARA O LOGO DA MARCA QUANTO PARA O SUBTÍTULO '[SUBTITULO]' (ex: no estilo cromado, aplique o acabamento 3D cromado unificado no logo E no subtítulo; no estilo vidro/neon, aplique o efeito 3D no logo E no subtítulo). Não deixe o subtítulo em fonte simples genérica descolada do logo.`;

// Update apresentacao_board.html
let boardContent = fs.readFileSync(boardFile, 'utf8');
boardContent = boardContent.replace(new RegExp(oldPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPhrase);
fs.writeFileSync(boardFile, boardContent, 'utf8');
console.log('Successfully updated apresentacao_board.html with unified Logo + Subtitle lettering!');

// Update apresentacao_frame.html
let frameContent = fs.readFileSync(frameFile, 'utf8');
// Frame file might have slightly different or missing lettering phrasing, let's check and update pl1Text, pl2Text, pl3Text, pl4Text in frame.html
const frameOldHeader = `Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA POSIÇÃO EXCLUSIVA DE PROTETORES DE LENTES:`;
const frameNewHeader = `CADA QUADRO DEVE APLICAR UMA HARMONIZAÇÃO TIPOGRÁFICA COMPLETA DE LETTERING, FONTE E ACABAMENTO VISUAL DE FORMA UNIFICADA TANTO PARA O LOGO DA MARCA QUANTO PARA O SUBTÍTULO '[SUBTITULO]' (ex: no estilo cromado/dourado/neon, aplique o efeito no logo E no subtítulo). Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA POSIÇÃO EXCLUSIVA DE PROTETORES DE LENTES:`;

frameContent = frameContent.replace(new RegExp(frameOldHeader.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), frameNewHeader);
fs.writeFileSync(frameFile, frameContent, 'utf8');
console.log('Successfully updated apresentacao_frame.html with unified Logo + Subtitle lettering!');
