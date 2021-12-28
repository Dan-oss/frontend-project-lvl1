import gamePlay from '../index.js';
import randomNum from '../utils.js';

const getRandomSymbol = () => {
  const arrOfSymbols = ['+', '-', '*'];
  const random = arrOfSymbols[randomNum(0, arrOfSymbols.length - 1)];
  return random;
};
const getAnswer = (num1, num2, randomSymbol) => {
  let result = 0;
  if (randomSymbol === '*') {
    result = num1 * num2;
  }
  if (randomSymbol === '-') {
    result = num1 - num2;
  } else result = num1 + num2;
  return String(result);
};

const getGameData = () => {
  const randomSymbol = getRandomSymbol();
  const min = 1;
  const max = 10;
  const num1 = randomNum(min, max);
  const num2 = randomNum(min, max);

  const answer = getAnswer(num1, num2, randomSymbol);
  const question = `Question: ${num1} ${randomSymbol} ${num2} `;
  const data = [question, answer];
  return data;
};
const ruleGame = 'What is the result of the expression?';

export const calculate = () => gamePlay(getGameData, ruleGame);

export default calculate();
