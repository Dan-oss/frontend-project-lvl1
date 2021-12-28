import gamePlay from '../index.js';
import randomNum from '../utils.js';

const getRandomOperator = () => {
  const arrOfOperator = ['+', '-', '*', '/'];
  const random = arrOfOperator[randomNum(0, arrOfOperator.length - 1)];
  return random;
};
const getAnswer = (num1, num2, randomSymbol) => { // эта функция возвращает результат выражения
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
  return result;
};

const getGameData = () => {
  const operator = getRandomOperator();
  const min = 1;
  const max = 10;
  const num1 = randomNum(min, max);
  const num2 = randomNum(min, max);

  const answer = String(getAnswer(num1, num2, operator));
  const question = `Question: ${num1} ${operator} ${num2} `;
  const gameData = [question, answer];
  return gameData;
};
const ruleGame = 'What is the result of the expression?';

export const calculate = () => gamePlay(getGameData, ruleGame);

export default calculate;
