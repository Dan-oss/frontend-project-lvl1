#!/usr/bin/env node
// import {} from '../src/even.js';
// import returnName from '../src/cli.js';
import readlineSync from 'readline-sync';

const randomNum = (max, min) => Math.floor(Math.random() * (max - min)) + min; // это пойдет в cli.js
const calc = () => { // это пойдет в новый файл, описывающий именно эту игру 
  const max = 10;
  const min = 1;
  const num1 = randomNum(max, min);
  const num2 = randomNum(max, min);
  const answer = num1 + num2;
  const question = `Question: ${num1} + ${num2} `;
  const arr = [question, answer];
  return arr;
};
const rulesGame = 'What is the result of the expression?';

const gamePlay = () => { // это описание общей игровой логики и пойдет в index.js
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestions, rigthAnswer] = calc();
    console.log(gameQuestions);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer !== rigthAnswer) {
      return console.log(
        `${answer} is wrong answer ;(. Correct answer was ${rigthAnswer}. \nLet's try again, ${userName}!`,
      );
    }
    console.log('Correct');
  }

  return console.log(`Congratulations, ${userName}!`);
};

gamePlay();

