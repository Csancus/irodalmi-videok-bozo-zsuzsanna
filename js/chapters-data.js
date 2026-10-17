/*
 * Irodalmi Videók — fejezet-adatok.
 * Minden videó a projekt Google Drive-mappájából jön („Videók feltöltve"):
 * `driveId` = a fájl-link /file/d/<ID>/ része. A fájl legyen „bárki, akinél a
 * link van" megosztású. YouTube-videóhoz `driveId` helyett `youtubeId` kell.
 * Sorrend: nagyjából irodalomtörténeti.
 *
 * Mezők (a `title` és a `driveId` kivételével mind elhagyható):
 *   author    — a szerző neve
 *   facts     — rövid adatok a bal lapra: [["címke", "érték"], …]
 *   intro     — bekezdések a bal lapra: a mű / a szerző bemutatása
 *   questions — „Gondolkodj el!" kérdések a bal lap alján
 *   blurb     — „A videóról": mit mutat a videó (a videó alatt)
 *   credit    — a videó készítői
 * Cím nélkül a fejezet „Videó N" lesz (a fájlnév kommentben áll).
 */

const ANTIGONE = {
  title: "Antigoné",
  author: "Szophoklész",
  facts: [
    ["Műfaj", "tragédia"],
    ["Keletkezés", "Kr. e. 441 körül"],
    ["Mondakör", "thébai (Labdakidák)"],
  ],
  intro: [
    "Oidipusz lánya, Antigoné eltemeti a bátyját, Polüneikészt, pedig Kreón, Théba ura megtiltotta. Kreón szerint Polüneikész hazaáruló volt, Antigoné szerint az istenek törvénye minden halottnak sírt ad.",
    "A darab két igazság ütközése: az állam rendje áll szemben a lelkiismerettel és a családi kötelességgel. Egyik fél sem enged, és ebből lesz a tragédia.",
  ],
  questions: [
    "Kinek van igaza: Antigonénak vagy Kreónnak? Lehet, hogy mindkettőnek?",
    "Miért késik el Kreón, amikor végül visszavonja a parancsát?",
    "Hol találkozol ma hasonló döntéssel?",
  ],
};

const EDES_ANNA = {
  title: "Édes Anna",
  author: "Kosztolányi Dezső",
  facts: [
    ["Műfaj", "regény"],
    ["Megjelent", "1926"],
    ["Helyszín", "Budapest, 1919–1920"],
  ],
  intro: [
    "1919 nyarán, a Tanácsköztársaság bukása után Vizyék új cselédet fogadnak. Édes Anna csendes, szorgalmas, mindent megcsinál, Vizyné mégis inkább tárgyként bánik vele, mint emberrel.",
    "Egy éjjel Anna meggyilkolja a gazdáit. A regény azt keresi, mi vezetett idáig, és nem ad egyetlen, kényelmes magyarázatot.",
  ],
  questions: [
    "Miért öli meg Anna Vizyéket? Elég-e erre egyetlen ok?",
    "Hogyan bánnak vele a regény szereplői, és ki érti meg igazán?",
  ],
};

