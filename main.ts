#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number - done
// 2)User input for guessing number - done
// 3)Compare user input with computer generated number and show result  - done

const randomNumber=Math.floor(Math.random() *6 +1)

console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
    name:"userGuessNumber",
    type:"number",
    message:"Please guess any number between 1-6:",
},
]);
if(answers.userGuessNumber===randomNumber){
    console.log("congratulation! you guessed right number. ");
}else{
    console.log("you guessed wrong number. ");
}