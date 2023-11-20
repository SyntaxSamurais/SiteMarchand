// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();


//const sectionFiches = document.querySelector(".fiches");
//sectionFiches.appendChild(imageElement);
//sectionFiches.appendChild(nomElement);
//sectionFiches.appendChild(prixElement);
//sectionFiches.appendChild(categorieElement);
//sectionFiches.appendChild(descriptionElement);
//sectionFiches.appendChild(disponibiliteElement);

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