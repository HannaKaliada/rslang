import setProps from './setProps';
import properties from './properties';
import showTranslation from './showTranslation';

export default function correctAnswer() {
  console.log(properties);
  showTranslation();

  document.querySelector('.submit-btn').classList.add('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');
  document.querySelector('.input-top-layer').classList.add('hidden');

  if (properties.wordExample === 'true' && properties.wordTranslation === 'true') {
    document.querySelector('.sentence .hidden-word').textContent = properties.words[properties.currentWord].textExample.match(/(?<=\>).*(?=\<)/);
  }
  if (properties.wordMeaning === 'true' && properties.wordExample === 'true') {
    document.querySelector('.meaning .hidden-word').textContent = properties.words[properties.currentWord].textMeaning.match(/(?<=\>).*(?=\<)/);
  }

  if (properties.currentWord < 9) {
    localStorage.setItem('currentWord', Number(properties.currentWord) + 1);
    properties.currentWord = Number(properties.currentWord) + 1;
  } else {
    if (properties.currentPage < 30) {
      localStorage.setItem('currentPage', Number(properties.currentPage) + 1);
      properties.currentPage = Number(properties.currentPage) + 1;
      setProps();
    } else {
      localStorage.setItem('currentPage', 0);
      properties.currentPage = 0;
      localStorage.setItem('currentGroup', Number(properties.currentGroup) + 1);
      properties.currentGroup = Number(properties.currentGroup) + 1;
    }
    localStorage.setItem('currentWord', 0);
    properties.currentWord = 0;
  }
}
