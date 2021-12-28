import randomNum from '../utils.js';

export const getGameData = () => {
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
  const arrProgression = getArrProgression();
  const positionInArr = randomNum(1, 5);

  const hideValue = (position, progression) => {
    const hiddenPosition = progression.slice();
    hiddenPosition[position] = '..';
    return hiddenPosition.join(' '); // заменяем число в массиве символами "**" и возвращаем строку
  };
  const answer = String(arrProgression[positionInArr]);
  const question = `Question: ${hideValue(positionInArr, arrProgression)} `;
  const gameData = [question, answer];
  return gameData;
};
export const ruleGame = 'What number is missing in the progression?';
