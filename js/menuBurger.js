(function(){
    var elmLi = document.getElementsByTagName("li");
    var elmLiLength = elmLi.length;
    var elmMain = document.getElementsByTagName("main")[0];

    for(var i = 0; i < elmLiLength; i++){
        elmLi[i].addEventListener("click", translateMenu);
    }

    function translateMenu(e){
        for(var i = 0; i < elmLiLength; i++){
            elmLi[i].style.textShadow = "none";
        }
        elmMain.style.transform = "translateX(-" + e.target.getAttribute("data-index") + "%)";
        e.target.style.textShadow = "1px 0px 0px rgb(255, 28, 244)";
    }
})()