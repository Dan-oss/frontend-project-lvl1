import readlineSync from 'readline-sync';

export const returnName = readlineSync.question('May I have your name? ');
export const getRandomNum = Math.floor(Math.random() * 100);
export const returnAnswer = readlineSync.question(getRandomNum);
// eslint-disable-next-line no-mixed-operators
if (getRandomNum % 2 === 0 && returnAnswer === 'yes' || getRandomNum % 2 !== 0 && returnAnswer === 'no') {
  console.log('Correct!');
} else {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${returnName}!`);
}
