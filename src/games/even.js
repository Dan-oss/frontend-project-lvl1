import randomNum from '../utils.js';
import gamePlay from '../index.js';

const isEven = (number) => number % 2 === 0;
const getGameData = () => {
  const max = 10;
  const min = 1;
  const num = randomNum(min, max);
  const answer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;
  const gameData = [question, answer];
  return gameData;
};
const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameEven = () => gamePlay(getGameData, ruleGame);

export default gameEven;
