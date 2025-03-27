const words = [
    "abaco", "abbaglio", "abbaino", "abbasso", "abbattere", "abbondanza", "abbraccio", "abdicare", "abile", "accadere",
    "bacio", "bagaglio", "bagnato", "balcone", "bambino", "banale", "barca", "baritono", "basilico", "battaglia",
    "calamaro", "campagna", "candela", "capolavoro", "carattere", "cascata", "castello", "cavallo", "celebrare", "cellulare",
    "danza", "debole", "delizioso", "dentista", "deserto", "dialogo", "difficile", "dinamico", "disegno", "divertente",
    "eccellente", "economico", "educato", "effetto", "elegante", "elemento", "energia", "entusiasta", "epoca", "eroe",
    "facile", "famoso", "fantastico", "felicità", "ferrovia", "festival", "figura", "filosofia", "finale", "fiore",
    "generoso", "gigante", "giornale", "giovane", "globo", "grande", "guida", "gusto", "grazia", "genuino",
    "hotel", "hobby", "hacker", "harem", "harakiri", "hidalgo", "hippy", "holding", "horror", "humus",
    "idea", "illuminato", "importante", "inizio", "intelligente", "inverno", "isola", "italiano", "identico", "idolo",
    "lago", "lampada", "libero", "limite", "logico", "luna", "luogo", "luminare", "largo", "leone",
    "magico", "mare", "melodia", "memoria", "meraviglia", "metodo", "moderno", "museo", "musica", "mistero",
    "natura", "necessario", "neve", "nobile", "notizia", "numero", "nascita", "noioso", "normale", "nuvola",
    "obiettivo", "occasione", "oceano", "offerta", "ombra", "opportuno", "orchestra", "orizzonte", "ottimista", "ovunque",
    "palazzo", "paradiso", "passione", "pensiero", "perfetto", "pianeta", "poesia", "positivo", "potente", "prezioso",
    "qualità", "quadro", "quiete", "quintale", "quadro", "quota", "quoziente", "questione", "quotidiano", "quercia",
    "radioso", "ragione", "rapido", "realizzare", "ricchezza", "rispetto", "romantico", "ridente", "rigido", "ruota",
    "saggio", "scienza", "speranza", "spettacolo", "spirito", "splendido", "stimolo", "successo", "sensibile", "sereno",
    "talento", "tenace", "tesoro", "tradizione", "tranquillo", "tattico", "turista", "torrente", "tigre", "tempesta",
    "universo", "utile", "umile", "ufficiale", "ulivo", "umanità", "umorismo", "ubriaco", "ultimo", "uranio",
    "valore", "verde", "vero", "viaggio", "vittoria", "vivace", "volontà", "vortice", "vacanza", "veloce",
    "zelo", "zucchero", "zaino", "zampillo", "zebra", "zenit", "zigzag", "zitto", "zona", "zuppa"
]

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
