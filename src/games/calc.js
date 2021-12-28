import gamePlay from '../index.js';
import randomNum from '../utils.js';

const getRandomSymbol = () => {
  const arrOfSymbols = ['+', '-', '*'];
  const random = arrOfSymbols[randomNum(0, arrOfSymbols.length - 1)];
  return random;
};
const getAnswer = (num1, num2, randomSymbol) => { // эта функция возвращает правильный ответ
  let result = 0;
  switch (randomSymbol) {
    case '*':
      result = num1 * num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = null;
  }
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

export default calculate;
