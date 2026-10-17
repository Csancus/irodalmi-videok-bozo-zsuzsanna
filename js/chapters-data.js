/*
 * Irodalmi Videók — fejezet-adatok.
 * A videók a projekt Google Drive-mappájából jönnek („Videók feltöltve"):
 * `driveId` = a fájl-link /file/d/<ID>/ része. A fájl legyen „bárki, akinél a
 * link van" megosztású. YouTube-videóhoz `driveId` helyett `youtubeId` kell.
 * Sorrend: irodalomtörténeti (a mű / a szerző kora szerint).
 *
 * Mezők (a `driveId` / `youtubeId` kivételével mind elhagyható):
 *   title     — a fejezet címe (nélküle: „Videó N")
 *   author    — a szerző neve
 *   facts     — rövid adatok a bal lapra: [["címke", "érték"], …]
 *   intro     — bekezdések a bal lapra: a mű / a szerző bemutatása
 *   questions — „Gondolkodj el!" kérdések a bal lap alján
 *   blurb     — „A videóról": mit mutat a videó (a videó alatt)
 *   credit    — a videó készítői
 * Ugyanarról a műről szóló videók közös bemutatót kapnak (lent a konstansok).
 */

const ANTIGONE = {
  title: "Antigoné",
  author: "Szophoklész",
  facts: [
    [
      "Műfaj",
      "tragédia"
    ],
    [
      "Keletkezés",
      "Kr. e. 441 körül"
    ],
    [
      "Mondakör",
      "thébai (Labdakidák)"
    ]
  ],
  intro: [
    "Oidipusz lánya, Antigoné eltemeti a bátyját, Polüneikészt, pedig Kreón, Théba ura megtiltotta. Kreón szerint Polüneikész hazaáruló volt, Antigoné szerint az istenek törvénye minden halottnak sírt ad.",
    "A darab két igazság ütközése: az állam rendje áll szemben a lelkiismerettel és a családi kötelességgel. Egyik fél sem enged, és ebből lesz a tragédia."
  ],
  questions: [
    "Kinek van igaza: Antigonénak vagy Kreónnak? Lehet, hogy mindkettőnek?",
    "Miért késik el Kreón, amikor végül visszavonja a parancsát?",
    "Hol találkozol ma hasonló döntéssel?"
  ],
};

const ROMEO = {
  title: "Rómeó és Júlia",
  author: "William Shakespeare",
  facts: [
    [
      "Műfaj",
      "tragédia"
    ],
    [
      "Keletkezés",
      "1595 körül"
    ],
    [
      "Helyszín",
      "Verona"
    ]
  ],
  intro: [
    "Két ellenséges veronai család, a Montague-k és a Capuletek gyermekei egy bálon egymásba szeretnek, és másnap titokban összeházasodnak.",
    "Egy utcai összecsapásban, barátja, Mercutio halála után Rómeó megöli Júlia unokatestvérét, Tybaltot, ezért száműzik. Lőrinc barát terve, hogy a szerelmesek mégis együtt lehessenek, egy el nem jutó levél miatt tragédiába fordul."
  ],
  questions: [
    "Kinek a hibája a tragédia: a szerelmeseké, a családoké vagy a véletlené?",
    "Mennyi idő alatt játszódik a történet, és mit ad ez a darabhoz?"
  ],
};

const BANK = {
  title: "Bánk bán",
  author: "Katona József",
  facts: [
    [
      "Műfaj",
      "történelmi tragédia"
    ],
    [
      "Megjelent",
      "1820"
    ],
    [
      "Ősbemutató",
      "1833, Kassa"
    ]
  ],
  intro: [
    "A király hadban van, az országot Bánk nádor kormányozza. Közben a királyné, Gertrudis udvarában a merániak élnek vissza a hatalommal, a nép nyomorog, és Gertrudis öccse, Ottó, Bánk feleségét, Melindát üldözi.",
    "Bánk egyszerre férj és az ország első embere. Magánsérelme és a nemzet sérelme összefonódik, és egy indulatos összecsapásban leszúrja Gertrudist. Katona életében nem mutatták be, és a kritika sem méltatta; ma a magyar dráma egyik alapműve."
  ],
  questions: [
    "Mi számít többet Bánknak: a családja vagy az ország?",
    "Felelős-e Gertrudis azért, ami Melindával történt?"
  ],
};

