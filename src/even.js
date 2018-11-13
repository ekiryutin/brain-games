import readlineSync from 'readline-sync';

const main = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let correctAnswers = 0;
  for (let n = 0; n < 3; n += 1) {
    const num = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${num}`);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};

export default main;
