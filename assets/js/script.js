// Wait for the DOM to finish loading the game
// Get the button elements and add event listeneres to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            }
            else {
                let gameType= this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", callled when the first script is loaded
 * and after the user's answer has been processed
 */

function runGame(){

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function inrementScore(){

}

function inrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQueston(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}
