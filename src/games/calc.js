import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import runGame from '../game';

const gameDescription = 'What is the result of the expression?';

const generateGameData = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const sign = getRandomNum(1, 3);

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
    default: break;
  }
  return cons(question, String(answer));
};

export default () => runGame(gameDescription, generateGameData);
