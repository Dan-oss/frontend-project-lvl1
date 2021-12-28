import randomNum from '../utils.js';

const isEven = (number) => number % 2 === 0;
export const getGameData = () => {
  const max = 10;
  const min = 1;
  const num = randomNum(min, max);
  const answer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;
  const data = [question, answer];
  return data;
};
export const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
