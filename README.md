# Irodalmi Videók

**Élő oldal:** https://csancus.github.io/irodalmi-videok/

Egy weboldal, ami valójában egy könyv: kinyitható borító, tartalomjegyzék, és
minden fejezetre kattintva a lap valódi lapozás-animációval (a gerinc körül,
a bal oldal fölé lendülve) fordul át, hogy megjelenjen a hozzá tartozó videó.
Fejezetről fejezetre is lehet lapozni (nem csak a tartalomjegyzékből), és
minden oldalnak saját, megosztható URL-je van (`#toc`, `#fejezet-1` … `#fejezet-N`)
— egy ilyen linket megnyitva a könyv rögtön ott nyílik meg, animáció nélkül.

A videók a projekt Google Drive-mappájából („Videók feltöltve") vannak beágyazva
(`driveId` a `js/chapters-data.js`-ben; a fájlok „bárki, akinél a link van" megosztásúak).
YouTube-videó is megadható (`youtubeId`).

## Fejlesztés

Build-lépés nincs, tiszta HTML/CSS/JS:

```bash
npx serve .
```

## Fájlok

- `index.html` — az oldal váza (borító + könyv-spread)
- `css/style.css` — a könyv-design és a 3D lapozás-animáció
- `js/chapters-data.js` — a fejezetek adatai (cím, szerző, YouTube ID, leírás)
- `js/book.js` — borító nyitása, tartalomjegyzék renderelés, lapozás-logika

## GitHub Pages

`main` ág, repó gyökér → https://csancus.github.io/irodalmi-videok/
