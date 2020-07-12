import setProps from './setProps';
import properties from './properties';
import showTranslation from './showTranslation';
import postUserSettings from '../../services/postUserSettings';
import { updateAmountOfDoneCards } from './updateAmountOfDoneCards';
import showMessage from './showMessage';
import showStatistic from './showStatistic';

export default function correctAnswer() {
  showTranslation();
  let currentWordIndex = localStorage.getItem('currentWordIndex');
  // eslint-disable-next-line
  currentWordIndex++;
  localStorage.setItem('currentWordIndex', currentWordIndex);
  showMessage();
  showStatistic();
  updateAmountOfDoneCards();

  const settings = properties.settings.optional;
  document.querySelector('.submit-btn').classList.add('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');
  document.querySelector('.input-top-layer').classList.add('hidden');

  if (settings.wordExample === 'true' && settings.wordTranslation === 'true') {
    document.querySelector('.sentence .hidden-word').textContent = properties.words[settings.currentWord].textExample.match(/(?<=\>).*(?=\<)/);
  }
  if ((settings.wordMeaning === 'true' && settings.wordExample === 'true')
    || (settings.wordMeaning === 'true' && settings.wordTranslation === 'true')) {
    document.querySelector('.meaning .hidden-word').textContent = properties.words[settings.currentWord].textMeaning.match(/(?<=\>).*(?=\<)/);
  }

  if (settings.currentWord < 9) {
    localStorage.setItem('currentWord', Number(settings.currentWord) + 1);
    settings.currentWord = Number(settings.currentWord) + 1;
    postUserSettings(properties.settings);
  } else {
    if (settings.currentPage < 30) {
      localStorage.setItem('currentPage', Number(settings.currentPage) + 1);
      settings.currentPage = Number(settings.currentPage) + 1;
      setProps();
    } else {
      localStorage.setItem('currentPage', 0);
      settings.currentPage = 0;
      localStorage.setItem('currentGroup', Number(settings.currentGroup) + 1);
      settings.currentGroup = Number(settings.currentGroup) + 1;
    }
    localStorage.setItem('currentWord', 0);
    settings.currentWord = 0;
    postUserSettings(properties.settings);
  }
}
