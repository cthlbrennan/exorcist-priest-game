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