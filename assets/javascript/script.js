const prayerArray = [
    "Exorcizamus te, omnis immundus spiritus!",
    "In nomine Verbi Dei, liberare te!",
    "Exi ab eo, immunde spiritus!",
    "Sanctus Deus, sanctus immortalis, miserere nobis!",
    "Per virtutem crucis, liberare te!",
    "Non habes potestatem hic!",
    "In nomine Patris, exorcizo te!",
    "Agnus Dei, qui tollis peccata mundi, miserere nobis!",
    "Tremens sub potestatem Dei!",
    "Ite ad inferos, maligni spiritus!",
    "Lux veritatis vincit tenebras!",
    "Deus vult te liberare!",
    "Confiteor Deo omnipotenti!",
    "Sancta Maria, Mater Dei, ora pro nobis!",
    "In nomine Iesu, spiritus malignus, discede!",
    "Ab inimicis nostris libera nos, Domine!",
    "Custodi me a malo!",
    "Sancte Michael Archangele, defende nos in proelio!",
    "Renuntia Satanae et omnibus operibus eius!",
    "In fide Iesu Christi, te exorcizo!",
]
var timerElement = document.getElementById('timer');
var timer = parseInt(timerElement.innerText);
var countdownInterval;
document.getElementById('start-game').addEventListener('click', startGame)
document.getElementById('rule-button').addEventListener('click', showRules)

// this function runs when the How to Play button on the landing page is clicked on/touched. 
function showRules() {
    let rulesBox = document.getElementById("rules-box");
    let animationBox = document.getElementById("intro-animation-box")

    if (rulesBox.style.display !== "flex") {
        rulesBox.style.display = "flex"
        animationBox.style.display = "none"
        document.getElementById('start-game').style.display = 'none'
        document.getElementById('rule-button').innerText = 'Return'
    } else {
        document.getElementById('start-game').style.display = 'block'
        rulesBox.style.display = "none"
        animationBox.style.display = "block"
        document.getElementById('rule-button').innerText = 'How to Play'

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
        }, 1000);

        setTimeout(function () {
            dialogueDisplay.innerText = "I am worried that something might've happened. She is still looking after that weird old man, our uncle Joe.";
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
                document.getElementById('intro-cinematic-box').style.display = 'none'
                introCinematicDisplay.style.display = 'none'
                document.getElementById('proceed-button-box').style.display = 'block'
                document.getElementById('proceed-button').addEventListener('click', firstRoundPrelude)
                document.getElementById('proceed-button').focus()

            }, 1350)
        }, 1000);


    })




}

function firstRoundPrelude() {
    document.getElementById('proceed-button').removeEventListener('click', firstRoundPrelude)
    document.getElementById('proceed-button').focus()

    document.getElementById('enemy-animation-box').style.display = 'block'
    document.getElementById('fight-dialogue-box').style.display = 'block'
    document.getElementById('fight-dialogue').style.display = 'block'
    document.getElementById('proceed-button').textContent = 'Next...'
    document.getElementById('proceed-button').addEventListener('click', firstRoundPreludeDialogue)
}

function firstRoundPreludeDialogue() {
    document.getElementById('enemy-animation-display').style.animation = 'cat-fight 0.7s steps(7) infinite'
    document.getElementById('fight-dialogue').innerText = "Oh shit ! Fluffy's possessed!"
    document.getElementById('proceed-button').removeEventListener('click', firstRoundPreludeDialogue)
    document.getElementById('proceed-button').addEventListener('click', firstRoundPreludeDialogueTwo)
    document.getElementById('proceed-button').focus()

}

function firstRoundPreludeDialogueTwo() {
    document.getElementById('fight-dialogue').innerText = "I better put these rosary beads to use."
    document.getElementById('proceed-button').removeEventListener('click', firstRoundPreludeDialogueTwo)
    document.getElementById('proceed-button').addEventListener('click', typingRoundOne)
    document.getElementById('proceed-button').focus()
}



