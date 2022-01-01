import gamePlay from '../index.js';
import randomNum from '../utils.js';

const getGCD = (a, b) => (a !== 0 ? getGCD(b % a, a) : b);
const getGameData = () => {
  const max = 50;
  const min = 1;
  const num1 = randomNum(min, max);
  const num2 = randomNum(min, max);
  const answer = String(getGCD(num1, num2));
  const question = `Question: ${num1} ${num2} `;
  const gameData = [question, answer];
  return gameData;
};
const ruleGame = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => gamePlay(getGameData, ruleGame);

export default gameGcd;
