import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getQuestion = info => car(info);

const getAnswer = info => cdr(info);


const ask = (nextRound) => {
  const roundInfo = nextRound();
  const question = getQuestion(roundInfo);
  const correctAnswer = getAnswer(roundInfo);

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ').toLowerCase();
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return answer === correctAnswer;
};

const runGame = (gameDescription, nextRound) => {
  console.log('\nWelcome to the Brain Games!'); // showWelcome
  console.log(gameDescription());

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const maxSteps = 3;
  for (let n = 0; n < maxSteps; n += 1) {
    if (ask(nextRound) === false) {
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default runGame;
