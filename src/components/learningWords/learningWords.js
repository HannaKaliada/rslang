import './learningWords.scss';
import renderContent from './renderContent';
import setStartPosition from './setStartPosition';
import checkInput from './checkInput';
import setWordsToProps from './setWordsToProps';
import setInputWidth from './setInputWidth';
import createAudioObjects from './pronunciation/createAudioObjects';
import addEventListeners from './pronunciation/addEventListeners';

export default async function learningWords() {
  setStartPosition();
  await setWordsToProps();
  createAudioObjects();
  renderContent();
  addEventListeners();
  setInputWidth();
  await checkInput();
}
