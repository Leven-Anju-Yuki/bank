// ===========================ON NE TOUCHE PAS ///
console.log("Bonjour Bank !");

$(document).ready(function () {
  $(document).foundation();
});
// ========================================= //
//Fonction pour formater les montants d'argent en euros
function monnaie(montant) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(number);
}
// Fonction pour générer le template HTML pour chaque opération
function genererTemplateOperation(operation) {}

// Fonction pour afficher les opérations sur la page
function afficherOperations(operations) {}

// Fonction pour générer un graphique basé sur les opérations
function genererGraphique(operations) {}

// Fonction pour créer une nouvelle opération financière
function creerOperationFinanciere(type, titre, description, montant) {}

// Fonction pour afficher le solde et un commentaire sur la situation financière
function afficherSoldeCommentaire(solde, commentaire) {}

// Fonctions pour calculer le total des opérations de crédit et débit
function calculerTotalCreditDebit(operations) {}

// Fonction pour gérer la navigation dans le menu
function gererNavigationMenu() {}

// Fonction pour vider le formulaire après l'ajout d'une opération
function filtrerOperationsParType(operations, type) {}

// Gestion des événements de la barre de navigation

// Gestion de l'ajout de nouvelles opérations via un formulaire

// Initialisation des données et affichage initial de la page





// function genererTemplateOperation(operation) {}
// function afficherOperations(operations) {}
// function genererGraphique(operations) {}
// function creerOperationFinanciere(type, titre, description, montant) {}
// function afficherSoldeCommentaire(solde, commentaire) {}
// function calculerTotalCreditDebit(operations) {}
// function gererNavigationMenu() {}
// function filtrerOperationsParType(operations, type) {}

// Gestion des événements de la barre de navigation
// gererNavigationMenu();

const createButton= document.createElement('button')
createButton.innerText= 'Rez'
document.body.appendChild(operationForm);

// Test Jimmy//
function formClean(operationForm) {
  // Réinitialise la valeur du champ 'operator' du formulaire à '--'
  operationForm.operator.value = "--";

  // Réinitialise la valeur du champ 'titre' du formulaire à une chaîne vide
  operationForm.titre.value = "";

  // Réinitialise la valeur du champ 'desc' du formulaire à une chaîne vide
  operationForm.desc.value = "";

  // Réinitialise la valeur du champ 'montant' du formulaire à null
  operationForm.montant.value = null;
}




// florie jeter
// const navItems = document.querySelectorAll(".navHeader a");
    // navItems.forEach((item) => {
    //   item.addEventListener("click", () => {
    //     // Retirez la classe 'active' de tous les éléments de la barre de navigation
    //     navItems.forEach((navItem) => navItem.classList.remove("active"));
    //     // Ajoutez la classe 'active' à l'élément de la barre de navigation cliqué
    //     item.classList.add("active");
    //     // Obtenez le type d'opération associé à l'onglet cliqué
    //     const operationType = item.textContent.toLowerCase();
    //     // Affichez les opérations en fonction du type sélectionné
    //     afficherOperations(operationType);
    //   });
    // });
// function menu(etc) {
//   all.removeAttribute("class", "active");
//   credit.removeAttribute("class", "active");
//   debit.removeAttribute("class", "active");
//   etc.setAttribute("class", "active");
// }
// const all = document.querySelector(".navHeader a");
// all.addEventListener("click", () => {
//   menu(all);
// });
// const credit = document.querySelector(".navHeader a:nth-child(2)");
// credit.addEventListener("click", () => {
//   menu(credit);
// });
// const debit = document.querySelector(".navHeader a:nth-child(3)");
// debit.addEventListener("click", () => {
//   menu(debit);
// });
    
   