function typingRoundOne() {
    document.getElementById('proceed-button').removeEventListener('click', typingRoundOne)
    document.getElementById('fight-dialogue').style.display = 'none'
    document.getElementById('proceed-button-box').style.display = 'none'
    document.getElementById('fight-dialogue-box').style.display = 'none'
    document.getElementById('prayer-display-box').style.display = 'block'
    document.getElementById('prayer-display-area').style.display = 'block'
    document.getElementById('player-input-box').style.display = 'block'
    document.getElementById('player-input-area').style.display = 'block'
    document.getElementById('player-input-area').focus()

    let randomNumber = Math.floor(Math.random() * 20)
    let prayerSelection = prayerArray[randomNumber]
    prayerSelection.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        document.getElementById('prayer-display-box').appendChild(characterSpan)
    })

    countdownInterval = setInterval(function () {
        timer--;
        timerElement.innerText = timer.toString(); // Convert timer to string for display

        if (timer <= 0) {
            clearInterval(countdownInterval); // Stop the interval when the countdown reaches 0
            loseGame();
        }
    }, 1000);
    document.getElementById('timer-box').style.display = 'block'
    document.getElementById('timer').style.display = 'block'


    document.getElementById('player-input-box').addEventListener('input', () => {
        const allPrayerSpans = document.getElementById('prayer-display-box').querySelectorAll('span')
        const allPlayerInputs = document.getElementById('player-input-area').value.split('')

        let correct = true
        allPrayerSpans.forEach((characterSpan, index) => {
            const character = allPlayerInputs[index]
            if (character == null) {
                characterSpan.classList.remove('correct')
                characterSpan.classList.remove('incorrect')
                correct = false
            } else if (character === characterSpan.innerText) {
                characterSpan.classList.add('correct')
                characterSpan.classList.remove('incorrect')
            } else {
                characterSpan.classList.remove('correct')
                characterSpan.classList.add('incorrect')
                correct = false
            }
        })

        if (correct && timer > 0) {
            clearInterval(countdownInterval)
            document.getElementById('timer').innerText = "10"
            document.getElementById('timer-box').style.display = 'none'
            document.getElementById('timer').style.display = 'none'
            document.getElementById('enemy-animation-display').style.animation = "cat-defeat 2.5s steps(25) normal";
            setTimeout(function () {
                document.getElementById('player-input-box').style.display = 'none'
                document.getElementById('fight-dialogue-box').style.display = 'block'
                document.getElementById('fight-dialogue').style.display = 'block'
                document.getElementById('prayer-display-box').innerHTML = '<p id="prayer-display-area"></p>'
                document.getElementById('fight-dialogue').innerText = "Good cat..."

                document.getElementById('prayer-display-box').style.display = 'none'
                document.getElementById('prayer-display-area').style.display = 'none'

            }, 10)
            setTimeout(function () {
                document.getElementById('enemy-animation-box').style.display = 'none'
                document.getElementById('enemy-animation-display').style.display = 'none'
                document.getElementById('enemy-animation-display').src = 'assets/images/skeleton-sprite-sheet.png'
                document.getElementById('fight-dialogue-box').style.display = 'none'
                document.getElementById('enemy-animation-display').style.animation = ''
                document.getElementById('enemy-animation-display').style.animation = 'skeleton-intro 0.7s steps(7) normal'
                document.getElementById('enemy-animation-display').style.width = '5632px'
                document.getElementById('fight-dialogue').style.display = 'none'
                document.getElementById('proceed-button-box').style.display = 'block'
                document.getElementById('player-input-area').value = ''
                document.getElementById('proceed-button').innerText = 'Continue'
                document.getElementById('proceed-button').addEventListener('click', secondRoundPrelude)
                document.getElementById('proceed-button').focus()

            }, 3000)

        } else {
            loseGame()
        }
    })

}

