import { randomNum } from '../cli.js';

const getRandomSymbol = () => {
  const arr = ['+', '-', '*'];
  const random = arr[randomNum(0, arr.length - 1)];
  return random;
};

export const getGameData = () => {
  const randomSymbol = getRandomSymbol();
  const max = 10;
  const min = 1;
  const num1 = randomNum(max, min);
  const num2 = randomNum(max, min);
  const getAnswer = () => {
    let result = 0;
    if (randomSymbol === '*') {
      result = num1 * num2;
    }
    if (randomSymbol === '-') {
      result = num1 - num2;
    } else result = num1 + num2;
    return String(result);
  };
  const answer = getAnswer();
  const question = `Question: ${num1} ${randomSymbol} ${num2} `;
  const arr = [question, answer];
  return arr;
};
export const rulesGame = 'What is the result of the expression?';
