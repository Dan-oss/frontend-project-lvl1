#!/usr/bin/env node
/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { randomNum } from "../../src/cli.js";
import { gamePlay } from "../../src/index.js";

const gameDate = () => {
  const max = 50;
  const min = 1;
  const num1 = randomNum(max, min);
  const num2 = randomNum(max, min);
  const answer = (num1, num2) => {
    let divisor = 1;
    for (let i = 2; i <= num1; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        divisor = i;
      }
    }
    return String(divisor);
  };
  const question = `Question: ${num1} ${num2} `;

  const arr = [question, answer(num1, num2)];
  return arr;
};
const rulesGame = 'Find the greatest common divisor of given numbers.';

const gameGcd = gamePlay(gameDate, rulesGame);

export default gameGcd;
