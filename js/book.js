// Irodalmi Videók — a "könyv" interakciói:
// borító nyitása, tartalomjegyzék, valódi lapozás-animáció a fejezetek közt,
// és saját, megosztható URL minden oldalhoz (#toc, #fejezet-1 … #fejezet-N).

const SITE_TITLE = "Irodalmi Videók";
const DEFAULT_TITLE = document.title || SITE_TITLE;
let currentChapterNum = null; // null = a tartalomjegyzék látszik, egyébként 1..N
let pendingFlip = null; // az épp futó lapozás lezáró függvénye (ha van)

// A tartalomjegyzék a könyv "0. oldala", a fejezetek 1..N — ebből jön ki,
// hogy egy lapozás előre vagy visszafelé történik-e.
function pageIndex(num) {
  return num === null ? 0 : num;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ---------------- Tartalom-sablonok ---------------- */

function tocPageHtml() {
  return `
    <h2>Tartalom</h2>
    <ol class="toc-list" id="toc-list" style="grid-template-rows: repeat(${Math.ceil(CHAPTERS.length / 2)}, auto)">
      ${CHAPTERS.map(
        (c) => `
        <li>
          <button class="toc-item" data-chapter="${c.num}">
            <span class="toc-num">${String(c.num).padStart(2, "0")}</span>
            <span class="toc-text">
              <span class="toc-title">${c.title}</span>
              ${c.author ? `<span class="toc-author">${c.author}</span>` : ""}
            </span>
            <span class="toc-dots">▸</span>
          </button>
        </li>`
      ).join("")}
    </ol>
    <button class="page-nav-btn toc-next-btn" id="toc-next-btn">Következő fejezet &rarr;</button>
  `;
}

// Egy fejezet bal lapja: a mű és a szerző bemutatása + gondolkodtató kérdések.
// (Keskeny nézetben, ahol nincs bal lap, ugyanez a videó alá kerül.)
function chapterInfoHtml(chapter, { withHeading = true } = {}) {
  const facts = (chapter.facts || [])
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
    .join("");
  const questions = (chapter.questions || []).map((q) => `<li>${q}</li>`).join("");
  const empty = !chapter.author && !facts && !(chapter.intro || []).length && !questions;
  if (empty && !withHeading) return "";
  return `
    ${withHeading ? `<p class="chapter-kicker">${chapter.num}. fejezet</p><h2>${chapter.title}</h2>` : ""}
    ${chapter.author ? `<p class="chapter-author">${chapter.author}</p>` : ""}
    ${facts ? `<dl class="chapter-facts">${facts}</dl>` : ""}
    ${(chapter.intro || []).map((p) => `<p>${p}</p>`).join("")}
    ${questions ? `<h4 class="chapter-subhead">Gondolkodj el!</h4><ul class="chapter-questions">${questions}</ul>` : ""}
    ${empty ? `<p class="chapter-empty">Ehhez a fejezethez még nem készült bemutató. Nézd meg a videót a jobb oldalon!</p>` : ""}
  `;
}

function leftChapterHtml(chapter) {
  return `${chapterInfoHtml(chapter)}<span class="page-number">— ${chapter.num}. fejezet —</span>`;
}

// A Google Drive beágyazható lejátszója.
function videoSrc(chapter) {
  return `https://drive.google.com/file/d/${chapter.driveId}/preview`;
}

function chapterPageHtml(chapter) {
  const isFirst = chapter.num === 1;
  const isLast = chapter.num === CHAPTERS.length;
  return `
    <h3>${chapter.num}. ${chapter.title}</h3>
    <div class="video-frame-wrap">
      <iframe
        src="${videoSrc(chapter)}"
        title="${chapter.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    ${
      chapter.blurb
        ? `<div class="video-about"><h4 class="chapter-subhead">A videóról</h4><p class="video-blurb">${chapter.blurb}</p>${
            chapter.credit ? `<p class="video-credit">${chapter.credit}</p>` : ""
          }</div>`
        : ""
    }
    ${(() => { const info = chapterInfoHtml(chapter, { withHeading: false }); return info ? `<div class="chapter-info-mobile">${info}</div>` : ""; })()}
    <div class="page-nav-row">
      <button class="page-nav-btn" data-nav="prev">&larr; ${isFirst ? "Tartalomjegyzék" : "Előző fejezet"}</button>
      ${
        isLast
          ? `<button class="page-nav-btn" data-nav="toc">Tartalomjegyzék</button>`
          : `<button class="page-nav-btn" data-nav="next">Következő fejezet &rarr;</button>`
      }
    </div>
  `;
}

/* ---------------- Eseménybekötés egy adott konténerben ---------------- */

function wireToc(container) {
  container.querySelectorAll("[data-chapter]").forEach((btn) => {
    btn.addEventListener("click", () => goToChapter(Number(btn.dataset.chapter)));
  });
  const nextBtn = container.querySelector("#toc-next-btn");
  if (nextBtn) nextBtn.addEventListener("click", () => goToChapter(1));
}

function wireChapter(container, chapter) {
  const prevBtn = container.querySelector('[data-nav="prev"]');
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (chapter.num === 1) goToToc();
      else goToChapter(chapter.num - 1);
    });
  }
  const nextBtn = container.querySelector('[data-nav="next"]');
  if (nextBtn) nextBtn.addEventListener("click", () => goToChapter(chapter.num + 1));
  const tocBtn = container.querySelector('[data-nav="toc"]');
  if (tocBtn) tocBtn.addEventListener("click", goToToc);
}

