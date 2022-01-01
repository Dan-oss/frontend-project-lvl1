import randomNum from '../utils.js';
import gamePlay from '../index.js';

const isPrime = (num) => {
  let result = 'yes';
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};
const getGameData = () => {
  const max = 20;
  const min = 3;
  const num = randomNum(min, max);
  const answer = isPrime(num);
  const question = `Question: ${num}`;
  const gameData = [question, answer];
  return gameData;
};
const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const primeGame = () => gamePlay(getGameData, ruleGame);

export default primeGame;
