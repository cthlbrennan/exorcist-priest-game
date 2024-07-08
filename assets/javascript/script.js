//landing page

// this function runs when the How to Play button on the landing page is clicked on/touched. 
function showRules(){
    let rulesBox = document.getElementById("rules-box");
    let animationBox = document.getElementById("intro-animation-box")

    if (rulesBox.style.display !== "flex") {
    rulesBox.style.display="flex"
    animationBox.style.display="none"
    } else {
        rulesBox.style.display="none"
        animationBox.style.display="block"
    }

}