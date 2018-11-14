import { cons } from 'hexlet-pairs';
import { getRandomNum } from '../utils';
import runGame from '../game';

const gameDescription = 'What number is missing in the progression?';

const length = 10; // размер прогрессии

const makeProgression = () => {
  const start = getRandomNum(1, 10);
  const step = getRandomNum(1, 10);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};


const generateGameData = () => {
  const progression = makeProgression();
  const indexHidden = getRandomNum(0, length - 1);

  const question = progression.map((item, index) => (index === indexHidden ? '..' : item)).join(' ');
  const answer = `${progression[indexHidden]}`;

  return cons(question, String(answer));
};

export default () => runGame(gameDescription, generateGameData);
