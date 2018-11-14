import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import runGame from '../game';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const generateGameData = () => {
  const start = getRandomNum(1, 10);
  const step = getRandomNum(1, 10);
  const length = 10;

  const progression = makeProgression(start, step, length);
  const hiddenElementIndex = getRandomNum(0, length - 1);

  const question = progression.map((item, index) => (index === hiddenElementIndex ? '..' : item)).join(' ');
  const answer = `${progression[hiddenElementIndex]}`;

  return cons(question, String(answer));
};

export default () => runGame(gameDescription, generateGameData);
