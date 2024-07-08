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

//this function is triggered when the Start button on the landing page is clicked on/touched. 
//it goes into the DOM and sets display:none for the heading, intro animation box and nav bar elements
//it sets display:flex or display:block for new elements, including the gameplay animation display, the 
//prayer display area and the text input area

function startGame(){
    let heading = document.getElementById("heading")
    heading.style.display="none"
    let menu = document.getElementById("opening-menu-bar")
    menu.style.display="none"
    let display = document.getElementById("intro-animation-box")
    display.style.display="none"

    let introCinematicBox = document.getElementById("intro-cinematic-box")
    introCinematicBox.style.display="block"

    let introCinematicDisplay = document.getElementById("intro-cinematic-display")
    introCinematicDisplay.addEventListener('animationend', () => {
        introCinematicDisplay.style.animation="main-driving 1.9s steps(19) infinite";
        
    })

    function lastClick() {
        let introCinematicBox = document.getElementById("intro-cinematic-box")
        introCinematicBox.style.display="none"
    }

}