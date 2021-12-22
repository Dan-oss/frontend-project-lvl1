import { randomNum } from '../cli.js';

export const gameDate = () => {
  const max = 20;
  const min = 3;
  const num1 = randomNum(max, min);
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
  const arr = [question, answer(num1)];
  return arr;
};
export const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
