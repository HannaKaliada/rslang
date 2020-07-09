import renderVocabulary from './renderVocabulary';
import vocabularyButtonsHandlers from './vocabularyButtonsHandlers';
import renderLearningWordsTab from './renderLearningWordsTab';

export default function initVocabulary() {
  const root = document.querySelector('.root');
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  root.append(renderVocabulary());
  renderLearningWordsTab(userInfo.userId, userInfo.token);
  vocabularyButtonsHandlers(userInfo);
}
