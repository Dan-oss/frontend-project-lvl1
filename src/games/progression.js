import { randomNum } from '../cli.js';

export const getGameData = () => {
  const getArrProgression = () => {
    const arr1 = [];
    const arrLength = randomNum(10, 6);
    const begin = randomNum(5, 1);
    const step = randomNum(4, 2);
    for (let j = begin; arr1.length < arrLength; j += step) {
      arr1.push(j);
    }
    return arr1; // возвращаем массив чисел в арифметической прогрессии
  };
  const arrProgression = getArrProgression();
  const positionInArr = randomNum(5, 1);

  const hideValue = (position, progression) => {
    const hiddenPosition = progression.slice();
    hiddenPosition[position] = '..';
    return hiddenPosition.join(' '); // заменяем число в массиве символами "**" и возвращаем строку
  };
  const answer = String(arrProgression[positionInArr]);
  const question = `Question: ${hideValue(positionInArr, arrProgression)} `;
  const data = [question, answer];
  return data;
};
export const rulesGame = 'What number is missing in the progression?';
