import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import runGame from '../game';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const minValue = 1;
const maxValue = 100;

const generateGameData = () => {
  const question = getRandomNum(minValue, maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export default () => runGame(gameDescription, generateGameData);
