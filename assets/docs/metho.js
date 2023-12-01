/*
1) function formatMoney(montant) le montant en une représentation monétaire
2. Retourne le montant formaté
*/

/*
2) function template(operation)
1. Détermine si l'opération est un crédit ou un débit en fonction de la propriété 'Credit' avec ternaire
2. Sélectionne l'image appropriée en fonction de la nature de l'opération (crédit ou débit)
3. Retourne une chaîne de caractères représentant une structure HTML avec les détails de l'opération
*/

/*
3) function Operations(operationsData)
1. S'il n'y a pas d'opérations, affiche un message indiquant l'absence d'opérations.
2. S'il y a des opérations, efface tout contenu précédent et affiche les opérations une par une.
3. Calcul du ratio pour chaque opération en fonction de son type (crédit ou débit)
4. Calcule le ratio et l'assigne à l'opération
5. Ajoute la représentation HTML de l'opération à la liste des opérations affichées
*/
//:nth-clild(2) permet de parler a l'enfant

/*
4) function Graph(operationsData)
1. Initialise le solde à zéro
2. Réinitialise les libellés des données du graphique
3. Réinitialise les données du graphique
4. Met à jour le graphique
5. Parcours des opérations pour calculer l'évolution du solde et mettre à jour le graphique
6. Crée un libellé pour l'opération avec le titre et le montant (crédit ou débit)
7. Met à jour le solde en fonction du type d'opération (crédit ou débit)
8. Ajoute les données de l'opération au graphique pour visualiser l'évolution du solde
*/

/*
5) function newOperation(operator, title, description, total)
1. retourne Propriété représentant le titre de l'opération
2. retourne Propriété représentant la description de l'opération
3. retourne Propriété représentant le montant de l'opération, converti en nombre
4. retourne Propriété indiquant si l'opération est un crédit (true) ou un débit (false)
5. Initialise la propriété ratio à 0 (sera calculée ultérieurement)
*/

/*
6) function header(ops)
1. Calcule le solde financier en soustrayant le total des crédits du total des débits
2. Affiche le solde financier formaté dans l'élément avec l'ID 'solde'
3. Sélectionne l'élément suivant l'élément ayant l'ID 'solde' (petit commentaire associé)
4. Initialise un tableau pour stocker les commentaires possibles
5. Si le solde est positif, définit un commentaire positif et ajoute une classe 'good'
6. Si le solde est négatif ou nul, définit un commentaire négatif et ajoute une classe 'bad'
7. Sélectionne aléatoirement un commentaire parmi ceux disponibles et l'affiche
*/

/*
7) function totalCredit(operationsData)
1. Filtrer les opérations pour ne garder que celles de type crédit
2. Réduire (avec la méthode reduce) les montants des opérations de type crédit pour obtenir la somme totale
*/

/*
8) function totalDebit(operationsData)
1. Filtrer les opérations pour ne garder que celles de type débit
2. Réduire (avec la méthode reduce) les montants des opérations de type débit pour obtenir la somme totale
*/

/*
9) function menu(etcMenu)
1. Supprime la classe 'active' des éléments du menu 'all', 'credit' et 'debit'
2. Ajoute la classe 'active' à l'élément spécifique 'etcMenu' passé en paramètre
*/

/*
10) function formClean(operationForm)
1. Réinitialise la valeur du champ 'operator' du formulaire à '--'
2. Réinitialise la valeur du champ 'titre' du formulaire à une chaîne vide
3. Réinitialise la valeur du champ 'desc' du formulaire à une chaîne vide
4. Réinitialise la valeur du champ 'montant' du formulaire à null 
*/

/*
11) const all = document.querySelector('.navHeader a'), 
1. Ajoute un gestionnaire d'événement de clic à l'élément 'all'
2. Appelle la fonction 'menu' avec l'élément 'all' en tant qu'argument pour gérer les classes visuelles des éléments du menu
3. Appelle la fonction 'Operations' avec les données 'operationsData' pour afficher ou traiter les opérations financières
4. Appelle la fonction 'Graph' avec les données 'operationsData' pour générer ou mettre à jour un graphique basé sur ces données
*/

/*
12) const credit = document.querySelector('.navHeader a:nth-child(2)');
1. Ajoute un gestionnaire d'événement de clic à l'élément 'credit'
2. Appelle la fonction 'menu' avec l'élément 'all' en tant qu'argument pour gérer les classes visuelles des éléments du menu
3. Appelle la fonction 'Operations' avec les données 'operationsData' pour afficher ou traiter les opérations financières
4. Appelle la fonction 'Graph' avec les données 'operationsData' pour générer ou mettre à jour un graphique basé sur ces données
*/

/*
13) const debit = document.querySelector('.navHeader a:nth-child(3)');
1. Ajoute un gestionnaire d'événement de clic à l'élément 'debit'
2. Appelle la fonction 'menu' avec l'élément 'all' en tant qu'argument pour gérer les classes visuelles des éléments du menu
3. Appelle la fonction 'Operations' avec les données 'operationsData' pour afficher ou traiter les opérations financières
4. Appelle la fonction 'Graph' avec les données 'operationsData' pour générer ou mettre à jour un graphique basé sur ces données
*/

/*
14) const submitForm = document.querySelector('#operationForm button[type=submit]');
1. Ajoute un gestionnaire d'événement de clic à l'élément 'submitForm'
2. Ajoute un attribut 'data-close' à l'élément 'submitForm'
3. Empêche le comportement par défaut du formulaire lors de la soumission
4. Récupère les valeurs des champs du formulaire 'operationForm'
5. Crée une nouvelle opération à partir des valeurs récupérées du formulaire
6. Ajoute la nouvelle opération aux données d'opérations financières et met à jour les données dans le stockage local
7. Réinitialise les champs du formulaire
8. Met à jour l'en-tête, le graphique et l'affichage des opérations financières avec les nouvelles données
*/

/*
15) Affichage de la page
1. Initialisation des données d'opérations financières à un tableau vide
2. Vérifie s'il existe des données dans le stockage local et les charge dans 'operationsData' s'il y en a
3. Sélectionne l'élément '.grid-container' dans la section principale du document
4. Met à jour l'en-tête, l'affichage des opérations financières et le graphique avec les données actuelles
5. Options supplémentaire
6. Sélectionne l'élément 'body' du document
7. Crée une chaîne de caractères représentant un menu d'options
8. Insère le menu d'options au début du corps du document
9. Sélectionne l'élément 'reset' dans le menu d'options
10. Ajoute un gestionnaire d'événement de clic à l'élément 'reset'
11. Modifie le contenu de l'élément '.grid-container' dans la section principale du document pour afficher un message indiquant aucune opération
12. Réinitialise les données d'opérations financières à un tableau vide, met à jour le graphique et supprime les données du stockage local
*/

/*
16) Sélectionne l'élément 'add2' dans le document par son ID
1. Ajoute un gestionnaire d'événement de clic à l'élément 'addData'
2. Définit les données d'opérations financières avec un ensemble prédéfini d'opérations
3. Enregistre les nouvelles données d'opérations financières dans le stockage local
4. Met à jour l'en-tête, le graphique et l'affichage des opérations financières avec les nouvelles données

*/
