#!/usr/bin/env node
/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const returnName = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-unused-expressions
  userName;
  console.log(`Hello ${userName}!`);
};

returnName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = () => {
  let iter = false;

  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 10);
    console.log(`Question: ${num} `);
    const answer = readlineSync.question('Your answer: ');

    if (num % 2 === 0 && answer === 'yes') {
      iter = true;
      console.log('Correct');
    }

    if (num % 2 !== 0 && answer === 'no') {
      iter = true;
      console.log('Correct');
    }
    if (num % 2 === 0 && answer !== 'yes') {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`,
      );
      iter = false;
      break;
    }
    if (num % 2 !== 0 && answer !== 'no') {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`,
      );
      iter = false;
      break;
    }
  }
  if (iter === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

console.log(brainEven());