timerElement.innerText="10"
clearInterval(countdownInterval)

function secondRoundPrelude() {
    document.getElementById('proceed-button').removeEventListener('click', secondRoundPrelude)
    document.getElementById('enemy-animation-box').style.display = 'block'
    document.getElementById('enemy-animation-display').style.display = 'block'
    document.getElementById('enemy-animation-display').addEventListener('animationend', secondRoundPreludeDialogue)
}

function secondRoundPreludeDialogue() {
    document.getElementById('enemy-animation-display').removeEventListener('animationend', secondRoundPreludeDialogue)
    document.getElementById('enemy-animation-display').style.animation = ''
    document.getElementById('enemy-animation-display').style.animation = 'skeleton-fight 0.4 steps(2) infinite'
    document.getElementById('fight-dialogue').innerText = "... Uncle Joe. I bet this is your fault."
    document.getElementById('fight-dialogue-box').style.display = 'block'
    document.getElementById('fight-dialogue').style.display = 'block'
    document.getElementById('proceed-button-box').style.display = 'block'
    document.getElementById('proceed-button').focus()

    document.getElementById('proceed-button').textContent = 'Next...'
    document.getElementById('proceed-button').addEventListener('click', secondRoundPreludeDialogueTwo)
}

function secondRoundPreludeDialogueTwo() {
    document.getElementById('proceed-button').removeEventListener('click', secondRoundPreludeDialogueTwo)
    document.getElementById('fight-dialogue').innerText = "I've always had a bone to pick with ya, ya bollix."
    document.getElementById('proceed-button').addEventListener('click', typingRoundTwo)
}

function typingRoundTwo() {
    document.getElementById('proceed-button').removeEventListener('click', typingRoundTwo)
    document.getElementById('player-input-area').focus()
    document.getElementById('prayer-display-box').innerHTML = '<p id="prayer-display-area"></p>'
    document.getElementById('fight-dialogue').style.display = 'none'
    document.getElementById('proceed-button-box').style.display = 'none'
    document.getElementById('fight-dialogue-box').style.display = 'none'
    document.getElementById('prayer-display-box').style.display = 'block'
    document.getElementById('prayer-display-area').style.display = 'block'
    document.getElementById('player-input-box').style.display = 'block'
    document.getElementById('player-input-area').style.display = 'block'

    let randomNumber = Math.floor(Math.random() * 20)
    let prayerSelection = prayerArray[randomNumber]
    prayerSelection.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        document.getElementById('prayer-display-box').appendChild(characterSpan)
    })

    countdownInterval = setInterval(function () {
        timer--;
        timerElement.innerText = timer.toString(); // Convert timer to string for display

        if (timer <= 0) {
            clearInterval(countdownInterval); // Stop the interval when the countdown reaches 0
            loseGame();
        }
    }, 1000);
    document.getElementById('timer-box').style.display = 'block'
    document.getElementById('timer').style.display = 'block'

    document.getElementById('player-input-box').addEventListener('input', () => {
        const allPrayerSpans = document.getElementById('prayer-display-box').querySelectorAll('span')
        const allPlayerInputs = document.getElementById('player-input-area').value.split('')

        let correct = true
        allPrayerSpans.forEach((characterSpan, index) => {
            const character = allPlayerInputs[index]
            if (character == null) {
                characterSpan.classList.remove('correct')
                characterSpan.classList.remove('incorrect')
                correct = false
            } else if (character === characterSpan.innerText) {
                characterSpan.classList.add('correct')
                characterSpan.classList.remove('incorrect')
            } else {
                characterSpan.classList.remove('correct')
                characterSpan.classList.add('incorrect')
                correct = false
            }
        })

        if (correct && timer > 0) {
            clearInterval(countdownInterval)
            document.getElementById('timer').innerText = '10'
            document.getElementById('timer-box').style.display = 'none'
            document.getElementById('timer').style.display = 'none'
            document.getElementById('enemy-animation-display').style.animation = "";
            document.getElementById('enemy-animation-display').style.animation = "skeleton-defeat 2.2s steps(11) normal";
            setTimeout(function () {
                document.getElementById('player-input-box').style.display = 'none'
                document.getElementById('fight-dialogue-box').style.display = 'block'
                document.getElementById('fight-dialogue').style.display = 'block'
                document.getElementById('prayer-display-box').innerHTML = '<p id="prayer-display-area"></p>'
                document.getElementById('fight-dialogue').innerText = "Good riddance..."

                document.getElementById('prayer-display-box').style.display = 'none'
                document.getElementById('prayer-display-area').style.display = 'none'

            }, 10)
            setTimeout(function () {
                document.getElementById('enemy-animation-box').style.display = 'none'
                document.getElementById('enemy-animation-display').style.display = 'none'
                document.getElementById('enemy-animation-display').src = 'assets/images/girl-sprite-sheet.png'
                document.getElementById('enemy-animation-display').style.animation = ''
                document.getElementById('enemy-animation-display').style.animation = 'girl-intro 1.4s steps(7) normal'
                document.getElementById('enemy-animation-display').style.imageRendering = 'pixelated'
                document.getElementById('enemy-animation-display').style.width = '8960px'
                document.getElementById('fight-dialogue-box').style.display = 'none'
                document.getElementById('fight-dialogue').style.display = 'none'
                document.getElementById('proceed-button-box').style.display = 'block'
                document.getElementById('player-input-area').value = ''
                document.getElementById('proceed-button').focus()

                document.getElementById('proceed-button').innerText = 'Continue'
                document.getElementById('proceed-button').addEventListener('click', thirdRoundPrelude)
            }, 3000)

        } else {
            loseGame()
        }
    })

}

