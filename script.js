function displayMessage() {
  const nameInput = document.getElementById("nameInput");
  const message = document.getElementById("message");
  const videoContainer = document.getElementById("videoContainer");

  // Vérifier si un nom a été saisi
  if (nameInput.value.trim() !== "") {
    message.textContent = `Joyeux Noël ${nameInput.value.trim()} !`;
    message.classList.remove("hidden");
    videoContainer.classList.remove("hidden");

    // Ajoute une animation en réinitialisant les classes
    message.classList.add("bounce");
    videoContainer.classList.add("bounce");
  } else {
    alert("Veuillez entrer votre nom !");
  }
}
// Vérifier si l'utilisateur est sur un téléphone
if (window.innerWidth > 768) { // Largeur de l'écran plus grande qu'un téléphone
    document.body.innerHTML = "<h1>Vous devez être sur téléphone pour voir le site</h1>";
}