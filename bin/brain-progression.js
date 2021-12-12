#!/usr/bin/env node

import readlineSync from 'readline-sync';
const userName = readlineSync.question('May I have your name? ');
const returnName = () => {
    console.log('Welcome to the Brain Games!');
    userName;
    console.log(`Hello ${userName}!`);
  };




const progression = (arr) => {
    let iter = false;
    const getArrProgression = () => {
        const arr = [];
        const arrLength = Math.floor(Math.random() * (10 - 6)) + 6;
        let begin = Math.floor(Math.random() * (5 - 1)) + 1;
        let step = Math.floor(Math.random() * (5 - 2)) + 2;
        for (let i = begin; arr.length < arrLength; i += step) {
          arr.push(i);
        };
        return arr;
      };
    const hideValue = (arr) => {
        const positionInArr = Math.floor(Math.random() * arr.length);
        arr[positionInArr] = '..';
        return arr.join(' ');
        };

    for(let i = 0; i < 3; i += 1) {
        console.log (`Question: ${hideValue(getArrProgression)} `);
        const answer = readlineSync.question(`Your answer: ` );
        if (answer === arr[positionInArr]) {
            iter = true;
            console.log('Correct');
        }
        if (answer !== arr[positionInArr]) { console.log(`${answer} is wrong answer ;(. Correct answer was ${arr[positionInArr]}. \nLet's try again, ${userName}!`);
            iter = false;
            break;
            }
  };
}

  returnName();
  console.log('What number is missing in the progression?');
  progression();