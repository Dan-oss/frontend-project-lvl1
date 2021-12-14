#!/usr/bin/env node

import readlineSync from "readline-sync";

const userName = readlineSync.question("May I have your name? ");
const returnName = () => {
  console.log("Welcome to the Brain Games!");
  userName;
  console.log(`Hello ${userName}!`);
};

const getArrProgression = () => {
  const arr1 = [];
  const arrLength = Math.floor(Math.random() * (10 - 6)) + 6;
  const begin = Math.floor(Math.random() * (5 - 1)) + 1;
  const step = Math.floor(Math.random() * (5 - 2)) + 2;
  for (let i = begin; arr1.length < arrLength; i += step) {
    arr1.push(i);
  }
  return arr1; // возвращаем массив чисел в арифметической прогрессии
};
const arrProgression = getArrProgression();
console.log('point1  '+ arrProgression);

const positionInArr = () => Math.floor(Math.random() * 8); // возвращаем произвольную позицию в массиве
const position = positionInArr();
console.log('point2  '+ position);

const hideValue = (position, arrProgression) => {
  const hiddenPosition = arrProgression;
  hiddenPosition[position] = "..";
  return hiddenPosition.join(" "); // заменяем число в массиве символами "**" и возвращаем строку
};

console.log('point111  '+ arrProgression);
const strHiddenPosition = hideValue(position, arrProgression);
console.log('point3  '+ strHiddenPosition);
console.log('point222  '+ arrProgression);
console.log('point4  '+ arrProgression[position]);

const progression = () => {
  let iter = false;

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${strHiddenPosition} `);
    const answer = readlineSync.question("Your answer: ");
    if (answer === arrProgression[position]) {
      iter = true;
      console.log("Correct");
    }
    if (answer !== arrProgression[position]) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${arrProgression[position]}. \nLet's try again, ${userName}!`
      );
      iter = false;
      break;
    }
  }
  if (iter = true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

returnName();
console.log("What number is missing in the progression?");
progression();