// A bal lap: a tartalomjegyzéknél az előszó, fejezetnél a fejezet bemutatása.
let prefaceHtml = "";
function renderLeftInto(container, chapter) {
  if (!container) return;
  container.className = chapter ? "page-inner preface chapter-info" : "page-inner preface";
  container.innerHTML = chapter ? leftChapterHtml(chapter) : prefaceHtml;
  container.scrollTop = 0;
}

function renderTocInto(container) {
  container.className = "page-inner toc-page";
  container.innerHTML = tocPageHtml();
  wireToc(container);
}

const VIDEO_MIN_WIDTH = 640;

function fitVideoFrames(root = document) {
  root.querySelectorAll(".video-frame-wrap").forEach((wrap) => {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (!w || !h) return;
    const s = Math.min(1, w / VIDEO_MIN_WIDTH);
    wrap.style.setProperty("--vw", `${w / s}px`);
    wrap.style.setProperty("--vh", `${h / s}px`);
    wrap.style.setProperty("--vs", String(s));
  });
}

function renderChapterInto(container, chapter) {
  container.className = "page-inner video-page";
  container.innerHTML = chapterPageHtml(chapter);
  fitVideoFrames(container);
  wireChapter(container, chapter);
}

/* ---------------- Valódi lapozás-animáció ---------------- */
/* A #flip-page a .book közvetlen gyereke — helyzetét minden lapozás előtt
   a jobb laphoz (#right-base szülője) igazítjuk, hogy pontosan ráilleszkedjen,
   és szabadon átlendülhessen a bal oldal fölé. */

function positionFlipPage() {
  const flipPage = document.getElementById("flip-page");
  const book = document.getElementById("book");
  const rightBox = document.querySelector(".book-page-right");
  if (!flipPage || !book || !rightBox) return;
  const bookRect = book.getBoundingClientRect();
  const rightRect = rightBox.getBoundingClientRect();
  flipPage.style.left = `${rightRect.left - bookRect.left}px`;
  flipPage.style.top = `${rightRect.top - bookRect.top}px`;
  flipPage.style.width = `${rightRect.width}px`;
  flipPage.style.height = `${rightRect.height}px`;
}

// Nyugalmi állapotba állítja a lapozó lapot, villanás nélkül.
// FONTOS: az inline transform-ot a végén törölni kell (removeProperty), különben
// — magasabb specificitása miatt — örökre felülírná a .flip-active* CSS-szabályokat,
// és a lap sosem fordulna el ténylegesen.
function resetFlipPage(flipPage) {
  flipPage.classList.remove("flip-active", "flip-active-back", "flip-prepare-back");
  flipPage.style.transition = "none";
  flipPage.style.transform = "rotateY(0deg)";
  void flipPage.offsetWidth; // reflow, hogy a transition:none tényleg érvényesüljön
  flipPage.style.transition = "";
  flipPage.style.removeProperty("transform");
}

