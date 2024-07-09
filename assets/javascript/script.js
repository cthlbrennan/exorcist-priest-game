// this function runs when the How to Play button on the landing page is clicked on/touched. 
function showRules() {
    let rulesBox = document.getElementById("rules-box");
    let animationBox = document.getElementById("intro-animation-box")

    if (rulesBox.style.display !== "flex") {
        rulesBox.style.display = "flex"
        animationBox.style.display = "none"
    } else {
        rulesBox.style.display = "none"
        animationBox.style.display = "block"
    }

}

//this function is triggered when the Start button on the landing page is clicked on/touched. 
//it goes into the DOM and sets display:none for the heading, intro animation box and nav bar elements
//it sets display:flex or display:block for new elements, including the gameplay animation display, the 
//prayer display area and the text input area

function startGame() {
    let heading = document.getElementById("heading")
    heading.style.display = "none"
    let menu = document.getElementById("opening-menu-bar")
    menu.style.display = "none"
    let display = document.getElementById("intro-animation-box")
    display.style.display = "none"

    let introCinematicBox = document.getElementById("intro-cinematic-box")
    introCinematicBox.style.display = "block"

    let introCinematicDisplay = document.getElementById("intro-cinematic-display")
    introCinematicDisplay.addEventListener('animationend', () => {
        introCinematicDisplay.style.animation = "main-driving 1.9s steps(19) infinite";
        document.getElementById('dialogue-box').style.display = 'block'
        let dialogueDisplay = document.getElementById('dialogue')
        dialogueDisplay.style.display = 'block';

        setTimeout(function () {
            dialogueDisplay.innerText = 'It has been months since my sister Niamh has answered any of my letters.';
        }, 5000);

        setTimeout(function () {
            dialogueDisplay.innerText = "I am worried that something might've happened. She is still looking after that weird old man, our uncle Seosamh Fada.";
        }, 10000);

        setTimeout(function () {
            dialogueDisplay.innerText = "She is the real saint. I couldn't listen to his nonsense about brimstone and hellfire anymore.";
        }, 15000);

        setTimeout(function () {
            dialogueDisplay.innerText = "I'm sure she's just been busy...";
        }, 20000);

        setTimeout(function () {
            dialogueDisplay.innerText = "...";
        }, 25000);

        setTimeout(function () {
            introCinematicDisplay.style.animation = "driving-outro 1.4s steps(14) normal";
            setTimeout(function () {
                document.getElementById('dialogue-box').style.display = 'none'
                document.getElementById('dialogue').style.display = 'none'
                introCinematicDisplay.style.display = 'none'
                document.getElementById('proceed-button-box').style.display = 'block'
            }, 1350)
        }, 28000);


    })




}

function firstRoundPrelude() {

    document.getElementById('enemy-animation-box').style.display = 'block'
    document.getElementById('fight-dialogue-box').style.display = 'block'
    document.getElementById('fight-dialogue').style.display = 'block'
    document.getElementById('proceed-button').textContent = 'Next...'
    document.getElementById('proceed-button').addEventListener('click', () => {
        document.getElementById('enemy-animation-display').style.animation = 'cat-fight 0.7s steps(7) infinite'
        document.getElementById('fight-dialogue').innerText = "Oh shit ! Fluffy's possessed!"
        document.getElementById('proceed-button').addEventListener('click', () => {
            document.getElementById('fight-dialogue').innerText = "I better put these rosary beads to use."
            document.getElementById('proceed-button').addEventListener('click', () => {
                typingRoundOne()
            })

        })

    })

function typingRoundOne(){
    document.getElementById('fight-dialogue').style.display = 'none'
    document.getElementById('proceed-button-box').style.display = 'none'
    document.getElementById('prayer-display-box').style.display = 'block'
    document.getElementById('player-input').style.display='block'



} 


}