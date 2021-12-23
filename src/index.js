import readlineSync from 'readline-sync';

const gamePlay = (gameData, ruleGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(ruleGame);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestions, rigthAnswer] = gameData();
    console.log(gameQuestions);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rigthAnswer) {
      return console.log(
        `${answer} is wrong answer ;(. Correct answer was ${rigthAnswer}. \nLet's try again, ${userName}!`,
      );
    }
    console.log('Correct');
  }

  return console.log(`Congratulations, ${userName}!`);
};
export default gamePlay;
