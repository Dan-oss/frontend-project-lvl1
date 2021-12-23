import { randomNum } from '../cli.js';

export const getGameData = () => {
  const max = 50;
  const min = 1;
  const num1 = randomNum(max, min);
  const num2 = randomNum(max, min);
  const answer = () => {
    let divisor = 1;
    for (let i = 2; i <= num1; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        divisor = i;
      }
    }
    return String(divisor);
  };
  const question = `Question: ${num1} ${num2} `;

  const data = [question, answer];
  return data;
};
export const rulesGame = 'Find the greatest common divisor of given numbers.';
