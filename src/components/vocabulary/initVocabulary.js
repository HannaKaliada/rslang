import renderVocabulary from './renderVocabulary';
import vocabularyButtonsHandlers from './vocabularyButtonsHandlers';
import renderLearningWordsTab from './renderLearningWordsTab';
import renderMenu from '../../shared/menu/renderMenu';
import renderHeader from '../../shared/header/renderHeader';
import audioButtonHandler from './audioButtonHandler';

export default function initVocabulary() {
  const root = document.querySelector('.root');
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  root.append(renderHeader(), renderVocabulary(), renderMenu());
  renderLearningWordsTab(userInfo.userId, userInfo.token);
  vocabularyButtonsHandlers(userInfo);
  audioButtonHandler();
}
