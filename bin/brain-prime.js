#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const returnName = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-unused-expressions
  userName;
  console.log(`Hello ${userName}!`);
};

const prime = () => {
  let iter = false;
  let result = 'yes';
  for (let j = 0; j < 3; j += 1) {
    const num = Math.floor(Math.random() * (20 - 3)) + 3;
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        result = 'no';
        break;
      }
    }
    console.log(`Question: ${num} `);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      iter = true;
      console.log('Correct');
    }
    if (answer !== result) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`,
      );
      iter = false;
      break;
    }
  }
  if (iter === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

returnName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
prime();