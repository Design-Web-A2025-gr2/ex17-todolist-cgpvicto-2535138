// Sélectionne le champ de saisie et l'icône "+"
const saisie = document.getElementById('saisie-tache');
const iconeAjout = document.querySelector('.icone-ajout');

// Fonction pour ajouter une tâche
function ajouterTache() {
    const valeur = saisie.value.trim();
    if (valeur !== "") {
        
        const listeAFaire = document.querySelector('.liste-afaire');

        const nouvelleTache = document.createElement('li');
        nouvelleTache.classList.add('tache');
        nouvelleTache.textContent = valeur;

        // Ajoute la tâche à la liste
        listeAFaire.appendChild(nouvelleTache);

        // Reset du champ de saisie
        saisie.value = "";
    }
}

// Événement sur le clic du "+"
iconeAjout.addEventListener('click', ajouterTache);

// Événement sur "Entrée" dans l'input
saisie.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        ajouterTache();
    }
});