// A lapozás iránya számít: előre a lap a jobb oldalról a bal oldal fölé fordul,
// visszafelé pedig onnan érkezik vissza a jobb oldalra — ahogy egy igazi könyvben.
function animateToNewContent(renderFn, { back = false, renderLeft = null } = {}) {
  // Ha még fut egy korábbi lapozás, azt előbb rendesen lezárjuk. Enélkül a régi
  // transitionend-figyelő életben maradna, és a mostani lapozás végén a MÁR
  // ELAVULT tartalmat írná vissza az alaprétegre — gyors, egymás utáni
  // lapozásnál (pl. Előző, majd rögtön Következő) rossz fejezet maradna a lapon.
  if (pendingFlip) pendingFlip();

  const flipPage = document.getElementById("flip-page");
  const flipFront = document.getElementById("flip-front");
  const base = document.getElementById("right-base");
  const flipBack = document.getElementById("flip-back");
  const leftBase = document.getElementById("left-base");
  const left = renderLeft && leftBase ? renderLeft : null;
  if (!flipPage || !flipFront || !flipBack || !base) {
    if (base) renderFn(base);
    if (left) left(leftBase);
    return;
  }

  // Csökkentett mozgásigény esetén nem lapozunk, csak kicseréljük a tartalmat.
  if (prefersReducedMotion()) {
    renderFn(base);
    if (left) left(leftBase);
    return;
  }

  positionFlipPage();
  // Egy esetleges korábbi, félbeszakadt animáció nyomait eltüntetjük.
  resetFlipPage(flipPage);

  // A bal lap tartalma a lapozó lap HÁTOLDALÁN utazik, mint egy igazi könyvben:
  // előre lapozáskor az új bal lap érkezik rajta (és a végén kerül az alaprétegre),
  // visszafelé a régi bal lap fordul vissza rajta, alatta pedig már az új látszik.
  if (left) {
    if (back) {
      flipBack.className = leftBase.className;
      flipBack.innerHTML = leftBase.innerHTML;
      left(leftBase);
    } else {
      left(flipBack);
    }
  }

  if (back) {
    // VISSZAFELÉ: a lap a bal oldal fölül fordul vissza a jobb oldalra, és az
    // ÚJ tartalmat "hozza magával" — ezért az ÚJ oldal kerül a lap elejére.
    // Az alapréteg egészen a lapozás végéig a RÉGI tartalmat mutatja, hiszen
    // a fordulat első felében a jobb oldal szabadon látszik.
    renderFn(flipFront);
    flipPage.classList.add("flip-prepare-back"); // kiindulás: -180°, a bal oldal fölött
    void flipPage.offsetWidth; // a kiindulási állapot azonnal érvényesüljön...
    flipPage.classList.remove("flip-prepare-back"); // ...és már indulhat is vissza
    flipPage.classList.add("flip-active-back");
  } else {
    // ELŐRE: a RÉGI tartalom pillanatképe kerül a lapozó lap elejére, az
    // alapréteg pedig azonnal az ÚJ tartalomra vált — egyelőre takarásban,
    // hiszen a lapozó lap még fölötte fekszik. A fordulat felénél (amikor a lap
    // "élére áll") tűnik el a régi és bukkan elő alóla az új tartalom.
    flipFront.className = base.className;
    flipFront.innerHTML = base.innerHTML;
    renderFn(base);
    void flipPage.offsetWidth; // a 0°-os kiindulás rögzítése, hogy legyen mihez képest animálni
    flipPage.classList.add("flip-active");
  }

  let done = false;
  let guard = null;

  function finish() {
    if (done) return;
    done = true;
    if (pendingFlip === finish) pendingFlip = null;
    clearTimeout(guard);
    flipPage.removeEventListener("transitionend", onEnd);
    // Visszafelé lapozásnál a lap ilyenkor pontosan fedi az alapréteget,
    // így alatta villanás nélkül cserélhetjük ki a tartalmat.
    if (back) renderFn(base);
    // Előre lapozásnál a lap most pontosan a bal lapot fedi — alatta cserélünk.
    if (left && !back) left(leftBase);
    resetFlipPage(flipPage);
    // Ne maradjon hátra rejtett, még élő videó-iframe a lapozó lapon.
    flipFront.innerHTML = "";
    flipBack.innerHTML = "";
    flipBack.className = "page-inner";
  }

  function onEnd(e) {
    if (e.target !== flipPage || e.propertyName !== "transform") return;
    finish();
  }

  pendingFlip = finish;
  flipPage.addEventListener("transitionend", onEnd);
  // Ha a transitionend bármiért elmaradna, ne ragadjon be a lapozó lap
  // (és visszafelé lapozásnál ne maradjon a régi tartalom az alaprétegen).
  guard = setTimeout(finish, 1400);
}

/* ---------------- Navigáció + URL-ek ---------------- */

