import './learningWords.scss';
import renderContent from './renderContent';
import setStartPosition from './setStartPosition';
import checkInput from './checkInput';
import setWordsToProps from './setWordsToProps';

export default async function learningWords() {
  await setStartPosition();
  await setWordsToProps();
  await renderContent();
  await checkInput();
}
