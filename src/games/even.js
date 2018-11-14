import { cons } from 'hexlet-pairs';
import { getRandomNum, isEven } from '../utils';
import runGame from '../game';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const generateGameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export default () => runGame(gameDescription, generateGameData);
