import './learningWords.scss';
import renderContent from './renderContent';
import checkInput from './checkInput';
import setProps from './setProps';
import setInputWidth from './setInputWidth';
import createAudioObjects from './pronunciation/createAudioObjects';
import addEventListeners from './pronunciation/addEventListeners';
import fillCardDueToSettings from './fillCardDueToSettings';
import setTranslationSettings from './setTranslationSettings';
import showAnswer from './showAnswer';
import switchTranslationSettings from './switchTranslationSettings';
import goToTheNextWord from './goToTheNextWord';

export default async function learningWords() {
  await setProps();
  createAudioObjects();
  renderContent();
  addEventListeners();
  fillCardDueToSettings();
  setTranslationSettings();
  setInputWidth();
  checkInput();
  switchTranslationSettings();
  goToTheNextWord();
  showAnswer();
}
