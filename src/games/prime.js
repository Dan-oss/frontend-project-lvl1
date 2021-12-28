import randomNum from '../utils.js';

export const getGameData = () => {
  const max = 20;
  const min = 3;
  const num1 = randomNum(min, max);
  const answer = () => {
    let result = 'yes';
    for (let j = 2; j < num1; j += 1) {
      if (num1 % j === 0) {
        result = 'no';
        break;
      }
    }
    return result;
  };
  const question = `Question: ${num1}`;
  const gameData = [question, answer(num1)];
  return gameData;
};
export const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
