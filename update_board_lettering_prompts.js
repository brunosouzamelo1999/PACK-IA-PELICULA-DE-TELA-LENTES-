const fs = require('fs');

const file = 'c:/Users/bruno/.gemini/antigravity-ide/scratch/workana_packaging_ai/apresentacao_board.html';
let content = fs.readFileSync(file, 'utf8');

const target1 = `Adaptação multi-estilo Lote 1 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:`;
const replacement1 = `Adaptação multi-estilo Lote 1 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:`;

const target2 = `Adaptação multi-estilo Lote 2 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:`;
const replacement2 = `Adaptação multi-estilo Lote 2 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:`;

const target3 = `Adaptação multi-estilo Lote 3 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:`;
const replacement3 = `Adaptação multi-estilo Lote 3 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:`;

const target4 = `Adaptação multi-estilo Lote 4 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. Posicione o logo da marca e o subtítulo '[SUBTITULO]' centralizados no terço superior. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE WALLPAPER, COR DO CELULAR E PELÍCULA:`;
const replacement4 = `Adaptação multi-estilo Lote 4 em grade 2x2 para Embalagem de Tela Board: Mantenha a proporção [PROPORCAO]. CADA QUADRO DEVE APLICAR UMA TIPOGRAFIA E ESTILO GRAFICO DE LETTERING EXCLUSIVO PARA O LOGO DA MARCA E SUBTÍTULO '[SUBTITULO]' ADAPTADO AO TEMA DO QUADRO. Gere uma grade 2x2 com 4 quadros paralelos onde CADA QUADRO APLICA UM ESTILO ARTÍSTICO E UMA HARMONIZAÇÃO EXCLUSIVA DE LETTERING, WALLPAPER, COR DO CELULAR E PELÍCULA:`;

content = content.replace(target1, replacement1);
content = content.replace(target2, replacement2);
content = content.replace(target3, replacement3);
content = content.replace(target4, replacement4);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated pl1, pl2, pl3, pl4 with explicit exclusive lettering instruction per quadro!');
