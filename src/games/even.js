import { cons } from 'hexlet-pairs';
import runGame from '../game';

const isEven = num => num % 2 === 0;
const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameDescription = () => 'Answer "yes" if number even otherwise answer "no".\n';

const nextRound = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, String(answer));
};

// const getQuestion = info => car(info);

// const getAnswer = info => cdr(info);

const main = () => {
  runGame(gameDescription, nextRound);
};

export default main;
