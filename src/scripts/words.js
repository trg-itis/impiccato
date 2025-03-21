const words = [
    "avventura",
    "bicicletta",
    "cameriere",
    "difficile",
    "elefante",
    "finestra",
    "giornale",
    "hamburger",
    "inverno",
    "lavorare",
    "macchina",
    "navigare",
    "occhiali",
    "pianoforte",
    "quaderno",
    "risolvere",
    "scuolabus",
    "telefono",
    "università",
    "viaggiare",
    "zucchero"
];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}