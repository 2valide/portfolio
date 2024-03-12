class App{ 
    // class App, va servir de recueil de methodes pour la gestion des fonctionalités de l'app

    // on definit un tableau destiné à stocker les messages envoyés
    static messages = [];

    // 
    static sendMessageA(){ 
        // on récupere le texte ecrit par l'userA dans l'input
        let messageA = document.getElementById("newMessageA").value;
        // on crée un nouvel objet Message et on le stocke dans le tableau
        App.messages.push( new Message(messageA, 'a'));
        // on verifie les messages presents dans le tableau
        console.log(App.messages);
        // on vide l'input
        document.querySelector("#newMessageA").value = "";
        // on appelle la procédure de mise à jour du display
        App.refreshChat();
    }
    
    static sendMessageB(){ 
        // on récupere le texte ecrit par l'userB dans l'input
        let messageB = document.getElementById("newMessageB").value;
        // on crée un nouvel objet Message et on le stocke dans le tableau
        App.messages.push( new Message(messageB, 'b'));
        // on verifie les messages presents dans le tableau
        console.log(App.messages);
        // on vide l'input
        document.querySelector("#newMessageB").value = "";
        // on appelle la procédure de mise à jour du display
        App.refreshChat();
    }

    static refreshChat(){
        // On récupère les conteneurs de messages A et B
        let divA = document.querySelector(".convA");
        let divB = document.querySelector(".convB");

        // on crée une div dans en mémoire pour chaque message
        let msgContainerA = document.createElement("div");
        let msgContainerB = document.createElement("div");

        // recupération le dernier message créé dans le tableau
        const element = App.messages[App.messages.length-1];

        // fabrication du message en mémoire
        let msg = document.createElement("span");
        msg.classList.add("msg");
        msg.innerHTML = "<div class='body'> "+ element.message + " </div>";
        msg.innerHTML += "<div class='footer'> "+ element.timeStr +  "</div>";

        //intégration dans le DOM
        // on clone le message au prealable afin d'en détenir 2 copies
        // car nous devons en insérer une dans chaque conteneur de message
        msgContainerA.appendChild(msg.cloneNode(true));
        msgContainerB.appendChild(msg);

        // définition de la position de chaque message en fonction de
        // sa provenance (user A ou user B)
        if(element.from === 'a') {
            // Le message a été écrit par le userA
            // le message inséré dans le container A doit être en vert et sur la droite
            msgContainerA.classList.add('right-conv');
            divA.appendChild(msgContainerA);
            // le message inséré dans le container B doit être en bleu et sur la gauche
            msgContainerB.classList.add('left-conv');
            divB.appendChild(msgContainerB);
        } else {
            // Le message a été écrit par le userB
             // le message inséré dans le container B doit être en vert et sur la droite
            msgContainerB.classList.add('right-conv');
            divB.appendChild(msgContainerB);
            // le message inséré dans le container A doit être en bleu et sur la gauche
            msgContainerA.classList.add('left-conv');
            divA.appendChild(msgContainerA);
        }
        // auto-scroll sur les deux conteneurs de message:
        divA.scroll({ top: divA.scrollHeight, behavior: "smooth"});
        divB.scroll({ top: divB.scrollHeight, behavior: "smooth"});
    }
}

class Message{
    // classe message permettant de stocker toutes les 
    // données du message necessaire au traitement.
    constructor(msg, from){
        this.message = msg;
        this.from = from;
        this.time = new Date(Date.now());
        this.timeStr = this.time.toLocaleTimeString();
    }
}


function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();

    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);

    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){

        if (document.readyState=='complete') callback();

    });
}



ready(function(){

    // Plutot que d'utiliser les methodes onclick sur les boutons des input html
    // on peut utiliser cette procédure pour installer correctement des écouteurs
    // d'évènement click sur ces boutons.

    const btnUserA = document.querySelector(".btnUserA");
    const btnUserB = document.querySelector(".btnUserB");

    btnUserA.addEventListener('click', function(e){
        App.sendMessageA();
    });

    btnUserB.addEventListener('click', function(e){
        App.sendMessageB();
    });

});