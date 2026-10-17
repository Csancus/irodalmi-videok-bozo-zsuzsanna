/*
 * Irodalmi Videók — fejezet-adatok.
 * Minden videó a projekt Google Drive-mappájából jön („Videók feltöltve"):
 * `driveId` = a fájl-link /file/d/<ID>/ része. A fájl legyen „bárki, akinél a
 * link van" megosztású. Sorrend: nagyjából irodalomtörténeti.
 * Az `author` és a `blurb` elhagyható — üresen nem jelenik meg semmi.
 * Ahol a cím „Videó N", ott a végleges cím még hiányzik (a fájlnév kommentben).
 */
const CHAPTERS = [
  {
    num: 1,
    title: "Antigoné",
    author: "Szophoklész",
    driveId: "1j5Mv_j9WVHWKn-5_oM3xGeqHx1FDygQs", // Antigoné (1).mp4
    blurb: "",
  },
  {
    num: 2,
    title: "Rómeó és Júlia",
    author: "William Shakespeare",
    driveId: "1_twipMYQY6-B-EyYErtTG16F4_CV9M0d", // Rómeó és Júlia.mp4
    blurb: "",
  },
  {
    num: 3,
    title: "Tartuffe",
    author: "Molière",
    driveId: "1yzf5deCL4j3AxE80NCxp5PggCQYrQ1kc", // Digitális történetmesélés (2025. jún. 15., 19_11).mov
    blurb: "",
  },
  {
    num: 4,
    title: "Bánk bán",
    author: "Katona József",
    driveId: "1fC-pRi8G5kRRSdpnLsNtRuO22jtI1SD7", // BankBan.mp4
    blurb: "",
  },
  {
    num: 5,
    title: "Petőfi Sándor látomásköltészete",
    author: "Petőfi Sándor",
    driveId: "1u32HLW32KIoz4f2HVl33BO_IZz_6iS5o", // 0215 (1).mp4
    blurb: "",
  },
  {
    num: 6,
    title: "Csehov novellisztikája",
    author: "Anton Pavlovics Csehov",
    driveId: "14tqztN2seuWHphMBVWPPFaODrchFR_ja", // Csehov novellisztikája 6 perc (1).mp4
    blurb: "",
  },
  {
    num: 7,
    title: "Édes Anna",
    author: "Kosztolányi Dezső",
    driveId: "1T-PmB2mzCA_x0xPWJKMZd934_Wd-XDdT", // Kosztolányi Dezső Édes Anna (2).mp4
    blurb: "",
  },
  {
    num: 8,
    title: "Videó 8",
    author: "",
    driveId: "16kDaty0WKrz7duS90f2K742rJJyxZAOX", // copy_52155045-3F52-41DB-B03B-D624CCFDBB21.MOV
    blurb: "",
  },
  {
    num: 9,
    title: "Videó 9",
    author: "",
    driveId: "1wlILKqrcWRmfY9uNLAjCtxcy1hlIdIzs", // Digitális történetmesélés - kisfilmek - feladat (2026. febr. 28., 20_19) (1).mov
    blurb: "",
  },
  {
    num: 10,
    title: "Videó 10",
    author: "",
    driveId: "1WFUOLFGcWMN91lc05aJfohfrVdZy_coV", // Digitális történetmesélés - kisfilmek - feladatok (16 Mar 2026 at 18_46).mov
    blurb: "",
  },
  {
    num: 11,
    title: "Videó 11",
    author: "",
    driveId: "1djH75MZozfJ9r_CwyLn3tYZ15uy1HQEa", // lv_0_20240610142550.mp4
    blurb: "",
  },
  {
    num: 12,
    title: "Videó 12",
    author: "",
    driveId: "1qvru8Fk7ZGadsF1WSuvhA4tMlanNuduP", // lv_0_20250528132735.mp4
    blurb: "",
  },
  {
    num: 13,
    title: "Videó 13",
    author: "",
    driveId: "1ixrJ-Z9rG_SOoxW1J2lcTTJSowp1MyCO", // lv_0_20260318174527.mp4
    blurb: "",
  },
  {
    num: 14,
    title: "Videó 14",
    author: "",
    driveId: "1adxD3iD2Sek-UCOY5XyloazCJIU26RmK", // Messenger_creation_13E7AAD7-A00A-46DE-A2FE-C91F0648053B (1).mp4
    blurb: "",
  },
  {
    num: 15,
    title: "Videó 15",
    author: "",
    driveId: "16Fx8nyia7Dbn6O1TlRZehncC6nQGFUhR", // YouCut_20230205_160647253.mp4
    blurb: "",
  },
];
