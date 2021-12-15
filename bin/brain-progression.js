#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const returnName = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-unused-expressions
  userName;
  console.log(`Hello ${userName}!`);
};

const progression = () => {
  let iter = false;

  for (let i = 0; i < 3; i += 1) {
    const getArrProgression = () => {
      const arr1 = [];
      const arrLength = Math.floor(Math.random() * (10 - 6)) + 6;
      const begin = Math.floor(Math.random() * (5 - 1)) + 1;
      const step = Math.floor(Math.random() * (5 - 2)) + 2;
      for (let j = begin; arr1.length < arrLength; j += step) {
        arr1.push(j);
      }
      return arr1; // возвращаем массив чисел в арифметической прогрессии
    };
    const arrProgression = getArrProgression();

    const positionInArr = () => Math.floor(Math.random() * 8);
    const position = positionInArr();

    // eslint-disable-next-line no-shadow
    const hideValue = (position, arrProgression) => {
      const hiddenPosition = arrProgression.slice();
      hiddenPosition[position] = '..';
      return hiddenPosition.join(' '); // заменяем число в массиве символами "**" и возвращаем строку
    };

    const strHiddenPosition = hideValue(position, arrProgression);
    console.log(`Question: ${strHiddenPosition} `);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === arrProgression[position]) {
      iter = true;
      console.log('Correct');
    }
    if (answer !== arrProgression[position]) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${arrProgression[position]}. \nLet's try again, ${userName}!`,
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
console.log('What number is missing in the progression?');
progression();