const CSONGOR = {
  title: "Csongor és Tünde",
  author: "Vörösmarty Mihály",
  facts: [
    [
      "Műfaj",
      "drámai költemény (mesejáték)"
    ],
    [
      "Keletkezés",
      "1830"
    ],
    [
      "Forrása",
      "Gergei Albert: Árgirus királyfi"
    ]
  ],
  intro: [
    "Csongor a tündér Tündét keresi, akit egyszer már a karjában tartott. Útja során a hármas útnál három vándorral találkozik: a Kalmárral, a Fejedelemmel és a Tudóssal, vagyis a pénz, a hatalom és a tudás útjával.",
    "A gonosz Mirígy boszorkány minden lépését keresztezi, Csongor pedig elbizonytalanodik. A boldogságot végül nem a távoli tündérhonban, hanem a földön találja meg: Tünde lemond a tündérségről, és vele marad."
  ],
  questions: [
    "Mit képvisel a hármas út három vándora, és miért nem lesznek boldogok?",
    "Miért nem a tündérországban, hanem a földön teljesedik be a szerelem?"
  ],
};

const EDES_ANNA = {
  title: "Édes Anna",
  author: "Kosztolányi Dezső",
  facts: [
    [
      "Műfaj",
      "regény"
    ],
    [
      "Megjelent",
      "1926"
    ],
    [
      "Helyszín",
      "Budapest, 1919–1920"
    ]
  ],
  intro: [
    "1919 nyarán, a Tanácsköztársaság bukása után Vizyék új cselédet fogadnak. Édes Anna csendes, szorgalmas, mindent megcsinál, Vizyné mégis inkább tárgyként bánik vele, mint emberrel.",
    "Vizyék unokaöccse, Jancsi elcsábítja, majd cserben hagyja. Egy éjjel, egy vendégség után Anna meggyilkolja a gazdáit. A regény azt keresi, mi vezetett idáig, és nem ad egyetlen, kényelmes magyarázatot."
  ],
  questions: [
    "Miért öli meg Anna Vizyéket? Elég-e erre egyetlen ok?",
    "Hogyan bánnak vele a regény szereplői, és ki érti meg igazán?"
  ],
};

