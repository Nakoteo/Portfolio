(function(){
    var sites = ["http://jeu.tim.cmaisonneuve.qc.ca/galerie_unity/progAnim/h2017/Boulay%20Rachel%20TP/index.html", "https://rachel-boulay.itch.io/laventure-de-unitychan", "https://rachel-boulay.itch.io/steamcore", "https://rachel-boulay.itch.io/massacrealaubergeinn"];
    var projets = document.getElementsByClassName("pro");

    for(var i = 0; i < projets.length; i++){
        projets[i].addEventListener("click", ouvrirProjet);
    }

    function ouvrirProjet(e){
        window.open(sites[e.target.getAttribute("data-projet")]);
    }
})()