function showToc({ animate = true } = {}) {
  const base = document.getElementById("right-base");
  // A tartalomjegyzék a könyv elején van, így mindig visszafelé lapozunk oda.
  const back = pageIndex(currentChapterNum) > 0;
  currentChapterNum = null;
  document.title = DEFAULT_TITLE;
  if (!base) return;
  const renderLeft = (el) => renderLeftInto(el, null);
  if (animate) animateToNewContent((el) => renderTocInto(el), { back, renderLeft });
  else {
    renderTocInto(base);
    renderLeft(document.getElementById("left-base"));
  }
}

function showChapterNum(num, { animate = true } = {}) {
  const chapter = CHAPTERS.find((c) => c.num === num);
  const base = document.getElementById("right-base");
  if (!chapter || !base) return;
  // Visszafelé lapozunk, ha az új oldal előrébb van a könyvben, mint a mostani
  // — így a "Előző fejezet", a balra nyíl és a böngésző Vissza gombja is a
  // helyes irányba fordítja a lapot.
  const back = pageIndex(num) < pageIndex(currentChapterNum);
  currentChapterNum = num;
  document.title = `${chapter.num}. ${chapter.title} — ${SITE_TITLE}`;
  const renderLeft = (el) => renderLeftInto(el, chapter);
  if (animate) animateToNewContent((el) => renderChapterInto(el, chapter), { back, renderLeft });
  else {
    renderChapterInto(base, chapter);
    renderLeft(document.getElementById("left-base"));
  }
}

function goToChapter(num) {
  if (num === currentChapterNum) return;
  const hash = `fejezet-${num}`;
  if (location.hash.slice(1) === hash) {
    showChapterNum(num);
  } else {
    location.hash = hash; // ez kiváltja a hashchange-et, ami ténylegesen navigál
  }
}

function goToToc() {
  if (currentChapterNum === null) return;
  if (location.hash.slice(1) === "toc" || location.hash === "") {
    showToc();
  } else {
    location.hash = "toc";
  }
}

function handleHashChange() {
  const book = document.getElementById("book");
  const hash = location.hash.slice(1);

  // Ha a könyv épp be van csukva (borító látszik), de a hash mégis egy
  // konkrét oldalra mutat (pl. böngésző vissza/előre gomb után), nyissuk
  // meg újra a könyvet — animáció nélkül, mielőtt a tartalmat frissítenénk.
  if (book && !book.classList.contains("visible") && hash) {
    openBookInstant();
  }

  const m = /^fejezet-(\d+)$/.exec(hash);
  if (m) {
    const num = Number(m[1]);
    if (CHAPTERS.some((c) => c.num === num) && num !== currentChapterNum) {
      showChapterNum(num);
    }
  } else if ((hash === "toc" || hash === "") && currentChapterNum !== null) {
    showToc();
  }
}

/* ---------------- Borító nyitás / csukás ---------------- */

function setToolbarVisible(visible) {
  const toolbar = document.getElementById("book-toolbar");
  if (toolbar) toolbar.classList.toggle("visible", visible);
}

/* A borító-animációk (nyitás és csukás egymás tükörképei), mint egy igazi
   könyvnél: a borító a gerincnél forog, a hátoldala papír-előzéklap
   (l. .book-cover::after), ami nyitva a bal lapon fekszik.
   Nyitás:  a csukott könyv a helyéről a jobb lap fölé csúszik, majd a borító
            a gerinc körül átfordul a bal oldalra.
   Csukás:  a bal fél ráfordul a jobb lapra, majd a csukott könyv visszacsúszik. */

const COVER_EASE = "cubic-bezier(0.45, 0, 0.2, 1)";
const COVER_TURN_MS = 800;
const COVER_SLIDE_MS = 480;
let coverAnimating = false;

// A borítót CSS-átmenetek nélkül, azonnal nyugalmi (csukott, középre tett) állapotba teszi.
function resetCoverInstant(cover) {
  cover.style.transition = "none";
  cover.classList.remove("opening", "turning");
  ["left", "top", "right", "bottom", "width", "height", "margin", "transform-origin"].forEach((p) =>
    cover.style.removeProperty(p)
  );
  void cover.offsetWidth;
  cover.style.removeProperty("transition");
}

