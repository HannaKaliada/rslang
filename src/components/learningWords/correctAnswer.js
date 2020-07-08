import goToTheNextWord from './goToTheNextWord';
import setWordsToProps from './setWordsToProps';
import properties from './properties';

function switchOffForm(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
}

export default function correctAnswer() {
  const currentWord = localStorage.getItem('currentWord');
  const currentPage = localStorage.getItem('currentPage');
  const currentGroup = localStorage.getItem('currentGroup');

  if (currentWord < 9) {
    localStorage.setItem('currentWord', Number(currentWord) + 1);
  } else {
    if (currentPage < 30) {
      localStorage.setItem('currentPage', Number(currentPage) + 1);
      setWordsToProps();
    } else {
      localStorage.setItem('currentPage', 0);
      localStorage.setItem('currentGroup', Number(currentGroup) + 1);
    }
    localStorage.setItem('currentWord', 0);
  }
  properties.currentWordPronunciation.play();
  const htmlDoc = document.querySelector('html');
  htmlDoc.addEventListener('keydown', switchOffForm, true);
  htmlDoc.addEventListener('click', switchOffForm, true);
  properties.currentWordPronunciation.onended = () => {
    properties.currentWordExample.play();
  };
  properties.currentWordExample.onended = () => {
    goToTheNextWord();
    htmlDoc.removeEventListener('keydown', switchOffForm, true);
    htmlDoc.removeEventListener('click', switchOffForm, true);
  };
}