function thirdRoundPrelude() {
    document.getElementById('proceed-button').removeEventListener('click', thirdRoundPrelude)
    document.getElementById('enemy-animation-box').style.display = 'block'
    document.getElementById('enemy-animation-display').style.display = 'block'
    document.getElementById('enemy-animation-display').addEventListener('animationend', thirdRoundPreludeDialogue)
}

function thirdRoundPreludeDialogue() {
    document.getElementById('enemy-animation-display').removeEventListener('animationend', thirdRoundPreludeDialogue)
    document.getElementById('enemy-animation-display').style.animation = 'girl-fight 0.8s steps(4) infinite'
    document.getElementById('fight-dialogue').innerText = "Oh no! Times have been tough alright since I've been gone."
    document.getElementById('fight-dialogue-box').style.display = 'block'
    document.getElementById('fight-dialogue').style.display = 'block'
    document.getElementById('proceed-button-box').style.display = 'block'
    document.getElementById('proceed-button').textContent = 'Next...'
    document.getElementById('proceed-button').focus()

    document.getElementById('proceed-button').addEventListener('click', thirdRoundPreludeDialogueTwo)
}



function thirdRoundPreludeDialogueTwo() {
    document.getElementById('proceed-button').removeEventListener('click', thirdRoundPreludeDialogueTwo)
    document.getElementById('fight-dialogue').innerText = "Luckily, I'm class at being a priest."
    document.getElementById('prayer-display-box').innerHTML = '<p id="prayer-display-area"></p>'
    document.getElementById('proceed-button').focus()

    document.getElementById('proceed-button').addEventListener('click', typingRoundThree)
}