// A borítót pontosan a jobb lap fölé illeszti (forgáspont: a gerinc = bal éle).
function placeCoverOnRightPage(cover) {
  const stage = document.querySelector(".stage");
  const rightBox = document.querySelector(".book-page-right");
  const s = stage.getBoundingClientRect();
  const r = rightBox.getBoundingClientRect();
  cover.classList.add("turning");
  Object.assign(cover.style, {
    // A CSS-átmenet (pl. a hover-emelés lassú visszaállása) ne torzítsa a
    // méréseket — a mozgást innentől a Web Animations API vezérli.
    transition: "none",
    left: `${r.left - s.left}px`,
    top: `${r.top - s.top}px`,
    right: "auto",
    bottom: "auto",
    width: `${r.width}px`,
    height: `${r.height}px`,
    margin: "0",
    transformOrigin: "left center",
  });
}

// A gerinc körüli fordulat: 0° = a jobb lapon fekszik (csukva), -180° = a bal lapon (nyitva).
function turnCover(cover, fromDeg, toDeg) {
  const mid = (fromDeg + toDeg) / 2;
  return cover.animate(
    [
      { transform: `perspective(3200px) rotateY(${fromDeg}deg)` },
      { transform: `perspective(3200px) rotateY(${mid}deg)`, offset: 0.5 },
      { transform: `perspective(3200px) rotateY(${toDeg}deg)` },
    ],
    { duration: COVER_TURN_MS, easing: COVER_EASE, fill: "forwards" }
  );
}

