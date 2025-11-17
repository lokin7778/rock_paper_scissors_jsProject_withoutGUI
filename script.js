/**
 * SMALL DESCRIPTION OF THE PROGRAM - This program is a small game of rock, paper scissors which is played on the console by the user and which does not include and GUI as of now. 
 * 
 * @author - Lokesh Narasimhan
 * @version - 11/17/2025
 */

// create a new function named getComputerChoice

function getComputerChoice(){
    let compChoiceNum = Math.round(Math.random()*2);
    console.log(compChoiceNum);
}

getComputerChoice();
getComputerChoice();
getComputerChoice();