import { cons } from 'hexlet-pairs';
import { getRandomNum } from '../utils';
import runGame from '../game';

const gameDescription = 'Find the greatest common divisor of given numbers';
const gcd = (num1, num2) => (num1 === 0 ? num2 : gcd(num2 % num1, num1));

const generateGameData = () => {
  const maxValue = 20;
  const num1 = getRandomNum(1, maxValue);
  const num2 = getRandomNum(1, maxValue);

  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);

  return cons(question, String(answer));
};

export default () => runGame(gameDescription, generateGameData);
