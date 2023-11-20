// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();




function genererPieces(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    

// Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
// Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
// On crée l’élément img.
    const imageElement = document.createElement("img");
// On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    const article = pieces[i];


    const nomElement = document.createElement("h2");
   nomElement.innerText = article.nom;

   const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} €`;

    const categorieElement = document.createElement("p");
   categorieElement.innerText = article.categorie;

   const descriptionElement = document.createElement("p");
   if (article.description) {descriptionElement.innerText=article.description;
                                } 
        else { descriptionElement.innerText="Pas de description" }

   const disponibiliteElement = document.createElement("p");
    if (article.disponibilité===true) {disponibiliteElement.innerText="En stock";
                                } 
       else{ (disponibiliteElement.innerText="Rupture de stock") }

   imageElement.src = pieces[i].image;
// Idem pour le nom, le prix et la catégorie...

// On rattache la balise article à la section Fiches
   sectionFiches.appendChild(pieceElement);

// On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
   pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibiliteElement);
  
  }
}

  genererPieces(pieces)

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
  
     const piecesOrdonnees = Array.from(pieces)
     piecesOrdonnees.sort(function (a, b) {
         return a.prix - b.prix;
     });
    // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
  });

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.disponibilité;
   });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});


const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", function () {
   const piecesDescription = pieces.filter(function (piece) {
      return piece.description;
   });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesDescription);
  });


const boutonDecroissant = document.querySelector(".btn-trier-decroissant");


  boutonDecroissant.addEventListener("click", function () {
    const piecesDécroissant= Array.from(pieces)
         piecesDécroissant.sort(function (a, b) {
           return b.prix - a.prix;
       });
      // Effacement de l'écran et regénération de la page
      document.querySelector(".fiches").innerHTML = "";
      genererPieces(piecesDécroissant);
    });


const noms = pieces.map(piece => piece.nom);
const prix= pieces.map(piece => piece.prix);

for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       prix.splice(i,1)
   }
}



//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i]+ `- ${prix[i]} €`;
   abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
   .appendChild(abordablesElements)




const disponible=pieces.map(piece=>piece.nom +` - ${piece.prix} €`,);

for(let i = disponible.length -1 ; i >= 0; i--){
   if(pieces[i].disponibilité ===false){
         disponible.splice(i,1)
   }
}

const dispoElements = document.createElement('ul');
//Ajout de chaque nom à la liste

for(let i=0; i < disponible.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = disponible[i];
     dispoElements.appendChild(nomElement)
}

document.querySelector('.disponible')
   .appendChild(dispoElements)



const range=document.querySelector("input");
range.addEventListener("input",function () {
  const pieceFiltree=pieces.filter(function(pieces){
    return pieces.prix<=range.value;

  });
   document.querySelector(".fiches").innerHTML = "";
    genererPieces(pieceFiltree);
  });