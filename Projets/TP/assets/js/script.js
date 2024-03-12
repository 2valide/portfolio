// COPYRIGHTS
console.log("Merci Alexis GONTIER pour la réalisation et le partage de ton TP");

// MENU BURGER
let menu_open = document.querySelector('.burger-menu .open');
let menu_close = document.querySelector('.burger-menu .close');
let nav = document.querySelector('header nav ul');

menu_open.addEventListener("click", () => {
    menu_open.style.display = "none";
    menu_close.style.display = "block";
    nav.style.transform = "translateX(0)";
});

menu_close.addEventListener("click", () => {
    menu_open.style.display = "block";
    menu_close.style.display = "none";
    nav.style.transform = "translateX(-100%)";
});


// FOOTER
let date = document.querySelector('footer span');
let now = new Date();
date.textContent += now.getFullYear();


// SLIDER
let travelPictures = document.querySelectorAll('.slider .secondary-img img');
let largePicture = document.querySelector('.slider .main-img img');

travelPictures.forEach((picture) => {
    picture.addEventListener('mouseover', () => {
        let newSrc = picture.getAttribute('src');
        largePicture.setAttribute('src', newSrc);
    });
});

travelPictures.forEach((picture) => {
    picture.addEventListener('mouseout', () => {
        largePicture.setAttribute('src', "./assets/img/slider-1.png");
    });
});


// SLIDER RESPONSIVE et DYNAMIQUE
// On récupère les éléments HTML
let btn_right = document.getElementById('btn-right');
let btn_left = document.getElementById('btn-left');

// On stocke les noms des images dans un tablau (autant qu'on veut)
let images = ["slider-1", "slider-2", "slider-3", "slider-4"];
// Rappel : le premier index d'un tableau commence à 0

// Cette fonction permet de d'afficher une image en fonction de son numéro (index + 1)
function updatePicture(index) {
    largePicture.setAttribute('src', './assets/img/slider-' + (index + 1) + '.png');
    
}
// On définie l'indice de départ (initialisation)
let currentIndex = 0;

btn_right.addEventListener('click', () => {
    currentIndex++;
    // On incrémente l'index à chaque clic tant qu'il ne dépasse pas la longueur du tableau
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updatePicture(currentIndex);
});

btn_left.addEventListener('click', () => {
    currentIndex--;
    // On décrémente l'index à chaque clic jusqu'à ce qu'on arrive "avant" l'indice n°0
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // -1 pour cibler le dernier index du tableau
    }
    updatePicture(currentIndex);
});
// Permet d'initialiser le carroussel (état de départ, 1ère image du talbeau) grace à l'indice 0 (currentIndex) auquel + 1 est ajouté dans la fonction
updatePicture(currentIndex);


// PLUS MOINS
let moins = document.getElementById('minus');
let plus = document.getElementById('plus');
let items = document.getElementById('items');

// On initialise le compteur à 1
let i = 1;

// On créée une fonction permettant d'afficher la quantité dans le navigateur
function updateCounter() {
    items.textContent = i;
}

moins.addEventListener("click", () => {
    // Si le compte est supérieur à 1, alors on peut décrémenter
    if (i > 1) {
        i--;
    } 
    // On affiche la quantité actuelle
    updateCounter()
});

plus.addEventListener("click", () => {
    // On incrémente
    i++;
    // On affiche la quantité actuelle
    updateCounter();
});
// On affiche la quantité de base (initialisé à 1 grace à i = 1)
updateCounter(i);

// CART COUNT
let addToCart = document.querySelector('.add');
const cartCount = document.querySelector('#cart-count');

addToCart.addEventListener('click', () => {
    if (i != 0) {
        // Pour rappel, la valeur de i est celle définit par la function updateCounter()
        cartCount.style.display = "flex";
        cartCount.textContent = i;
    }
});


// POP-UP
let pop_up = document.querySelector('.pop-up');
let card = document.querySelector('.pop-up .card');
let card_close = document.querySelector('.pop-up .card i');
let btn_close = document.querySelector('.pop-up .card form button');

setTimeout(function() {
    pop_up.style.position = "fixed";
    card.style.display = "flex";
}, 1000);

function popOut() {
    pop_up.style.position = "initial";
    card.style.display = "none";
}

card_close.addEventListener("click", () => {
    popOut();
});

btn_close.addEventListener("click", () => {
    popOut();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        popOut();
    }
});

let form = document.querySelector('.pop-up .card form');

form.onsubmit = (e) => {
    // On empêche le rafraîchissement de la page lors de la soumission du formulaire (qui est l'action par défaut)
    e.preventDefault();
}