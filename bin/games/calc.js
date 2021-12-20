/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { randomNum } from '../../src/cli.js';

export const gameDate = () => {
  const max = 10;
  const min = 1;
  const num1 = randomNum(max, min);
  const num2 = randomNum(max, min);
  const answer = String(num1 + num2);
  const question = `Question: ${num1} + ${num2} `;
  const arr = [question, answer];
  return arr;
};
export const rulesGame = 'What is the result of the expression?';
