const filteredWords = [
  "you", "are", "a", "the",
  "to", "and", "in", "of", "for", "with",
  "on", "at", "by", "or", "is", "as", "from",
  "but", "so", "it", "that", "this", "was", "be",
  "been", "am", "are", "were", "been", "do", "did",
  "does", "done", "will", "would", "shall", "should",
  "can", "could", "may", "might", "must", "ought",
  "need", "dare", "used", "had", "has", "have", "having",
  "left", "right", "up", "down", "over", "under", "between",
  "fight", "hp", "mp", "xp", "level", "attack", "defense",
  "your", "you're", "you", "you've", "you'll", "you'd",
  "should've", "shouldn't", "shouldn't've", "should", "shouldn't",
  "them", "they", "they're", "they've", "they'll", "they'd",
  "without", "within", "through", "throughout", "towards", "toward",
  "room", "enough", "look", "looked", "looking", "looker", "lookers",
  "strange", "strong", "stronger", "strongest", "weak", "weaker", "weakest",
  "power", "powerful", "powerfully", "powerless", "powerlessness", "powerlessnesses",
  "pretty", "prettier", "prettiest", "ugly", "uglier", "ugliest", "beautiful", "beautifully",
  "go", "take",
    "tu", "es", "un", "une",
    "à", "et", "dans", "de", "pour", "avec",
    "sur", "à", "par", "ou", "est", "comme", "depuis",
    "mais", "donc", "il", "ce", "cette", "était", "être",
    "été", "suis", "es", "était", "été", "faire", "faisais",
    "fait", "fait", "ferai", "ferais", "dois", "devrais",
    "peux", "pourrais", "peut", "pourrait", "doit", "devrait",
    "besoin", "oser", "utilisé", "avais", "a", "avoir", "ayant",
    "gauche", "droite", "haut", "bas", "au-dessus", "sous", "entre",
    "combat", "points de vie", "points de magie", "points d'expérience", "niveau", "attaque", "défense",
    "ton", "tu es", "tu", "tu as", "tu vas", "tu aurais",
    "tu ne devrais pas", "tu ne devrais pas avoir", "devrais", "ne devrais pas",
    "eux", "ils", "ils sont", "ils ont", "ils vont", "ils auraient",
    "sans", "à l'intérieur", "à travers", "partout", "vers", "en direction de",
    "salle", "assez", "regarder", "regardé", "regardant", "observateur", "observateurs",
    "étrange", "fort", "plus fort", "le plus fort", "faible", "plus faible", "le plus faible",
    "puissance", "puissant", "puissamment", "impuissant", "impuissance", "impuissances",
    "joli", "plus joli", "le plus joli", "moche", "plus moche", "le plus moche", "beau", "joliment",
    "aller", "prendre", "item", "objet", "objet", "items", "objets", "objets",
    "potion"
  ];

  
const importantWords = [
  "cave", "forest", "mountain", "castle", "kingdom", "village", "town", "city",
  "river", "lake", "ocean", "sea", "desert", "jungle", "swamp", "island", "continent",
  "planet", "star", "galaxy", "universe", "world", "dimension", "time", "space",
    "grotte", "forêt", "montagne", "château", "royaume", "village", "ville", "cité",
    "rivière", "lac", "océan", "mer", "désert", "jungle", "marais", "île", "continent",
    "planète", "étoile", "galaxie", "univers", "monde", "dimension", "temps", "espace"
  ];


async function wordsFromText(text) {
  // remove ponctuation
  const ponctuation = /[\s,\-_.;!?\(\)]+/;
  const rawWords = text.split(ponctuation).filter((word) => word.length > 0);

  // unique lower case words
  const uniqueWords = [...new Set(rawWords.map((word) => word.toLowerCase()))];


  // remove filtered words
  const filtered = uniqueWords.filter((word) => !filteredWords.includes(word.toLowerCase()));

  // place important words at the beginning
  const important = filtered.filter((word) => importantWords.includes(word.toLowerCase()));
  const notImportant = filtered.filter((word) => !importantWords.includes(word.toLowerCase()));
  const words  = important.concat(notImportant);

  return words;
}

module.exports = {
  wordsFromText,
}
