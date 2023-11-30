// JS de base
// =========================================
console.log("Bonjour Bank !");

$(document).ready(function () {
  $(document).foundation();
});
// =========================================
// Fonction pour formater les montants en euros
function formatterMontantEnEuros(montant) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  const montantFormate = formatter.format(montant);
  return montantFormate;
}
console.log(formatterMontantEnEuros(150));
// --------------

// RECUPERATION DU FORMULAIRE
document.addEventListener("DOMContentLoaded", function () {
  // Récupération du formulaire
  const operationForm = document.getElementById("operationForm");

  // Écoute de la soumission du formulaire
  operationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupération des valeurs des champs
    const operator = document.getElementById("operator").value;
    const titre = document.getElementById("titre").value;
    const desc = document.getElementById("desc").value;
    const montant = document.getElementById("montant").value;

    console.log("Opérateur :", operator);
    console.log("Titre :", titre);
    console.log("Description :", desc);
    console.log("Montant :", montant);

    operationForm.reset();
  });
});

// TEMPLATE
// Fonction pour créer le template HTML pour chaque opération
function templateOperation(operationsData) {
  let htmlContent = '';

  // Parcours les datas pour générer le modèle HTML
  operationsData.forEach(operation => {
    // Détermine quelle image afficher en fonction du type de transaction
    const imageSrc = operation.typeOperation == 'credit' ? './assets/images/sac-dargent.png' : './assets/images/depenses.png';

    htmlContent += `
          <div class="operation ${operation.typeOperation}">
              <div class="grid-x grid-padding-x align-middle">
                  <div class="cell shrink">
                      <div class="picto">
                          <img src="${imageSrc}" alt="${operation.typeOperation}" />
                      </div>
                  </div>
                  <div class="cell auto">
                      <div>
                          <h2>${operation.titre}</h2>
                          <small>${operation.desc}</small>
                      </div>
                  </div>
                  <div class="cell small-3 text-right">
                      <div>
                          <p class="count">${operation.montant}</p>
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
  });

  return htmlContent;
}

// DATABASE 
// Tableau d'objet 
const operationsData = [
  {
    typeOperation: "credit",
    titre: "Salaire",
    desc: "mois de septembre",
    montant: 1200
  },
  {
    typeOperation: "debit",
    titre: "Loyer",
    desc: "mois d'août",
    montant: 450
  },
  {
    typeOperation: "credit",
    titre: "Vente Boncoin",
    desc: "jeu PS5",
    montant: 25
  },
  {
    typeOperation: "debit",
    titre: "Restaurant",
    desc: "Sushi bar",
    montant: 20
  },
  {
    typeOperation: "credit",
    titre: "Réalisation de site web",
    desc: "ma mairie",
    montant: 1800
  },
]
console.log(operationsData);


// =========================================
// NE PAS TOUCHER AU DESSUS Kalo-Green
// =========================================




// Attente du chargement du document
$(document).ready(function () {
  // Intercepter la soumission du formulaire
  $("#operationForm").submit(function (event) {
    // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();

    // Récupérer la valeur du montant saisie dans le formulaire
    const montantSaisi = parseFloat($("#montant").val());

    // Vérifier si le montant saisi est un nombre valide
    if (!isNaN(montantSaisi)) {
      // Formater le montant en euros à l'aide de la fonction formatterMontantEnEuros
      const montantFormate = formatterMontantEnEuros(montantSaisi);

      // Afficher le montant formaté dans la console à titre d'exemple
      console.log("Montant saisi en euros :", montantFormate);
    } else {
      console.error("Veuillez saisir un montant valide.");
    }
  });
});


// Fonction pour gérer la soumission du formulaire
document.getElementById("operationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêcher le rechargement de la page

  // Récupérer la valeur du montant depuis le champ #montant
  const montantValue = parseFloat(document.getElementById("montant").value);

  // Formater le montant en euros
  const montantFormate = formatAmount(montantValue);

  // Afficher le montant formaté dans la console (ou à l'endroit souhaité dans votre application)
  console.log("Montant formaté en euros :", montantFormate);
});

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

// Gestion de l'ajout de nouvelles opérations via un formulaire
$("#operationForm").submit(function (event) {
  event.preventDefault();
  // Récupérez les valeurs du formulaire
  const type = $("#operator").val();
  const titre = $("#titre").val();
  const description = $("#desc").val();
  const montant = parseFloat($("#montant").val());

  // Créez une nouvelle opération financière avec les valeurs du formulaire
  creerOperationFinanciere(type, titre, description, montant);

  // Videz le formulaire après l'ajout d'une opération
  document.getElementById("operationForm").reset();
  
});






//======================== essaie florie pour la bar de nav ========================//
document.addEventListener('DOMContentLoaded', function () {
  // Fonction pour gérer la navigation dans le menu
  function gererNavigationMenu() {
      const navItems = document.querySelectorAll('.navHeader a');
      navItems.forEach(item => {
          item.addEventListener('click', () => {
              // Retirez la classe 'active' de tous les éléments de la barre de navigation
              navItems.forEach(navItem => navItem.classList.remove('active'));
              // Ajoutez la classe 'active' à l'élément de la barre de navigation cliqué
              item.classList.add('active');
              // Obtenez le type d'opération associé à l'onglet cliqué
              const operationType = item.textContent.toLowerCase();
              // Affichez les opérations en fonction du type sélectionné
              afficherOperations(operationType);
          });
      });
  }
  // Fonction pour afficher les opérations en fonction du type (tout, crédit, débit)
  function afficherOperations(type) {
      const operations = document.querySelectorAll('.operation');
      operations.forEach(operation => {
          const operationType = operation.classList.contains('credit') ? 'credit' : 'debit';
          // Affichez ou masquez l'opération en fonction du type sélectionné
          if (type === 'tout' || type === operationType) {
              operation.style.display = 'block';
          } else {
              operation.style.display = 'none';
          }
      });
  }
// Appelez la fonction pour gérer la navigation dans le menu
  gererNavigationMenu();
});
//======================== fin essaie florie ========================//