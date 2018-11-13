import { cons, car, cdr, toString } from 'hexlet-pairs';
import runGame from '../game';

const isEven = num => num % 2 === 0;
const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameDescription = () => 'What is the result of the expression?\n';

const nextRound = () => {
  const num1 = getRandomNum(1,100);
  const num2 = getRandomNum(1,100);
  const sign = getRandomNum(1,3);

  let question = '';
  let answer = '';
  switch (sign) {
    case 1:
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2:
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 3:
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
  }
  return cons(question, String(answer));
};

// const getQuestion = info => car(info);

// const getAnswer = info => cdr(info);

const main = () => {
  runGame(gameDescription, nextRound);
};

export default main;
