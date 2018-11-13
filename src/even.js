import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

const ask = () => {
  const question = getRandomNum();
  console.log(`Question: ${question}`);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ').toLowerCase();
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return answer === correctAnswer;
};

const main = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const maxSteps = 3;

  for (let n = 0; n < maxSteps; n += 1) {
    if (ask() === false) {
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default main;
