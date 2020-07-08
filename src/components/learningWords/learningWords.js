import './learningWords.scss';
import renderContent from './renderContent';
import setStartPosition from './setStartPosition';
import checkInput from './checkInput';
import setWordsToProps from './setWordsToProps';
import setInputWidth from './setInputWidth';
import createAudioObjects from './createAudioObjects';

export default async function learningWords() {
  setStartPosition();
  await setWordsToProps();
  createAudioObjects();
  renderContent();
  setInputWidth();
  checkInput();
}
