import gamePlay from '../index.js';
import randomNum from '../utils.js';

const getArrProgression = () => {
  const progression = [];
  const arrLength = randomNum(6, 10);
  const begin = randomNum(1, 5);
  const step = randomNum(2, 4);
  for (let j = begin; progression.length < arrLength; j += step) {
    progression.push(j);
  }
  return progression; // возвращаем массив чисел в арифметической прогрессии
};
const getGameData = () => {
  const arrProgression = getArrProgression();
  const positionInArr = randomNum(1, 5);
  const answer = String(arrProgression[positionInArr]);
  const hideValue = arrProgression.map((elem, index) => (index === positionInArr ? '..' : elem)).join(' ');
  const question = `Question: ${hideValue} `;
  const gameData = [question, answer];
  return gameData;
};
const ruleGame = 'What number is missing in the progression?';

const progressionGame = () => gamePlay(getGameData, ruleGame);

export default progressionGame;
