import { randomNum } from '../cli.js';

export const getGameData = () => {
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
