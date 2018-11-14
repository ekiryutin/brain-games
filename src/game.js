import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getQuestion = info => car(info);

const getAnswer = info => cdr(info);

const maxSteps = 3;

const playRound = (generateGameData) => {
  const gameData = generateGameData();
  const question = getQuestion(gameData);
  const correctAnswer = getAnswer(gameData);

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ').toLowerCase();
  const isCorrect = answer === correctAnswer;
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return isCorrect;
};

const runGame = (gameDescription, generateGameData) => {
  console.log('\nWelcome to the Brain Games!'); // showWelcome
  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let n = 0; n < maxSteps; n += 1) {
    if (playRound(generateGameData) === false) {
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default runGame;
