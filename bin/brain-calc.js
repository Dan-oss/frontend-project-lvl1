#!/usr/bin/env node
//import {} from '../src/even.js';
//import returnName from '../src/cli.js';
import readlineSync from 'readline-sync';
const userName = readlineSync.question('May I have your name? ');
const returnName = () => {
    console.log('Welcome to the Brain Games!');
    userName;
    console.log(`Hello ${userName}!`);
  };
  
returnName();
console.log('What is the result of the expression?');

const brainCalc = () => {
    let iter = false;

    for(let i = 0; i < 3; i += 1) {
        const getRandomNum = Math.floor(Math.random() * 10);
        let num1 = getRandomNum;
        let num2 = getRandomNum;
        const sum = num1 + num2;
        console.log (`Question: ${num1} + ${num2} `);
        const answer = Number(readlineSync.question(`Your answer: ` ));
    if (answer === sum) {
        iter = true;
        console.log('Correct');
    }
    if (answer !== sum) { console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}. \nLet's try again, ${userName}!`);
        iter = false;
        break;
        }
    }
    
  if (iter === true) {
      console.log(`Congratulations, ${userName}!`);
  }
};
    



console.log(brainCalc());

