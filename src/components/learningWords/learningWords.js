import './learningWords.scss';
import renderContent from './renderContent';
import setStartPosition from './setStartPosition';
import checkInput from './checkInput';
import setProps from './setProps';
import setInputWidth from './setInputWidth';
import goToTheNextWord from './goToTheNextWord';
import fillCardDueToSettings from './fillCardDueToSettings';
import setTranslationSettings from './setTranslationSettings';
import switchTranslationSettings from './switchTranslationSettings';

export default async function learningWords() {
  setStartPosition();
  await setProps();
  renderContent();
  fillCardDueToSettings();
  setTranslationSettings();
  setInputWidth();
  checkInput();
  switchTranslationSettings();
  goToTheNextWord();
}
