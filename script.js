/**
 * SMALL DESCRIPTION OF THE PROGRAM - This program is a small game of rock, paper scissors which is played on the console by the user and which does not include and GUI as of now. 
 * 
 * @author - Lokesh Narasimhan
 * @version - 11/17/2025
 */

// create a new function named getComputerChoice
/**
 * @param - no parameter
 * @returns - random choice of rock, paper or scissor.
 */

function getComputerChoice(){
    let compChoiceNum = Math.round(Math.random()*2); // generates a random number between 0 and 2 
    
    let compChoice;

    // switch case statement to check if the compChoiceNum equals something and then assigning the final computer's choice (compChoice) to hold either rock,paper or scissors.
    switch(compChoiceNum){
        case 0:
            compChoice = "Rock";
            break;

        case 1:
            compChoice = "Paper";
            break;
        
        case 2:
            compChoice = "Scissors";
            break;
    }

    return compChoice; // returns the variable compChoice
}

// create a function named getHumanChoice
/**
 * @param - none
 * @returns - choice of either rock, paper or scissor
 */

function getHumanChoice(){

    let userChoice = String(prompt("Enter a valid choice (either Rock, Paper or Scissor): "));

    return userChoice;
}

// create variables to keep a track of the human's score and the computer's score

let userScore = 0;
let compScore = 0;

    function playRound(compChoice, humanChoice){

        // converts the given paramters to lowercase for the method to work case insensitively
        let localCompChoice = compChoice.toLowerCase();
        let localHumanChoice = humanChoice.toLowerCase();

        // if-else statment with a bunch of conditions if either of the conditions pass
        if ((localCompChoice==="rock" && localHumanChoice==="scissors") || (localCompChoice==="paper" && localHumanChoice==="rock") || (localCompChoice==="scissors" && localHumanChoice==="paper")){

            console.log("You lose! " + localCompChoice + " beats " + localHumanChoice);

            compScore += 1; // increments the computer's score
        }

        else {
            console.log("Congratulations! You win! " + localHumanChoice + " beats " + localCompChoice);

            userScore += 1; // increments the user's score
        }
    }



// creates a function playGame() that calls playRound() 5 times, keep track of the score and then declare the winner in the end.
/**
 * @param - none
 * @returns - none
 */

function playGame(){

    // function to play a single round and then increment the player or the computer's score by one if they win.
    /**
     * @param - getCompChoice() and getHumanChoice()
     * @returns - none
     */



    // for-loop to iterate 5 times and call the function 5 times

    for (let i = 0; i<5; i++){

        // assings the variable names to the respective functions
        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        // calling the playRound() method
        playRound(compChoice,humanChoice);
    }

    // print the user Score as well as Computer Score
    console.log(userScore);
    console.log(compScore);
}

playGame();
