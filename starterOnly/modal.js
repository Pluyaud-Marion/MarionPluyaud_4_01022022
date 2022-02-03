/* eslint-disable no-undef */

/*
------------- DOM Elements ---------------
*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// croix pour fermer la modale
const closeButton = document.querySelector(".close");
// bouton formulaire
const buttonSendForm = document.querySelector(".btn-submit");
// champs et checkboxs
const firstnameField = document.getElementById("first");
const lastnameField = document.getElementById("last");
const emailField = document.getElementById("email");
const birthdateField = document.getElementById("birthdate");
const numberTournamentField = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
//tous les boutons radios
const buttonsRadio = document.querySelectorAll(".checkbox-location");

/*
------------- Regex ---------------
*/
const regexName = /^[a-zA-ZÀ-ÿ\s_-]{2,60}$/;
const regexEmail = /^[^@\s]{2,30}@[^@\s]{2,30}\.[^@\s]{2,5}$/;
const regexNumber = /^[0-9]+$/;

main();

/*
------------- Fonction principale ---------------
*/
function main() {
	// launch modal event
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

	// au click sur la croix appel de la fonction closeModal
	closeButton.addEventListener("click", closeModal);

	// au click sur valider le formulaire appel de fonction verifyForm et submitForm
	buttonSendForm.addEventListener("click", event => {
		event.preventDefault();
		verifyForm();
		submitForm();
	});
}

/*
------------- Fonctions ---------------
*/

// eslint-disable-next-line no-unused-vars
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// fonction pour fermer la modale = passe à display none
function closeModal() {
	modalbg.style.display = "none";
	window.location.reload();
}

/*
fonction qui check tous les champs => si tous les champs sont ok, envoi le formulaire et fait afficher message confirmation (+ gestion fermeture de la confirmation au click sur bouton)
*/
function submitForm() {
	for (button of buttonsRadio) {
		//Si tous les champs sont ok
		if (checkFirstname() && checkLastname() && checkEmail() && checkBirthdate() && checkNumberTournament() && checkCheckBox() && checkCity()) {
			//on remplace le contenu de la div .modal par le texte
			document.querySelector(".modal").innerHTML = "Merci, votre réservation a bien été reçue!";
			// on remplace la valeur du bouton "c'est parti" par "j'ai compris"
			buttonSendForm.value = "J'ai compris";
			//au click sur le bouton on appelle la fonction pour fermer la modale
			buttonSendForm.addEventListener("click", closeModal);
		}
	}
}

/*
fonction qui check le champ firstname et affiche les messages d'erreurs si besoin
*/
function checkFirstname() {
	if (firstnameField.value === "") {
		document.getElementById("error-firstname").innerHTML = "Ce champ doit être rempli";
	} else if (!regexName.test(firstnameField.value)) {
		document.getElementById("error-firstname").innerHTML = "Format incorrect, vous devez renseigner au moins 2 caractères";
	} else {
		document.getElementById("error-firstname").innerHTML = "";
		return true;
	}
}

/*
fonction qui check le champ lastname et affiche les messages d'erreurs si besoin
*/
function checkLastname() {
	if (lastnameField.value === "") {
		document.getElementById("error-lastname").innerHTML = "Ce champ doit être rempli";
	} else if (!regexName.test(lastnameField.value)) {
		document.getElementById("error-lastname").innerHTML = "Format incorrect, vous devez renseigner au moins 2 caractères";
	} else {
		document.getElementById("error-lastname").innerHTML = "";
		return true;
	}
}

/*
fonction qui check le champ email et affiche les messages d'erreurs si besoin
*/
function checkEmail() {
	if (emailField.value === "") {
		document.getElementById("error-email").innerHTML = "Ce champ doit être rempli";
	} else if (!regexEmail.test(emailField.value)) {
		document.getElementById("error-email").innerHTML = "Votre adresse mail n'est pas valide";
	} else {
		document.getElementById("error-email").innerHTML = "";
		return true;
	}
}

/*
fonction qui check le champ birthdate et affiche les messages d'erreurs si besoin
*/
function checkBirthdate() {
	if (birthdateField.value === "") {
		document.getElementById("error-birthdate").innerHTML = "Vous devez renseigner votre date de naissance";
	} else {
		document.getElementById("error-birthdate").innerHTML = "";
		return true;
	}
}

/*
fonction qui check le champ nombre de tournoi et affiche les messages d'erreurs si besoin
*/
function checkNumberTournament() {
	if (numberTournamentField.value === "") {
		document.getElementById("error-quantity").innerHTML = "Ce champ doit être rempli";
	} else if (!regexNumber.test(numberTournamentField.value)) {
		document.getElementById("error-quantity").innerHTML = "Seuls les chiffres sont acceptés";
	} else {
		document.getElementById("error-quantity").innerHTML = "";
		return true;
	}
}

/*
fonction qui check si un bouton radio est coché et affiche les messages d'erreurs si besoin
*/
function checkCity() {
	for (button of buttonsRadio) {
		if (button.checked) {
			document.getElementById("error-location").innerHTML = "";
			return true;
		} else {
			document.getElementById("error-location").innerHTML = "Vous devez choisir une ville";
		}
	}
}

/*
fonction qui check si le checkbox est coché et affiche les messages d'erreurs si besoin
*/
function checkCheckBox() {
	if (checkBox.checked === false) { // retourne true si coché / false si décoché
		document.getElementById("error-checkbox").innerHTML = "Vous devez cocher cette case";
	} else {
		document.getElementById("error-checkbox").innerHTML = "";
		return true;
	}
}

/*
fonction qui appelle toutes les fonctions pour tester les champs et afficher les messages d'erreur
*/
function verifyForm() {
	const arrayButtonsRadio = Array.from(buttonsRadio); // transforme objet en array
	arrayButtonsRadio.some(checkCity); // Vérifie dans l'array des boutons radio si un élément retourne true
	checkFirstname();
	checkLastname();
	checkEmail();
	checkBirthdate();
	checkNumberTournament();
	checkCity();
	checkCheckBox();
}





