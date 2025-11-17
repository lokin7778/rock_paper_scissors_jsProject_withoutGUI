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

console.log(getComputerChoice());