const CHAPTERS = [
  {
    ...ANTIGONE,
    driveId: "1j5Mv_j9WVHWKn-5_oM3xGeqHx1FDygQs",
    blurb: "Árnyjátékszerű animáció a dráma felépítéséről. Elmondja, miért tartják a legtökéletesebb tragédiának, honnan jön a téma (thébai mondakör), majd lépésről lépésre végigmegy a klasszikus drámai szerkezeten: expozíció, bonyodalom, késleltetés, krízis, tetőpont, megoldás.",
  },
  {
    ...ANTIGONE,
    title: "Antigoné — digitális történetmesélés",
    driveId: "1OSgEcRi5cnW3v74mAs9JHXtSJBC5qQp5",
    blurb: "Diákok kisfilmje. Szophoklész szobrával és görög szobrokkal indul, aztán a döntés dilemmáját és a cselekvést mutatja meg, majd festményeken és rajzokon jeleníti meg Antigoné és Kreón történetét, egészen Kreón bűneiig. A végén párhuzamot von Szophoklész Antigonéja és Shakespeare Rómeó és Júliája között.",
    credit: "Készítette: Lilla, Réka és Klári",
    // fájl: Digitális történetmesélés-Antigóné (Lilla, Réka, Klári).mp4
  },
  {
    title: "Dante",
    author: "Dante Alighieri",
    facts: [
      [
        "Élt",
        "1265–1321"
      ],
      [
        "Korszak",
        "középkor vége, a reneszánsz előfutára"
      ],
      [
        "Fő műve",
        "Isteni színjáték (Pokol, Purgatórium, Paradicsom)"
      ]
    ],
    intro: [
      "Firenzei költő és politikus, akit 1302-ben száműztek a városából. Fiatalon beleszeretett Beatricébe, akit alig ismert, és aki korán meghalt. Ez a szerelem egész életművét meghatározta, az Új élet című művében meg is írta.",
      "Fő műve, az Isteni színjáték egy túlvilági utazás: Dante Vergilius vezetésével bejárja a Poklot és a Purgatóriumot, a Purgatórium csúcsától pedig Beatrice vezeti tovább a Paradicsomba. Olaszul írta, nem latinul, és ezzel megalapozta az olasz irodalmi nyelvet."
    ],
    questions: [
      "Miért éppen Vergilius és Beatrice vezeti Dantét a túlvilágon?",
      "Mit jelent, hogy a mű „színjáték”, és miért „isteni”?"
    ],
    youtubeId: "E7VbC5R3Shc",
    blurb: "Rövid, kétperces kisfilm képekkel. Dante Gabriel Rossetti Beata Beatrix című festményén Beatricét látjuk.",
    credit: "Feltöltő: Luca Mina (YouTube)",
  },
  {
    title: "Janus Pannonius",
    author: "Janus Pannonius",
    facts: [
      [
        "Élt",
        "1434–1472"
      ],
      [
        "Korszak",
        "reneszánsz"
      ],
      [
        "Nyelv",
        "latin"
      ],
      [
        "Híres műve",
        "Pannónia dicsérete"
      ]
    ],
    intro: [
      "Az első jelentős magyarországi költő. Itáliában, Ferrarában és Padovában tanult, és a kor legjobb latin költői közé tartozott. Hazatérve pécsi püspök lett.",
      "A Pannónia dicsérete című epigrammájában büszkén írja, hogy eddig csak Itália földjén születtek a könyvek, most viszont Pannónia is ad költőt, és ez az ő érdeme. Részt vett a Vitéz János vezette, Mátyás király elleni összeesküvésben (1471), ezért menekülnie kellett, és útközben, a Zágráb melletti Medvevárban meghalt."
    ],
    questions: [
      "Mire büszke a költő a Pannónia dicsérete című versben?",
      "Miért latinul írt egy magyarországi költő a 15. században?"
    ],
    driveId: "16kDaty0WKrz7duS90f2K742rJJyxZAOX",
    blurb: "Álló formátumú kisfilm. A reneszánsz hangulatából indul (Botticelli: Vénusz születése), majd bemutatja Janus Pannoniust és a Pannónia dicsérete című epigrammát. Közben régi városképek, képeslapok és könyvek képei követik egymást.",
  },
  {
    title: "Balassi Bálint vitézi versei",
    author: "Balassi Bálint",
    facts: [
      [
        "Élt",
        "1554–1594"
      ],
      [
        "Korszak",
        "reneszánsz"
      ],
      [
        "Híres verse",
        "Egy katonaének (In laudem confiniorum)"
      ],
      [
        "Versformája",
        "Balassi-strófa (9 sor, 6-6-7 szótag, aab ccb ddb rím)"
      ]
    ],
    intro: [
      "Főúr, katona és költő, az első nagy magyar nyelvű lírikus. Szerelmes verseket (a Júlia-verseket), istenes és vitézi verseket is írt. Esztergom ostrománál sebesült meg halálosan.",
      "Az Egy katonaénekben a végvári vitézek életét dicséri: a lovat, a fegyvert, a szabad mezőt és a bajtársiasságot. Versszakai a róla elnevezett Balassi-strófában íródtak: három, 6-6-7 szótagos sorhármas, aab ccb ddb rímmel."
    ],
    questions: [
      "Mit tart a legszebbnek Balassi a végvári életben?",
      "Számold meg egy versszak szótagjait! Hogyan épül fel a Balassi-strófa?"
    ],
    driveId: "1qvru8Fk7ZGadsF1WSuvhA4tMlanNuduP",
    blurb: "A reneszánsz festészetétől (Veronese, Michelangelo, Raffaello) és régi városképektől jut el Balassi verseinek régi kiadásáig. Bemutatja a Balassi-strófa felépítését, majd a vitézi versek, az Egy katonaének világát: végvári katonák, lovasok, csaták.",
    // fájl: lv_0_20250528132735.mp4
  },
  {
    ...ROMEO,
    driveId: "1_twipMYQY6-B-EyYErtTG16F4_CV9M0d",
    blurb: "Hangulatos összeállítás festményekkel és színházi képekkel. Angol nyelvű idézetek kísérik, többek között a darabból ismert „What’s in a name?” sor és Benvolio és Rómeó párbeszédének részlete. A végén a kriptajelenet festményei láthatók.",
  },
  {
    ...ROMEO,
    title: "Rómeó és Júlia — Shakespeare és kora",
    driveId: "1kdgly6OxotTXHXjsi4MOm4UCXIXuQCWd",
    blurb: "Shakespeare portréjával és a londoni Globe Színház metszetrajzával indul, majd színházi fotók, festmények és metszetek mutatják a darab jeleneteit, köztük az erkélyjelenetet és a kriptát. A kor is megjelenik: I. Erzsébet királynő portréja és egy reneszánsz Madonna-kép.",
    // fájl: Digitális történetmesélés - kisfilmek - feladat (2024. jan. 21., 10_45).mov
  },
  {
    ...ROMEO,
    title: "Rómeó és Júlia — diákprodukció",
    driveId: "1jMGYI_D0wfq9HaMubfKM32G4eNfCbHiS",
    blurb: "Kollázsszerű, animált összefoglaló. A reneszánsz és Shakespeare bemutatása után a Capuletek és a Montague-k címerével, a bállal, az utcai párbajjal, Rómeó Mantovába száműzésével, a gyűrűvel, a méreggel és a kriptajelenettel meséli el a történetet.",
    credit: "Készítette: Vukálovits Ákos és Ferencz Balázs",
    // fájl: produkcio.mp4
  },
  {
    title: "Tartuffe",
    author: "Molière",
    facts: [
      [
        "Műfaj",
        "vígjáték (jellemkomédia)"
      ],
      [
        "Bemutató",
        "1664, Versailles (szabadon csak 1669-től)"
      ],
      [
        "Korszak",
        "francia klasszicizmus"
      ]
    ],
    intro: [
      "Orgon, a jómódú párizsi polgár vakon megbízik Tartuffe-ben, aki szent embernek mutatja magát, valójában csaló. Orgon a lányát is hozzáadná, sőt a vagyonát is ráíratja.",
      "A darab a vallásos képmutatást figurázza ki. Az 1664-es udvari bemutató után betiltották, és az 1667-es átdolgozást is; a végleges változatot csak 1669-ben játszhatták szabadon."
    ],
    questions: [
      "Miért hisz Orgon Tartuffe-nek, amikor a családja már átlát rajta?",
      "Kit nevettet ki igazán a darab: Tartuffe-öt vagy Orgont?"
    ],
    driveId: "1yzf5deCL4j3AxE80NCxp5PggCQYrQ1kc",
    blurb: "Álló formátumú kisfilm korabeli képekkel: egy régi épület metszete, Tartuffe alakja, jelenetek a darabból és Molière portréja. A végén a készítő is feltűnik.",
  },
  {
    title: "Csokonai Vitéz Mihály: Lilla-dalok",
    author: "Csokonai Vitéz Mihály",
    facts: [
      [
        "Élt",
        "1773–1805"
      ],
      [
        "Korszak",
        "felvilágosodás, rokokó"
      ],
      [
        "Kötet",
        "Lilla. Érzékeny dalok III. könyvben (1805)"
      ]
    ],
    intro: [
      "Debreceni költő, a magyar felvilágosodás legnagyobb lírikusa. 1797-ben Komáromban megismerte Vajda Juliannát, akit verseiben Lillának nevezett.",
      "Rövid boldogság után a lány szülei mást választottak neki férjül. A szerelem és a csalódás verseiből lett a Lilla-ciklus, benne A Reményhez című verssel. Csokonai szegényen, betegen halt meg Debrecenben."
    ],
    questions: [
      "Hogyan változik a versek hangulata a boldog szerelemtől a csalódásig?",
      "Milyen szerepet kap a természet a Lilla-dalokban?"
    ],
    driveId: "1djH75MZozfJ9r_CwyLn3tYZ15uy1HQEa",
    blurb: "Térképpel indul, majd bemutatja Lillát, Vajda Juliannát és a Lilla, érzékeny dalok III. könyvben című kötetet. Képek a szerelemről és a csalódásról, a természetről és a téli tájról. A végén Csokonai portréja és egy emlékmű látható.",
    // fájl: lv_0_20240610142550.mp4
  },
  {
    ...BANK,
    driveId: "1fC-pRi8G5kRRSdpnLsNtRuO22jtI1SD7",
    blurb: "Rövid, vetítésszerű összefoglaló korabeli metszetekkel, festményekkel és színházi fotókkal. Szó esik Katona Józsefről, a dráma fő jeleneteiről (Melinda és Gertrudis sorsáról) és a mű színpadi életéről. A végén egy régi színházépület képe látható.",
  },
  {
    ...BANK,
    title: "Bánk bán — szerkezet és Bánk bűne",
    driveId: "1ixrJ-Z9rG_SOoxW1J2lcTTJSowp1MyCO",
    blurb: "Elemző kisfilm. Katona József portréja és egy régi színházépület után a mű műfajáról (tragédia, dráma) és felépítéséről szól: kétszintű (közéleti és magánéleti) és középpontos dráma. Szereplő-térképen mutatja meg a viszonyokat, végül összeveti, hogyan ítélték meg Bánk bűnét a kritikusok: Gyulai Pál, Arany János, Sőtér István és Barta János.",
    // fájl: lv_0_20260318174527.mp4
  },
  {
    title: "Kölcsey Ferenc: Himnusz",
    author: "Kölcsey Ferenc",
    facts: [
      [
        "Élt",
        "1790–1838"
      ],
      [
        "Keletkezés",
        "1823. január 22., Szatmárcseke"
      ],
      [
        "Alcíme",
        "A magyar nép zivataros századaiból"
      ],
      [
        "Megzenésítette",
        "Erkel Ferenc (1844)"
      ]
    ],
    intro: [
      "Kölcsey a reformkor egyik vezető gondolkodója, költő és politikus. A Himnuszt a szatmárcsekei birtokán írta, egy nehéz, reménytelennek látszó időszakban.",
      "A vers imádság: Istenhez fordul, felidézi a magyar történelem dicső pillanatait és csapásait, és áldást kér a nemzetre. Erkel Ferenc zenéjével lett nemzeti himnuszunk. A magyar kultúra napja (január 22.) a Himnusz kéziratának keltezését őrzi."
    ],
    questions: [
      "Miért imádság formájában szól a vers a nemzet sorsáról?",
      "Milyen történelmi eseményekre utalnak a versszakok?"
    ],
    driveId: "1wlILKqrcWRmfY9uNLAjCtxcy1hlIdIzs",
    blurb: "Kölcsey portréjával indul, majd lúdtoll és tinta idézi meg a vers születését. Egy korabeli országgyűlési jelenet, a lobogó magyar zászló, az Országház és az esti budai vár képei követik egymást. A végén Kölcsey bekeretezett portréja látható.",
    // fájl: Digitális történetmesélés - kisfilmek - feladat (2026. febr. 28., 20_19) (1).mov
  },
  {
    ...CSONGOR,
    title: "Vörösmarty Mihály és a Csongor és Tünde",
    driveId: "1WFUOLFGcWMN91lc05aJfohfrVdZy_coV",
    facts: [
      [
        "Élt",
        "1800–1855"
      ],
      [
        "Műfaj",
        "drámai költemény (mesejáték)"
      ],
      [
        "Keletkezés",
        "1830"
      ]
    ],
    blurb: "Vörösmarty portréival indul, régi fényképek és egy emlékmű képe után pedig a Csongor és Tünde egyik kiadásának borítóját mutatja.",
    // fájl: Digitális történetmesélés - kisfilmek - feladatok (16 Mar 2026 at 18_46).mov
  },
  {
    ...CSONGOR,
    driveId: "1adxD3iD2Sek-UCOY5XyloazCJIU26RmK",
    blurb: "Festményszerű, digitális illusztrációkból álló kisfilm a mű alapján: írótoll, ködös erdő a boszorkánnyal, pitypangot tartó tündér, éjszakai fa a szerelmesekkel, a hármas út, egy idős tudós és a mű kötetének borítója.",
    // fájl: Messenger_creation_13E7AAD7-A00A-46DE-A2FE-C91F0648053B (1).mp4
  },
  {
    title: "Petőfi Sándor látomásköltészete",
    author: "Petőfi Sándor",
    facts: [
      [
        "Élt",
        "1823–1849"
      ],
      [
        "Korszak",
        "romantika"
      ],
      [
        "Látomásversek",
        "1846–1847"
      ]
    ],
    intro: [
      "1846 körül Petőfi verseiben nagy, víziószerű képek jelennek meg: világszabadság, forradalom, vér és pusztulás, utána pedig egy igazságosabb jövő.",
      "Ezekben a látomásversekben a költő nemcsak a saját érzéseiről beszél, hanem prófétaként szól a népekhez. Ilyen az Egy gondolat bánt engemet…, Az ítélet és a Világosságot!"
    ],
    questions: [
      "Milyen halált kíván magának a költő az Egy gondolat bánt engemet… című versben, és miért?",
      "Mitől lesz egy vers „látomás”?"
    ],
    driveId: "1u32HLW32KIoz4f2HVl33BO_IZz_6iS5o",
    blurb: "Kollázstechnikával készült animáció forradalmi jelenetekkel, tömeggel, vérfoltokkal, galambokkal és egy homokórával. A videó szerint Petőfi nem csupán lírai költő: a képek az Egy gondolat bánt engemet… sorai mellett a szabadságvágyat és a költő próféta-szerepét mutatják meg.",
  },
  {
    title: "Ágnes asszony",
    author: "Arany János",
    facts: [
      [
        "Műfaj",
        "ballada"
      ],
      [
        "Keletkezés",
        "1853"
      ],
      [
        "Szerkezet",
        "patak – börtön – törvényszék – újra a patak (keretes)"
      ]
    ],
    intro: [
      "Ágnes asszony szeretője, Ágnes bűnrészességével, megölte a férjét. Az asszony a véres lepedőt a patakban mossa, de a folt nem akar kijönni belőle.",
      "A hajdúk börtönbe viszik, majd a törvényszék elé áll; a szeretőjét felakasztják. A bírák látják, hogy Ágnes megzavarodott, megszánják és hazaengedik. Ágnes évtizedekig mossa a lepedőt a patakban. Arany a bűnt nem a büntetéssel, hanem a lelkiismerettel méri."
    ],
    questions: [
      "Miért nem jön ki a folt a lepedőből?",
      "Miért enyhébb a törvényszék, mint Ágnes saját lelkiismerete?",
      "Mit jelent a refrén: „Oh! irgalom atyja, ne hagyj el”?"
    ],
    youtubeId: "ILtPTHzsIoA",
    blurb: "Diákok által eljátszott, majdnem hétperces kisfilm a ballada alapján. Filmes főcímmel indul, és jeleneteket játszik el a balladából, köztük a törvényszéket, ahol a parókás bírák elé áll Ágnes asszony.",
    credit: "Feltöltő: Benedek Borus (YouTube)",
  },
  {
    title: "Csehov novellisztikája",
    author: "Anton Pavlovics Csehov",
    facts: [
      [
        "Élt",
        "1860–1904"
      ],
      [
        "Műfaj",
        "novella, dráma"
      ],
      [
        "Ismert művei",
        "A csinovnyik halála, A 6-os számú kórterem, Sirály, Cseresznyéskert"
      ]
    ],
    intro: [
      "Orvosként dolgozott, és közben írt. Pályája elején Antosa Csehonte álnéven, pénzért írt rövid humoreszkeket élclapoknak (humoros hetilapoknak).",
      "Novelláiban hétköznapi emberek apró, nevetséges vagy szomorú pillanatait mutatja meg, nagy szavak és erkölcsi tanulság nélkül. Gyakran az a fontos, ami nem történik meg."
    ],
    questions: [
      "Min nevetünk A csinovnyik halálában, és mi benne a szomorú?",
      "Miért nem mondja ki Csehov, mit gondoljunk a szereplőiről?"
    ],
    driveId: "14tqztN2seuWHphMBVWPPFaODrchFR_ja",
    blurb: "Hatperces áttekintés Csehov pályájáról: a korai humoreszkektől (a videó a Szilánkok és az Új Idő című lapokat említi) A csinovnyik halála képregényes feldolgozásán és A 6-os számú kórterem egy filmjelenetén át a hit és a tudomány közti kételyekig. A végén Csehov helyét is megmutatja a nagy orosz írók között.",
  },
  {
    ...EDES_ANNA,
    driveId: "1T-PmB2mzCA_x0xPWJKMZd934_Wd-XDdT",
    blurb: "Rövid összefoglaló a regény borítójával és fekete-fehér filmjelenetekkel: Anna a konyhában, Vizyné, Jancsi úrfi és a gyilkosság előtti feszült pillanatok. A végén Kosztolányi Dezső portréja látható.",
    // fájl: Kosztolányi Dezső Édes Anna (2).mp4 — az (1) ugyanez a videó
  },
  {
    title: "József Attila",
    author: "József Attila",
    facts: [
      [
        "Élt",
        "1905–1937"
      ],
      [
        "Ismert versei",
        "Mama, Tiszta szívvel, Óda, Születésnapomra"
      ]
    ],
    intro: [
      "Ferencvárosban nőtt fel, nagyon szegény családban. Apja elhagyta őket, anyja pedig 1919-ben meghalt, amikor ő 14 éves volt. Ez a veszteség egész költészetén végigvonul.",
      "Verseiben a nincstelenség, a magány és a szeretet utáni vágy mellett pontos, modern képek és sűrű gondolatok jelennek meg. A 20. századi magyar líra egyik legnagyobb alakja."
    ],
    questions: [
      "Melyik versében érzed a legerősebben a magányt?",
      "Hogyan jelenik meg az anya alakja a verseiben?"
    ],
    driveId: "1ikhBFv2gYkUZ54dfUSCQy33a_eH3NvJZ",
    blurb: "Családi fotókkal indul, majd a költő fényképein keresztül halad. Feliratok segítik a megértést: a kései önsors-versek, az anya és az apa alakja, az önértékelés, a téma és a hangulat. A végén az 1937. decemberi halálára utaló kép zárja.",
  },
  {
    title: "Történetmesélés plüssállatokkal",
    facts: [
      [
        "Módszer",
        "digitális történetmesélés"
      ]
    ],
    intro: [
      "A digitális történetmesélés lényege, hogy egy történetet rövid videóban, a saját eszközeinkkel mesélünk el: rajzzal, fotóval, tárgyakkal vagy, mint ebben a kisfilmben, plüssállatokkal.",
      "Az ilyen feldolgozás attól jó, hogy újra kell gondolni a történetet: mi a lényeg, ki a főszereplő, és hogyan lehet néhány perc alatt elmondani."
    ],
    questions: [
      "Melyik mesét vagy irodalmi művet ismered fel a történetben?",
      "Te milyen tárgyakkal mesélnéd el a kedvenc történetedet?"
    ],
    driveId: "16Fx8nyia7Dbn6O1TlRZehncC6nQGFUhR",
    blurb: "Álló formátumú kisfilm, amelyben plüssállatok játsszák el a történetet: a mesélő egy könyvet olvasó maci, a főszerepben sünök, mellettük cicák, egy ló, egy kutya, és egy üvegcse is szerepet kap.",
    // fájl: YouCut_20230205_160647253.mp4
  },
].map((c, i) => ({ title: `Videó ${i + 1}`, ...c, num: i + 1 }));
