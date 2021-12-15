#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const returnName = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-unused-expressions
  userName;
  console.log(`Hello ${userName}!`);
};

returnName();
console.log('Find the greatest common divisor of given numbers.');

const brainGsd = () => {
  let iter = false;

  for (let j = 0; j < 3; j += 1) {
    const num1 = Math.floor(Math.random() * (100 - 50)) + 50;
    const num2 = Math.floor(Math.random() * 50);
    let divisor = 1;
    for (let i = 2; i < num1 / 2; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        divisor = i;
      }
    }
    console.log(`Question: ${num1} ${num2} `);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === divisor) {
      iter = true;
      console.log('Correct');
    }
    if (answer !== divisor) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${divisor}. \nLet's try again, ${userName}!`,
      );
      iter = false;
      break;
    }
  }

  if (iter === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainGsd();
