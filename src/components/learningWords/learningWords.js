import './learningWords.scss';
import renderContent from './renderContent';
import checkInput from './checkInput';
import setProps from './setProps';
import setInputWidth from './setInputWidth';
import goToTheNextWord from './goToTheNextWord';
import fillCardDueToSettings from './fillCardDueToSettings';
import setTranslationSettings from './setTranslationSettings';
import switchTranslationSettings from './switchTranslationSettings';
import showAnswer from './showAnswer';

export default async function learningWords() {
  await setProps();
  renderContent();
  fillCardDueToSettings();
  setTranslationSettings();
  setInputWidth();
  checkInput();
  switchTranslationSettings();
  goToTheNextWord();
  showAnswer();
}
