import randomNum from '../utils.js';

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
export const getGameData = () => {
  const max = 20;
  const min = 3;
  const num = randomNum(min, max);
  const answer = isPrime(num);
  const question = `Question: ${num}`;
  const gameData = [question, answer];
  return gameData;
};
export const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
