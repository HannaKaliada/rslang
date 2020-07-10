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
import renderMenu from '../../shared/menu/renderMenu';
import burgerIconHandler from '../../shared/menu/burgerIconHandler';
import setItemActiveState from '../../shared/menu/setItemActiveState';
import renderHeader from '../../shared/header/renderHeader';
import logoutButtonHandler from '../../shared/header/logoutButtonHandler';
import '../../styles/header.scss';
import '../../styles/menu.scss';

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
  const wrapper = document.querySelector('.learn-page__wrapper');
  wrapper.append(renderMenu(), renderHeader());
  burgerIconHandler();
  setItemActiveState();
  logoutButtonHandler();
}
