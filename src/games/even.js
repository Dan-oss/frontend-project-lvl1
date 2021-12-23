import { randomNum } from '../cli.js';

export const getGameData = () => {
  const max = 10;
  const min = 1;
  const num = randomNum(max, min);

  const answer = num % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${num}`;
  const data = [question, answer];
  return data;
};
export const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
