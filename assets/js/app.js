console.log("Bonjour Bank !");

$(document).ready(function () {
  $(document).foundation();
});

// Fonction pour formater les montants en euros
function formatterMontantEnEuros(montant) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  const montantFormate = formatter.format(montant);
  return montantFormate;
}

// TEMPLATE
// Fonction pour créer le template HTML pour chaque opération
function templateOperation(operationsData) {
  let htmlContent = "";

  // Parcours les datas pour générer le template HTML
  operationsData.forEach((operation) => {
    const imageSrc =
      operation.typeOperation == "credit" ? "./assets/images/sac-dargent.png" : "./assets/images/depenses.png";

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
                          <p class="count">${formatterMontantEnEuros(operation.montant)}</p>
                          
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
    montant: 1200,
  },
  {
    typeOperation: "debit",
    titre: "Loyer",
    desc: "mois d'août",
    montant: 450,
  },
  {
    typeOperation: "credit",
    titre: "Vente Boncoin",
    desc: "jeu PS5",
    montant: 25,
  },
  {
    typeOperation: "debit",
    titre: "Restaurant",
    desc: "Sushi bar",
    montant: 20,
  },
  {
    typeOperation: "credit",
    titre: "Réalisation de site web",
    desc: "ma mairie",
    montant: 1800,
  },
];
console.log(operationsData);

const mainContainer = document.querySelector("main .grid-container");

// Mise à jour affichage
mainContainer.innerHTML = templateOperation(operationsData);

// ---------------------
// RECUPERATION DU FORMULAIRE
document.getElementById("operationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Récupération des valeurs des champs
  let operatorValue = document.getElementById("operator").value;
  let titreValue = document.getElementById("titre").value;
  let descValue = document.getElementById("desc").value;
  let montantValue = parseFloat(document.getElementById("montant").value);

  const nouvelleOperation = {
    typeOperation: operatorValue,
    titre: titreValue,
    desc: descValue,
    montant: montantValue,
  };

  operationsData.push(nouvelleOperation);

  // Mise à jour de l'affichage
  mainContainer.innerHTML = templateOperation(operationsData);

  // Affichage des valeurs récupérées
  console.log("Opérateur :", operatorValue);
  console.log("Titre :", titreValue);
  console.log("Description :", descValue);
  console.log("Montant :", montantValue);

  console.log(operationsData);
});

function calculerTotalDebitsCredits(operationsData) {
  let totalDebits = 0;
  let totalCredits = 0;

  operationsData.forEach((operation) => {
    if (operation.typeOperation === 'debit') {
      totalDebits += operation.montant;
    } else if (operation.typeOperation === 'credit') {
      totalCredits += operation.montant;
    }
  });

  return {
    totalDebits,
    totalCredits,
  };
}

const totaux = calculerTotalDebitsCredits(operationsData);
console.log(formatterMontantEnEuros(totaux.totalDebits));

// =========================================
// NE PAS TOUCHER AU DESSUS Kalo-Green
// =========================================

//======================== essaie florie pour la bar de nav ========================//
// 3) function Operations(operationsData)florie
document.addEventListener('DOMContentLoaded', function () {
	// Fonction pour gérer la navigation dans le menu
	function gererNavigationMenu() {
		const navItems = document.querySelectorAll('.navHeader a');
		navItems.forEach((item) => {
			item.addEventListener('click', () => {
				// Retirez la classe 'active' de tous les éléments de la barre de navigation
				navItems.forEach((navItem) => navItem.classList.remove('active'));
				// Ajoutez la classe 'active' à l'élément de la barre de navigation cliqué
				item.classList.add('active');
				// Obtenez le type d'opération associé à l'onglet cliqué
				const operationType = item.getAttribute('data-type');
				// Affichez les opérations en fonction du type sélectionné
				afficherOperations(operationType);
			});
		});
	}

	// Fonction pour afficher les opérations en fonction du type (tout, crédit, débit)
	function afficherOperations(type) {
		const operations = document.querySelectorAll('.operation');
		operations.forEach((operation) => {
			if (type === 'tout' || operation.classList.contains(type)) {
				operation.style.display = 'block';
			} else {
				operation.style.display = 'none';
			}
		});
	}

	// Appelez la fonction pour gérer la navigation dans le menu
	gererNavigationMenu();
});

// 7) Fonction pour calculer le total des opérations de crédit
function totalCredit(operationsData) {
  return operationsData
      .filter(operation => operation.type === "credit")
      .reduce((total, operation) => total + operation.montant, 0);
}
const totalCreditAmount = totalCredit(operationsData);

// 8) Fonction pour calculer le total des opérations de débit
function totalDebit(operationsData) {
  return operationsData
      .filter(operation => operation.type === "debit")
      .reduce((total, operation) => total + operation.montant, 0);
}
const totalDebitAmount = totalDebit(operationsData);

//9) Fonction pour gérer la navigation dans le menu
function menu(etcMenu) {
    const navItems = document.querySelectorAll('.navHeader a');
    navItems.forEach(item => item.classList.remove('active'));
    etcMenu.classList.add('active');
}

//======================== fin essaie florie ========================//

// Ajoute le bouton "rez" et réinitialise l'operationForm -JIMMY//
// const createButton= document.createElement('button')
// createButton.innerText= 'Rez'
// document.body.appendChild(operationForm);

// function formClean(operationForm) {
//   // Réinitialise la valeur du champ 'operator' du formulaire à '--'
//   operationForm.operator.value = "--";

//   // Réinitialise la valeur du champ 'titre' du formulaire à une chaîne vide
//   operationForm.titre.value = "";

//   // Réinitialise la valeur du champ 'desc' du formulaire à une chaîne vide
//   operationForm.desc.value = "";

//   // Réinitialise la valeur du champ 'montant' du formulaire à null
//   operationForm.montant.value = null;
// }
