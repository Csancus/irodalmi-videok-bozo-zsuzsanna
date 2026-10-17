/*
 * Irodalmi Videók — fejezet-adatok.
 * A videók a projekt Google Drive-mappájából jönnek („Videók feltöltve").
 * Google Drive-videóhoz `driveId` kell (a fájl-link /file/d/<ID>/ része);
 * ha van, az felülírja a `youtubeId`-t. A fájl legyen „bárki, akinél a link van".
 * Az `author` és a `blurb` elhagyható — üresen nem jelenik meg semmi.
 * Ahol a cím „Videó N", ott a végleges cím még hiányzik (a fájlnév zárójelben).
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
    title: "Petőfi Sándor látomásköltészete",
    author: "Petőfi Sándor",
    driveId: "1u32HLW32KIoz4f2HVl33BO_IZz_6iS5o", // 0215 (1).mp4
    blurb: "",
  },
  {
    num: 3,
    title: "Csehov novellisztikája",
    author: "Anton Pavlovics Csehov",
    driveId: "14tqztN2seuWHphMBVWPPFaODrchFR_ja", // Csehov novellisztikája 6 perc (1).mp4
    blurb: "",
  },
  {
    num: 4,
    title: "Videó 4",
    author: "",
    driveId: "16kDaty0WKrz7duS90f2K742rJJyxZAOX", // copy_52155045-3F52-41DB-B03B-D624CCFDBB21.MOV
    blurb: "",
  },
  {
    num: 5,
    title: "Videó 5",
    author: "",
    driveId: "1wlILKqrcWRmfY9uNLAjCtxcy1hlIdIzs", // Digitális történetmesélés - kisfilmek - feladat (2026. febr. 28., 20_19) (1).mov
    blurb: "",
  },
  {
    num: 6,
    title: "Videó 6",
    author: "",
    driveId: "1WFUOLFGcWMN91lc05aJfohfrVdZy_coV", // Digitális történetmesélés - kisfilmek - feladatok (16 Mar 2026 at 18_46).mov
    blurb: "",
  },
  {
    num: 7,
    title: "Videó 7",
    author: "",
    driveId: "1djH75MZozfJ9r_CwyLn3tYZ15uy1HQEa", // lv_0_20240610142550.mp4
    blurb: "",
  },
  {
    num: 8,
    title: "Videó 8",
    author: "",
    driveId: "1ixrJ-Z9rG_SOoxW1J2lcTTJSowp1MyCO", // lv_0_20260318174527.mp4
    blurb: "",
  },
  {
    num: 9,
    title: "Videó 9",
    author: "",
    driveId: "1adxD3iD2Sek-UCOY5XyloazCJIU26RmK", // Messenger_creation_13E7AAD7-A00A-46DE-A2FE-C91F0648053B (1).mp4
    blurb: "",
  },
];
