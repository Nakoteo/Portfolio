(function(){
    var experience = [
                        "J'ai étudié pendant trois ans (2016-2019) en Techniques d'Intégration Multimédia au Collège de Maisonneuve. C'est là que j'ai appris à faire du Web, des jeux Unity, du design et de la vidéo. J'ai pu m'y mettre les mains à la pâte tout autant en création artistique qu'en programmation, pour au final réaliser que le côté technique de cette dernière est ce qui m'attire le plus.",
                        "En novembre 2018, je me suis inscrite en tant que bénévole au Montreal International Games Summit. J'ai toujours voulu mettre les pieds dans l'industrie du jeu, et le MIGS m'a vraiment confirmé ma passion pour le développement de jeu. J'ai pu assister à quelques conférences durant mes heures de pause et parler aux gens dans la salle d'exposition, ce que j'ai absolument adoré.",
                        "En janvier 2019, j'ai participé avec 6 autres de mes collègues de classe à l'intercollégial de création de jeu au Collège de Valleyfield. Après 46 heures de développement, nous sommes ressortis avec la deuxième position parmis les 14 équipes. La pression nous pesait sur les épaules tout le long, mais nous avons tout de même eu beaucoup de plaisir.",
                        "En avril 2019, je vais commencer un stage de 4 mois chez Ludia. Ce stage sera ma première entrée formelle dans l'industrie du jeu, une entrée de laquelle je rêve depuis des années. Je suis impatiente de finalement faire partie d'une compagnie de développement de jeu, et j'ai hâte de voir les opportunités qui s'ouvriront à moi dans le futur pour lesquelles j'ai travaillé si fort."
                    ];
    var exp = document.getElementsByClassName('exp');
    var elemTexte = document.getElementById('texteExp');
    var i = 0;
    var expLength = exp.length;
    console.log(expLength);

    for(i = 0; i < expLength; i++){
        exp[i].addEventListener("mouseover", afficherTexte);
    }

    function afficherTexte(e){
        console.log("got here");
        elemTexte.innerHTML = experience[e.target.getAttribute("data-texte")];
    }
})()