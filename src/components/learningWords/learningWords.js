import './learningWords.scss';
import renderContent from './renderContent';
import setStartPosition from './setStartPosition';
import checkInput from './checkInput';
import setWordsToProps from './setWordsToProps';
import setInputWidth from './setInputWidth';
import goToTheNextWord from './goToTheNextWord';

export default async function learningWords() {
  setStartPosition();
  await setWordsToProps();
  renderContent();
  setInputWidth();
  checkInput();
  goToTheNextWord();
}
