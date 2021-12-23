import randomNum from '../utils.js';

export const getGameData = () => {
  const getArrProgression = () => {
    const progression = [];
    const arrLength = randomNum(10, 6);
    const begin = randomNum(5, 1);
    const step = randomNum(4, 2);
    for (let j = begin; progression.length < arrLength; j += step) {
      progression.push(j);
    }
    return progression; // возвращаем массив чисел в арифметической прогрессии
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
export const ruleGame = 'What number is missing in the progression?';
