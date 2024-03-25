
//COPYRIGHT SEARCHAREA DATACENTER AND SEARCHAREA FRANCE, USA, RUSSIA and ITALIA
//SCRIPT BY SEARCHAREA FRANCE, POLOOHYEAH AND DRISS
//SEARCH AREA WEB SEARCH AND AREA MAPS USE WEBSEARCH SCRIPT 
//SCRIPT V2.0 AVEC FUSE.JS 


// Définition de la fonction openPage
function openPage() {
  // Récupération de la valeur de la barre de recherche
  var searchTerm = document.getElementById("search").value;

  // Définition des correspondances terme de recherche => fichier HTML
  var searchMappings = [
    { term: "gironde", file: "gironde.html" },
    { term: "incendie gironde", file: "gironde.html" },
    { term: "chat", file: "chat.html" },
    { term: "petit chat", file: "chat.html" },
    { term: "chat trop mignon", file: "chat.html" },
    { term: "twitter", file: "twitter.html" },
    { term: "yahourt a boire yoplait", file: "yoplait.html" }

  ];

  // Vérification directe de la correspondance exacte
  for (var i = 0; i < searchMappings.length; i++) {
    if (searchTerm === searchMappings[i].term) {
      window.open(searchMappings[i].file);
      return; // Sortir de la fonction si une correspondance exacte est trouvée
    }
  }

  // Création de l'objet Fuse avec les options appropriées
  var fuseOptions = {
    shouldSort: true,
    threshold: 0.4,
    keys: ["term"]
  };
  var fuse = new Fuse(searchMappings, fuseOptions);

  // Recherche floue pour trouver une correspondance proche
  var results = fuse.search(searchTerm);

  // Vérification des résultats trouvés
  if (results.length > 0) {
    var closestMatch = results[0].item;
    window.open(closestMatch.file);
  }
}
