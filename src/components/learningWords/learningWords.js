import './learningWords.scss';
import renderContent from './renderContent';
import setStartPosition from './setStartPosition';
import checkInput from './checkInput';
import setProps from './setProps';
import setInputWidth from './setInputWidth';
import createAudioObjects from './pronunciation/createAudioObjects';
import addEventListeners from './pronunciation/addEventListeners';
import fillCardDueToSettings from './fillCardDueToSettings';
import setTranslationSettings from './setTranslationSettings';

export default async function learningWords() {
  setStartPosition();
  await setProps();
  createAudioObjects();
  renderContent();
  addEventListeners();
  fillCardDueToSettings();
  setTranslationSettings();
  setInputWidth();
  checkInput();
}
