function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close"); // croix pour fermer la modale
const buttonSendForm = document.querySelector(".btn-submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//au click sur la croix appel de la fonction closeModal
closeButton.addEventListener("click", closeModal);

//fonction pour fermer la modale = passe à display none
function closeModal() {
  modalbg.style.display = "none";
}

const regexName = /^[a-zA-ZÀ-ÿ\s_-]{2,60}$/;
const regexEmail = /^[^@\s]{2,30}@[^@\s]{2,30}\.[^@\s]{2,5}$/;
const regexNumber = /^[0-9]+$/; 


const firstnameField = document.getElementById("first");
const lastnameField = document.getElementById("last");
const emailField = document.getElementById("email");
const birthdateField = document.getElementById("birthdate");
const numberTournamentField = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1"); 

//selectionne tous les boutons radios
const buttonsRadio = document.querySelectorAll(".checkbox-location");


buttonSendForm.addEventListener("click", event => {
  event.preventDefault();
  submitForm();
  
})



function submitForm() {
 
  if (firstnameField.value === "") {
    document.getElementById("error-firstname").innerHTML = "Ce champ doit être rempli"
  } else if (!regexName.test(firstnameField.value)) {
    document.getElementById("error-firstname").innerHTML = "Format incorrect, vous devez renseigner au moins 2 caractères"
  } 

  if (lastnameField.value === "") {
    document.getElementById("error-lastname").innerHTML = "Ce champ doit être rempli"
  } else if (!regexName.test(lastnameField.value)) {
    document.getElementById("error-lastname").innerHTML = "Format incorrect, vous devez renseigner au moins 2 caractères"
  } 

  if (emailField.value === "") {
    document.getElementById("error-email").innerHTML = "Ce champ doit être rempli"
  } else if(!regexEmail.test(emailField.value)) {
    document.getElementById("error-email").innerHTML = "Votre adresse mail n'est pas valide"
  } 

  if(birthdateField.value === "") {
    document.getElementById("error-birthdate").innerHTML = "Vous devez renseigner votre date de naissance"
  }

  if (numberTournamentField.value === "") {
    document.getElementById("error-quantity").innerHTML = "Ce champ doit être rempli"
  } else if(!regexNumber.test(numberTournamentField.value)){
    document.getElementById("error-quantity").innerHTML = "Seuls les chiffres sont acceptés"
  } 

  //boucle sur tous les boutons radio
  for (button of buttonsRadio){
    if(button.checked === false){ // si renvoie false = non coché -> affiche message d'erreur
      document.getElementById("error-location").innerHTML = "Vous devez choisir une ville"
    } else {
      document.getElementById("error-location").innerHTML = ""
    }
  }

  if(checkBox.checked === false){ // retourne true si coché / false si décoché
    document.getElementById("error-checkbox").innerHTML = "Vous devez cocher cette case"
  }


  // document.querySelector(".modal").innerHTML = "Merci, votre réservation a bien été reçue!"
  // buttonSendForm.value= "J'ai compris"

  
}

