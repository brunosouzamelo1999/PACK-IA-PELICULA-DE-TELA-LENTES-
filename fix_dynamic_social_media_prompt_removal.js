const fs = require('fs');
const path = require('path');

const boardPath = path.join(__dirname, 'apresentacao_board.html');
let boardContent = fs.readFileSync(boardPath, 'utf8');

const targetSection = `\t\tconst insta = (document.getElementById('inputInstagram') ? document.getElementById('inputInstagram').value.trim() : '@cason.oficial') || '@cason.oficial';
\t\tconst face = (document.getElementById('inputFacebook') ? document.getElementById('inputFacebook').value.trim() : 'fb.com/cason.oficial') || 'fb.com/cason.oficial';
\t\tconst twit = (document.getElementById('inputTwitter') ? document.getElementById('inputTwitter').value.trim() : '@cason_oficial') || '@cason_oficial';
\t\tconst web = (document.getElementById('inputWebsite') ? document.getElementById('inputWebsite').value.trim() : 'www.cason.com.br') || 'www.cason.com.br';

\t\tconst map = {
\t\t\tp1: db.p1Text,
\t\t\tpl1: db.pl1Text,
\t\t\tpl2: db.pl2Text,
\t\t\tp2c: db.p2cText,
\t\t\tpl3: db.pl3Text,
\t\t\tpl4: db.pl4Text,
\t\t\tp3c: db.p3cText,
\t\t\tp4: db.p4Text,
\t\t\tp4b: db.p4bText,
\t\t\tp6: db.p6Text
\t\t};

\t\tfor (const key in map) {
\t\t\tconst el = document.getElementById(key);
\t\t\tif (el) {
\t\t\t\tlet updatedText = map[key]
\t\t\t\t\t.replace(/\\[SUBTITULO\\]/g, subtitulo)
\t\t\t\t\t.replace(/\\[BENEFICIOS\\]/g, beneficios)
\t\t\t\t\t\t\t.replace(/\\[INSTAGRAM\\]/g, insta)
\t\t\t\t\t.replace(/\\[FACEBOOK\\]/g, face)
\t\t\t\t\t.replace(/\\[TWITTER\\]/g, twit)
\t\t\t\t\t.replace(/\\[PROPORCAO\\]/g, proporcao);
\t\t\t\tel.textContent = updatedText;
\t\t\t}
\t\t}`;

const replacementSection = `\t\tconst instaEl = document.getElementById('inputInstagram');
\t\tconst faceEl = document.getElementById('inputFacebook');
\t\tconst twitEl = document.getElementById('inputTwitter');
\t\tconst webEl = document.getElementById('inputWebsite');

\t\tconst insta = instaEl ? instaEl.value.trim() : '';
\t\tconst face = faceEl ? faceEl.value.trim() : '';
\t\tconst twit = twitEl ? twitEl.value.trim() : '';
\t\tconst web = webEl ? webEl.value.trim() : '';

\t\tlet redesList = [];
\t\tif (insta) redesList.push(\`Instagram (\${insta})\`);
\t\tif (face) redesList.push(\`Facebook (\${face})\`);
\t\tif (twit) redesList.push(\`Twitter/X (\${twit})\`);
\t\tif (web) redesList.push(\`Website (\${web})\`);

\t\tlet rodapeRedes = '';
\t\tif (redesList.length > 0) {
\t\t\tlet listText = '';
\t\t\tif (redesList.length === 1) {
\t\t\t\tlistText = redesList[0];
\t\t\t} else {
\t\t\t\tlistText = redesList.slice(0, -1).join(', ') + ' e ' + redesList[redesList.length - 1];
\t\t\t}
\t\t\trodapeRedes = \`No rodapé inferior do verso, exiba uma faixa limpa com a chamada 'SIGA NOSSAS REDES:' acompanhada dos ícones vetorizados oficiais de redes sociais e site com seus endereços: \${listText}.\`;
\t\t} else {
\t\t\trodapeRedes = \`No rodapé inferior do verso, mantenha uma faixa limpa e generosa sem ícones de redes sociais.\`;
\t\t}

\t\tconst map = {
\t\t\tp1: db.p1Text,
\t\t\tpl1: db.pl1Text,
\t\t\tpl2: db.pl2Text,
\t\t\tp2c: db.p2cText,
\t\t\tpl3: db.pl3Text,
\t\t\tpl4: db.pl4Text,
\t\t\tp3c: db.p3cText,
\t\t\tp4: db.p4Text,
\t\t\tp4b: db.p4bText,
\t\t\tp6: db.p6Text
\t\t};

\t\tfor (const key in map) {
\t\t\tconst el = document.getElementById(key);
\t\t\tif (el) {
\t\t\t\tlet updatedText = map[key]
\t\t\t\t\t.replace(/\\[SUBTITULO\\]/g, subtitulo)
\t\t\t\t\t.replace(/\\[BENEFICIOS\\]/g, beneficios)
\t\t\t\t\t.replace(/\\[RODAPE_REDES\\]/g, rodapeRedes)
\t\t\t\t\t.replace(/\\[PROPORCAO\\]/g, proporcao);
\t\t\t\tel.textContent = updatedText;
\t\t\t}
\t\t}`;

if (boardContent.includes(targetSection)) {
    boardContent = boardContent.replace(targetSection, replacementSection);
    fs.writeFileSync(boardPath, boardContent, 'utf8');
    console.log('Successfully updated apresentacao_board.html');
} else {
    console.warn('Still could not match targetSection in apresentacao_board.html');
}
