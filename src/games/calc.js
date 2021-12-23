import gamePlay from '../index.js';
import randomNum from '../utils.js';

const getRandomSymbol = () => {
  const arrOfSymbols = ['+', '-', '*'];
  const random = arrOfSymbols[randomNum(0, arrOfSymbols.length - 1)];
  return random;
};

const getGameData = () => {
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
  const data = [question, answer];
  return data;
};
const ruleGame = 'What is the result of the expression?';

const calculate = () => {
  const isGame = gamePlay(getGameData, ruleGame);
  return isGame;
};

export default calculate();