function typingRoundThree() {
    document.getElementById('proceed-button').removeEventListener('click', typingRoundThree)
    document.getElementById('player-input-area').focus()

    document.getElementById('fight-dialogue').style.display = 'none'
    document.getElementById('proceed-button-box').style.display = 'none'
    document.getElementById('fight-dialogue-box').style.display = 'none'
    document.getElementById('prayer-display-box').innerHTML = '<p id="prayer-display-area"></p>'

    document.getElementById('prayer-display-box').style.display = 'block'
    document.getElementById('prayer-display-area').style.display = 'block'
    document.getElementById('player-input-box').style.display = 'block'
    document.getElementById('player-input-area').style.display = 'block'

    let randomNumber = Math.floor(Math.random() * 20)
    let prayerSelection = prayerArray[randomNumber]
    prayerSelection.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        document.getElementById('prayer-display-box').appendChild(characterSpan)
    })

    countdownInterval = setInterval(function () {
        timer--;
        timerElement.innerText = timer.toString(); // Convert timer to string for display

        if (timer <= 0) {
            clearInterval(countdownInterval); // Stop the interval when the countdown reaches 0
            loseGame();
        }
    }, 1000);

    document.getElementById('timer-box').style.display = 'block'
    document.getElementById('timer').style.display = 'block'


    document.getElementById('player-input-box').addEventListener('input', () => {
        const allPrayerSpans = document.getElementById('prayer-display-box').querySelectorAll('span')
        const allPlayerInputs = document.getElementById('player-input-area').value.split('')

        let correct = true
        allPrayerSpans.forEach((characterSpan, index) => {
            const character = allPlayerInputs[index]
            if (character == null) {
                characterSpan.classList.remove('correct')
                characterSpan.classList.remove('incorrect')
                correct = false
            } else if (character === characterSpan.innerText) {
                characterSpan.classList.add('correct')
                characterSpan.classList.remove('incorrect')
            } else {
                characterSpan.classList.remove('correct')
                characterSpan.classList.add('incorrect')
                correct = false
            }
        })

        if (correct && timer > 0) {
            clearInterval(countdownInterval)
            document.getElementById('timer').innerText = '10'
            document.getElementById('timer-box').style.display = 'none'
            document.getElementById('timer').style.display = 'none'
            document.getElementById('enemy-animation-display').style.animation = "girl-defeat 4.4s steps(22) normal";
            setTimeout(function () {
                document.getElementById('player-input-box').style.display = 'none'
                document.getElementById('fight-dialogue-box').style.display = 'block'
                document.getElementById('fight-dialogue').style.display = 'block'
                document.getElementById('prayer-display-box').innerHTML = '<p id="prayer-display-area"></p>'
                document.getElementById('fight-dialogue').innerText = "Phew..."

                document.getElementById('prayer-display-box').style.display = 'none'
                document.getElementById('prayer-display-area').style.display = 'none'

            }, 10)
            setTimeout(function () {
                document.getElementById('enemy-animation-box').style.display = 'none'
                document.getElementById('enemy-animation-display').style.display = 'none'
                document.getElementById('fight-dialogue-box').style.display = 'none'
                document.getElementById('fight-dialogue').style.display = 'none'
                document.getElementById('proceed-button-box').style.display = 'block'
                document.getElementById('player-input-area').value = ''
                document.getElementById('proceed-button').innerText = 'Continue'
                document.getElementById('proceed-button').addEventListener('click', outroCinematic)
                document.getElementById('proceed-button').focus()

            }, 3000)

        } else {
            loseGame()
        }
    })

}

function outroCinematic() {
    document.getElementById('intro-cinematic-box').style.display = 'none'
    document.getElementById('enemy-animation-box').style.display = 'none'
    document.getElementById('enemy-animation-display').style.display = 'none'
    document.getElementById('fight-dialogue-box').style.display = 'none'
    document.getElementById('fight-dialogue').style.display = 'none'
    document.getElementById('outro-proceed-button').removeEventListener('click', resetGame)
    document.getElementById('proceed-button').removeEventListener('click', outroCinematic)
    document.getElementById('proceed-button').style.display = 'none'
    document.getElementById('outro-cinematic-box').style.display = 'block'
    document.getElementById('outro-dialogue-box').style.display = 'block'
    document.getElementById('outro-dialogue').style.display = 'block'
    document.getElementById('outro-cinematic-display').style.display = 'block'
    document.getElementById('outro-proceed-button').addEventListener('click', outroCinematicDialogue)
    document.getElementById('outro-proceed-button').focus()
}