const CHAPTERS = [
  {
    ...ANTIGONE,
    driveId: "1j5Mv_j9WVHWKn-5_oM3xGeqHx1FDygQs", // Antigoné (1).mp4
    blurb:
      "Árnyjátékszerű animáció a dráma felépítéséről. Elmondja, miért tartják a legtökéletesebb tragédiának, honnan jön a téma (thébai mondakör), majd lépésről lépésre végigmegy a klasszikus drámai szerkezeten: expozíció, bonyodalom, késleltetés, krízis, tetőpont, megoldás.",
  },
  {
    ...ANTIGONE,
    title: "Antigoné — digitális történetmesélés",
    driveId: "1OSgEcRi5cnW3v74mAs9JHXtSJBC5qQp5", // Digitális történetmesélés-Antigóné (Lilla, Réka, Klári).mp4
    credit: "Készítette: Lilla, Réka és Klári",
  },
  {
    title: "Dante",
    author: "Dante Alighieri",
    facts: [
      ["Élt", "1265–1321"],
      ["Korszak", "középkor vége, a reneszánsz előfutára"],
      ["Fő műve", "Isteni színjáték (Pokol, Purgatórium, Paradicsom)"],
    ],
    intro: [
      "Firenzei költő és politikus. Fiatalon beleszeretett Beatricébe, akit alig ismert, és aki korán meghalt. Ez a szerelem egész életművét meghatározta, az Új élet című művében meg is írta.",
      "Fő műve, az Isteni színjáték egy túlvilági utazás: Dante Vergilius vezetésével bejárja a Poklot és a Purgatóriumot, a Paradicsomban pedig már Beatrice kíséri. Olaszul írta, nem latinul, és ezzel megalapozta az olasz irodalmi nyelvet.",
    ],
    questions: [
      "Miért éppen Vergilius és Beatrice vezeti Dantét a túlvilágon?",
      "Mit jelent, hogy a mű „színjáték”, és miért „isteni”?",
    ],
    youtubeId: "E7VbC5R3Shc",
    blurb:
      "Rövid, kétperces kisfilm képekkel. Dante Gabriel Rossetti Beata Beatrix című festményén Beatricét látjuk, egy háromszög alakú ábra pedig az Isteni színjáték túlvilági útjának felépítését idézi.",
    credit: "Feltöltő: Luca Mina (YouTube)",
  },
  {
    title: "Janus Pannonius",
    author: "Janus Pannonius",
    facts: [
      ["Élt", "1434–1472"],
      ["Korszak", "reneszánsz"],
      ["Nyelv", "latin"],
      ["Híres műve", "Pannónia dicsérete"],
    ],
    intro: [
      "Az első jelentős magyarországi költő. Itáliában, Ferrarában és Padovában tanult, és a kor legjobb latin költői közé tartozott. Hazatérve pécsi püspök lett.",
      "A Pannónia dicsérete című epigrammájában büszkén írja, hogy eddig Pannónia földjén nem születtek könyvek, most viszont az ő verseit is olvassák. Egy Mátyás király elleni összeesküvés után menekülni kényszerült, és útközben meghalt.",
    ],
    questions: [
      "Mire büszke a költő a Pannónia dicsérete című versben?",
      "Miért latinul írt egy magyarországi költő a 15. században?",
    ],
    driveId: "16kDaty0WKrz7duS90f2K742rJJyxZAOX", // copy_52155045-3F52-41DB-B03B-D624CCFDBB21.MOV
    blurb:
      "Álló formátumú kisfilm. A reneszánsz hangulatából indul (Botticelli: Vénusz születése), majd bemutatja Janus Pannoniust és a Pannónia dicsérete című epigrammát. Közben régi pécsi képeslapokon és képeken járja be a várost, ahol a költő püspök volt.",
  },
  {
    title: "Rómeó és Júlia",
    author: "William Shakespeare",
    facts: [
      ["Műfaj", "tragédia"],
      ["Keletkezés", "1595 körül"],
      ["Helyszín", "Verona"],
    ],
    intro: [
      "Két ellenséges veronai család, a Montague-k és a Capuletek gyermekei egy bálon egymásba szeretnek, és másnap titokban összeházasodnak.",
      "Egy utcai összecsapásban Rómeó megöli Júlia unokatestvérét, Tybaltot, ezért száműzik. Lőrinc barát terve, hogy a szerelmesek mégis együtt lehessenek, egy el nem jutó levél miatt tragédiába fordul.",
    ],
    questions: [
      "Kinek a hibája a tragédia: a szerelmeseké, a családoké vagy a véletlené?",
      "Mennyi idő alatt játszódik a történet, és mit ad ez a darabhoz?",
    ],
    driveId: "1_twipMYQY6-B-EyYErtTG16F4_CV9M0d", // Rómeó és Júlia.mp4
  },
  {
    title: "Tartuffe",
    author: "Molière",
    facts: [
      ["Műfaj", "vígjáték (jellemkomédia)"],
      ["Bemutató", "1664 (végleges változat: 1669)"],
      ["Korszak", "francia klasszicizmus"],
    ],
    intro: [
      "Orgon, a jómódú párizsi polgár vakon megbízik Tartuffe-ben, aki szent embernek mutatja magát, valójában csaló. Orgon a lányát is hozzáadná, sőt a vagyonát is ráíratja.",
      "A darab a vallásos képmutatást figurázza ki. Emiatt évekig nem játszhatták nyilvánosan, Molière csak átírva, 1669-ben vihette újra színre.",
    ],
    questions: [
      "Miért hisz Orgon Tartuffe-nek, amikor a családja már átlát rajta?",
      "Kit nevettet ki igazán a darab: Tartuffe-öt vagy Orgont?",
    ],
    driveId: "1yzf5deCL4j3AxE80NCxp5PggCQYrQ1kc", // Digitális történetmesélés (2025. jún. 15., 19_11).mov
    blurb:
      "Álló formátumú kisfilm korabeli képekkel: egy régi színházépület, Tartuffe alakja, jelenetek a darabból és Molière portréja. A végén a készítő is bemutatkozik.",
  },
  {
    title: "Bánk bán",
    author: "Katona József",
    facts: [
      ["Műfaj", "történelmi tragédia"],
      ["Megjelent", "1820"],
      ["Ősbemutató", "1833, Kassa"],
    ],
    intro: [
      "A király hadban van, az országot Bánk nádor kormányozza. Közben a királyné, Gertrudis udvarában a merániak élnek vissza a hatalommal, a nép nyomorog, és Gertrudis öccse, Ottó Bánk feleségét, Melindát üldözi.",
      "Bánk egyszerre férj és az ország első embere. Magánsérelme és a nemzet sérelme összefonódik, és végül megöli a királynét. A darabot Katona életében alig vették észre, ma a magyar dráma egyik alapműve.",
    ],
    questions: [
      "Mi számít többet Bánknak: a családja vagy az ország?",
      "Felelős-e Gertrudis azért, ami Melindával történt?",
    ],
    driveId: "1fC-pRi8G5kRRSdpnLsNtRuO22jtI1SD7", // BankBan.mp4
    blurb:
      "Rövid, vetítésszerű összefoglaló korabeli metszetekkel, festményekkel és színházi fotókkal. Szó esik Katona Józsefről, a dráma fő jeleneteiről (Melinda és Gertrudis sorsáról) és a mű színpadi életéről. A végén a Nemzeti Színház régi épülete látható.",
  },
  {
    title: "Petőfi Sándor látomásköltészete",
    author: "Petőfi Sándor",
    facts: [
      ["Élt", "1823–1849"],
      ["Korszak", "romantika"],
      ["Látomásversek", "1846–1847"],
    ],
    intro: [
      "1846 körül Petőfi verseiben nagy, víziószerű képek jelennek meg: világszabadság, forradalom, vér és pusztulás, utána pedig egy igazságosabb jövő.",
      "Ezekben a látomásversekben a költő nem a saját érzéseiről beszél, hanem prófétaként szól a népekhez. Ilyen az Egy gondolat bánt engemet…, Az ítélet és A XIX. század költői.",
    ],
    questions: [
      "Milyen halált kíván magának a költő az Egy gondolat bánt engemet… című versben, és miért?",
      "Mitől lesz egy vers „látomás”?",
    ],
    driveId: "1u32HLW32KIoz4f2HVl33BO_IZz_6iS5o", // 0215 (1).mp4
    blurb:
      "Kollázstechnikával készült animáció forradalmi jelenetekkel, tömeggel, vérfoltokkal, galambokkal és egy homokórával. A videó szerint Petőfi nem csupán lírai költő: a képek az Egy gondolat bánt engemet… sorai mellett a szabadságvágyat és a költő próféta-szerepét mutatják meg.",
  },
  {
    title: "Ágnes asszony",
    author: "Arany János",
    facts: [
      ["Műfaj", "ballada"],
      ["Keletkezés", "1853"],
      ["Szerkezet", "három rész: a patak, a börtön, a törvényszék"],
    ],
    intro: [
      "Ágnes asszony szeretője megölte Ágnes férjét. Az asszony a véres lepedőt a patakban mossa, de a folt nem akar kijönni belőle.",
      "A hajdúk börtönbe viszik, majd a törvényszék elé áll. A bírák látják, hogy megzavarodott, megszánják és hazaengedik. Ágnes évtizedekig mossa a lepedőt a patakban. Arany a bűnt nem a büntetéssel, hanem a lelkiismerettel méri.",
    ],
    questions: [
      "Miért nem jön ki a folt a lepedőből?",
      "Miért enyhébb a törvényszék, mint Ágnes saját lelkiismerete?",
      "Mit jelent a refrén: „Oh! irgalom atyja, ne hagyj el”?",
    ],
    youtubeId: "ILtPTHzsIoA",
    blurb:
      "Diákok által eljátszott, majdnem hétperces kisfilm a ballada alapján. Filmes főcímmel indul, és a ballada fő jeleneteit játssza el, köztük a törvényszéket, ahol a parókás bírák elé áll Ágnes asszony.",
    credit: "Feltöltő: Benedek Borus (YouTube)",
  },
  {
    title: "Csehov novellisztikája",
    author: "Anton Pavlovics Csehov",
    facts: [
      ["Élt", "1860–1904"],
      ["Műfaj", "novella, dráma"],
      ["Ismert művei", "A csinovnyik halála, A 6-os számú kórterem, Sirály, Cseresznyéskert"],
    ],
    intro: [
      "Orvosként dolgozott, és közben írt. Pályája elején álnéven, pénzért küldött rövid humoreszkeket a bulvárlapoknak.",
      "Novelláiban hétköznapi emberek apró, nevetséges vagy szomorú pillanatait mutatja meg, nagy szavak és erkölcsi tanulság nélkül. Gyakran az a fontos, ami nem történik meg.",
    ],
    questions: [
      "Min nevetünk A csinovnyik halálában, és mi benne a szomorú?",
      "Miért nem mondja ki Csehov, mit gondoljunk a szereplőiről?",
    ],
    driveId: "14tqztN2seuWHphMBVWPPFaODrchFR_ja", // Csehov novellisztikája 6 perc (1).mp4
    blurb:
      "Hatperces áttekintés Csehov pályájáról: a bulvárlapokba (Szilánkok, Új Idő) írt humoreszkektől A csinovnyik halála képregényes feldolgozásán és A 6-os számú kórterem egy filmjelenetén át a hit és a tudomány közti kételyekig. A végén Csehov helyét is megmutatja a nagy orosz írók között.",
  },
  {
    ...EDES_ANNA,
    driveId: "1T-PmB2mzCA_x0xPWJKMZd934_Wd-XDdT", // Kosztolányi Dezső Édes Anna (2).mp4
  },
  {
    ...EDES_ANNA,
    title: "Édes Anna — második videó",
    driveId: "14YxIPO3j4SuYM6fGgtQ39kJUu9EoxmIW", // Kosztolányi Dezső Édes Anna (1).mp4
  },
  {
    title: "József Attila",
    author: "József Attila",
    facts: [
      ["Élt", "1905–1937"],
      ["Ismert versei", "Mama, Tiszta szívvel, Óda, Születésnapomra"],
    ],
    intro: [
      "Ferencvárosban nőtt fel, nagyon szegény családban. Apja elhagyta őket, anyja korán meghalt, és ez a veszteség egész költészetén végigvonul.",
      "Verseiben a nincstelenség, a magány és a szeretet utáni vágy mellett pontos, modern képek és sűrű gondolatok jelennek meg. A 20. századi magyar líra egyik legnagyobb alakja.",
    ],
    questions: [
      "Melyik versében érzed a legerősebben a magányt?",
      "Hogyan jelenik meg az anya alakja a verseiben?",
    ],
    driveId: "1ikhBFv2gYkUZ54dfUSCQy33a_eH3NvJZ", // József Attila.digitális_t.mp4
  },
  { driveId: "1kdgly6OxotTXHXjsi4MOm4UCXIXuQCWd" }, // Digitális történetmesélés - kisfilmek - feladat (2024. jan. 21., 10_45).mov
  { driveId: "1wlILKqrcWRmfY9uNLAjCtxcy1hlIdIzs" }, // Digitális történetmesélés - kisfilmek - feladat (2026. febr. 28., 20_19) (1).mov
  { driveId: "1WFUOLFGcWMN91lc05aJfohfrVdZy_coV" }, // Digitális történetmesélés - kisfilmek - feladatok (16 Mar 2026 at 18_46).mov
  { driveId: "1djH75MZozfJ9r_CwyLn3tYZ15uy1HQEa" }, // lv_0_20240610142550.mp4
  { driveId: "1qvru8Fk7ZGadsF1WSuvhA4tMlanNuduP" }, // lv_0_20250528132735.mp4
  { driveId: "1ixrJ-Z9rG_SOoxW1J2lcTTJSowp1MyCO" }, // lv_0_20260318174527.mp4
  { driveId: "1adxD3iD2Sek-UCOY5XyloazCJIU26RmK" }, // Messenger_creation_13E7AAD7-A00A-46DE-A2FE-C91F0648053B (1).mp4
  { driveId: "1jMGYI_D0wfq9HaMubfKM32G4eNfCbHiS" }, // produkcio.mp4
  { driveId: "16Fx8nyia7Dbn6O1TlRZehncC6nQGFUhR" }, // YouCut_20230205_160647253.mp4
].map((c, i) => ({ title: `Videó ${i + 1}`, ...c, num: i + 1 }));