// FLIP-csúsztatás: a borító a `from` téglalapból a mostani helyére érkezik.
function slideCoverFrom(cover, from) {
  const to = cover.getBoundingClientRect();
  cover.style.transformOrigin = "top left";
  return cover.animate(
    [
      {
        transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`,
      },
      { transform: "none" },
    ],
    { duration: COVER_SLIDE_MS, easing: COVER_EASE }
  );
}

function canAnimateCover(cover) {
  return !prefersReducedMotion() && typeof cover.animate === "function" &&
    document.querySelector(".stage") && document.querySelector(".book-page-right");
}

function openBook() {
  const cover = document.getElementById("cover");
  const book = document.getElementById("book");
  const leftBox = document.querySelector(".book-page-left");
  if (!cover || !book || coverAnimating) return;
  if (!location.hash) location.hash = "toc";

  if (!canAnimateCover(cover)) {
    openBookInstant();
    return;
  }
  coverAnimating = true;

  const home = cover.getBoundingClientRect();
  // A nyitott könyvet már most kirakjuk (kell a jobb lap helye a méréshez),
  // de amíg a csukott könyv odacsúszik, láthatatlan — különben a jobb lap
  // a borító mellett "felvillanna". A bal lap egészen a fordulat végéig
  // rejtett: azt majd a borító előzéklapja "teríti le".
  book.classList.add("visible", "turning");
  book.style.visibility = "hidden";
  if (leftBox) leftBox.style.visibility = "hidden";
  positionFlipPage();
  placeCoverOnRightPage(cover);

  function done() {
    cover.hidden = true;
    resetCoverInstant(cover);
    book.style.removeProperty("visibility");
    if (leftBox) leftBox.style.removeProperty("visibility");
    book.classList.remove("turning"); // az előszó szövege előtűnik
    setToolbarVisible(true);
    positionFlipPage();
    coverAnimating = false;
  }

  slideCoverFrom(cover, home).finished.then(() => {
    // A borító most pontosan a jobb lapot fedi — alatta előbukkanhat a könyv.
    book.style.removeProperty("visibility");
    const turn = turnCover(cover, 0, -180);
    turn.finished.then(() => {
      done();
      turn.cancel();
    }, done);
  }, done);
}

// Animáció nélküli, azonnali megnyitás — mélylinkről érkezéskor, illetve
// böngésző vissza/előre navigációnál használjuk, amikor a könyv már be
// volt csukva.
function openBookInstant() {
  const cover = document.getElementById("cover");
  const book = document.getElementById("book");
  if (cover) cover.hidden = true;
  if (book) book.classList.add("visible");
  setToolbarVisible(true);
  requestAnimationFrame(positionFlipPage);
}


// A "Becsukás" gomb: a bal fél (borító + előzéklap) a gerinc körül ráfordul
// a jobb lapra, majd a csukott könyv visszacsúszik a borító helyére. Utána a
// főoldal URL-jére (hash nélkül) ugrunk — ez a könyv "fedlapja".
function closeBook() {
  const cover = document.getElementById("cover");
  const book = document.getElementById("book");
  const leftBox = document.querySelector(".book-page-left");
  if (!cover || !book || coverAnimating) return;

  if (pendingFlip) pendingFlip();
  setToolbarVisible(false);
  history.pushState(null, "", location.pathname + location.search);
  currentChapterNum = null;
  document.title = DEFAULT_TITLE;

  function done() {
    book.classList.remove("visible", "turning");
    if (leftBox) leftBox.style.removeProperty("visibility");
    resetCoverInstant(cover);
    cover.hidden = false;
    // A Chrome a borítót különben a (kicsinyített) csúszás közbeni rajzolatából
    // mutatná tovább — mobilon kissé elmosódott szöveggel. Egy display-váltás
    // élesre rajzoltatja újra, pixelre ugyanúgy, mint frissen betöltve.
    cover.style.display = "none";
    void cover.offsetWidth;
    cover.style.removeProperty("display");
    // A lapokat visszaállítjuk tartalomjegyzékre + előszóra, hogy legközelebb
    // (akár egy #fejezet-N mélylinkről) friss állapotból induljunk.
    const base = document.getElementById("right-base");
    if (base) renderTocInto(base);
    renderLeftInto(document.getElementById("left-base"), null);
    coverAnimating = false;
  }

  if (!canAnimateCover(cover)) {
    done();
    return;
  }
  coverAnimating = true;

  // 1) Az előszó szövege elhalványul — a bal lap üres előzéklappá válik.
  book.classList.add("turning");

  setTimeout(() => {
    // 2) A borító -180°-on, a papír-hátoldalával pontosan a bal lapot fedi;
    //    innen fordul rá a jobb lapra.
    resetCoverInstant(cover);
    placeCoverOnRightPage(cover);
    cover.hidden = false;
    if (leftBox) leftBox.style.visibility = "hidden";
    const turn = turnCover(cover, -180, 0);

    turn.finished.then(() => {
      // 3) Csukva — a nyitott könyv eltűnik alóla, a borító visszacsúszik a helyére.
      book.classList.remove("visible");
      const from = cover.getBoundingClientRect();
      resetCoverInstant(cover);
      cover.classList.add("turning");
      cover.style.transition = "none";
      turn.cancel();
      slideCoverFrom(cover, from).finished.then(done, done);
    }, done);
  }, 180);
}

/* ---------------- Init ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const base = document.getElementById("right-base");
  const leftBase = document.getElementById("left-base");
  if (leftBase) prefaceHtml = leftBase.innerHTML; // az előszó a HTML-ből jön
  const cover = document.getElementById("cover");
  const book = document.getElementById("book");

  const initialHash = location.hash.slice(1);
  const chapterMatch = /^fejezet-(\d+)$/.exec(initialHash);
  const deepLinkChapter = chapterMatch && CHAPTERS.find((c) => c.num === Number(chapterMatch[1]));

  if (deepLinkChapter) {
    // Mélylink egy konkrét fejezetre: azonnal ott nyitjuk meg a könyvet, animáció nélkül.
    openBookInstant();
    showChapterNum(deepLinkChapter.num, { animate: false });
  } else if (initialHash === "toc") {
    openBookInstant();
    showToc({ animate: false });
  } else {
    // Nincs (érvényes) mélylink — a tartalomjegyzéket előkészítjük az alaprétegben,
    // hogy a borító kinyitásakor már ott legyen, csak a borító takarja.
    if (base) renderTocInto(base);
  }

  if (cover) {
    cover.addEventListener("click", openBook);
    cover.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBook();
      }
    });
  }

  const toolbarTocBtn = document.getElementById("toolbar-toc-btn");
  if (toolbarTocBtn) toolbarTocBtn.addEventListener("click", goToToc);
  const toolbarCloseBtn = document.getElementById("toolbar-close-btn");
  if (toolbarCloseBtn) toolbarCloseBtn.addEventListener("click", closeBook);

  window.addEventListener("hashchange", handleHashChange);
  window.addEventListener("resize", () => {
    positionFlipPage();
    fitVideoFrames();
  });

  // Billentyűzetes lapozás (nyíl balra/jobbra), amíg a könyv nyitva van.
  document.addEventListener("keydown", (e) => {
    if (!book || !book.classList.contains("visible")) return;
    if (e.key === "ArrowRight") {
      goToChapter(currentChapterNum === null ? 1 : Math.min(currentChapterNum + 1, CHAPTERS.length));
    } else if (e.key === "ArrowLeft") {
      if (currentChapterNum === null) return;
      if (currentChapterNum === 1) goToToc();
      else goToChapter(currentChapterNum - 1);
    }
  });
});