function outroCinematicDialogue() {
    document.getElementById('outro-proceed-button').removeEventListener('click', outroCinematicDialogue)
    document.getElementById('outro-dialogue-box').innerText = 'Typical. He was always ignorant enough.'
    document.getElementById('outro-proceed-button').addEventListener('click', outroCinematicDialogueTwo)
    document.getElementById('outro-proceed-button').focus()

}

function outroCinematicDialogueTwo() {
    document.getElementById('outro-proceed-button').removeEventListener('click', outroCinematicDialogueTwo)
    document.getElementById('outro-dialogue-box').innerText = "No harm no foul anyway, I suppose."
    document.getElementById('outro-proceed-button').addEventListener('click', outroCinematicDialogueThree)
    document.getElementById('outro-proceed-button').focus()

}

function outroCinematicDialogueTwo() {
    document.getElementById('outro-proceed-button').removeEventListener('click', outroCinematicDialogueTwo)
    document.getElementById('outro-dialogue-box').innerText = "Definitely deserve a tea after all that."
    document.getElementById('outro-proceed-button').addEventListener('click', outroCinematicDialogueThree)
    document.getElementById('outro-proceed-button').focus()


}

function outroCinematicDialogueThree() {
    document.getElementById('outro-proceed-button').removeEventListener('click', outroCinematicDialogueThree)
    document.getElementById('outro-cinematic-display').src = 'assets/images/tea-sheet.png'
    document.getElementById('outro-cinematic-display').style.animation = "tea-ending 1.6s steps(4) infinite"
    document.getElementById('outro-cinematic-display').style.width = '1024px'


    document.getElementById('outro-dialogue-box').innerText = "Definitely deserve a tea after all that."
    document.getElementById('outro-proceed-button').innerText = "Return to Main Menu"

    document.getElementById('outro-dialogue-box').innerText = "The End."
    document.getElementById('outro-proceed-button').addEventListener('click', resetGame)
    document.getElementById('outro-proceed-button').focus()


}

function resetGame() {
    window.location.reload();
}

function runTimer() {
    countdownInterval = setInterval(function () {
        timer--;
        timerElement.innerText = timer.toString(); // Convert timer to string for display

        if (timer <= 0) {
            clearInterval(countdownInterval); // Stop the interval when the countdown reaches 0
            console.log("Countdown finished!");
        }
    }, 1000);
}

function loseGame() {
    document.getElementById('timer').style.display = 'flex'
    document.getElementById('timer').style.flexDirection = 'column'

    document.getElementById('prayer-display-box').style.display = 'none'
    document.getElementById('prayer-display-area').style.display = 'none'
    document.getElementById('player-input-box').style.display = 'none'
    document.getElementById('player-input-area').style.display = 'none'
    document.getElementById('enemy-animation-box').style.display = 'none'
    document.getElementById('enemy-animation-display').style.display = 'none'

    document.getElementById('timer').innerHTML = 'You lose! Try again'
    let button = document.createElement('button')
    button.innerText = 'Retry'
    button.style.textAlign = 'center'
    button.style.color = 'red'
    document.getElementById('timer').appendChild(button)
    document.getElementById('timer').addEventListener('click', () => {
        resetGame()
    })



}

// function resetGame() {
//     let heading = document.getElementById("heading")
//     heading.style.display = "flex"
//     let menu = document.getElementById("opening-menu-bar")
//     menu.style.display = "flex"
//     let display = document.getElementById("intro-animation-box")
//     display.style.display = "block"
//     document.getElementById('outro-cinematic-box').style.display = 'none'
//     document.getElementById("intro-animation-display").style.display='block'



// }