/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { randomNum } from '../../src/cli.js';

export const gameDate = () => {
  const max = 10;
  const min = 1;
  const num = randomNum(max, min);

  const answer = num % 2 === 0 ? 'yes' : 'no';
  const question = `Question: ${num}`;
  const arr = [question, answer];
  return arr;
};
export const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
