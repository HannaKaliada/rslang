import setWordsToProps from './setWordsToProps';
import properties from './properties';

export default function correctAnswer() {
  const currentWord = localStorage.getItem('currentWord');
  const currentPage = localStorage.getItem('currentPage');
  const currentGroup = localStorage.getItem('currentGroup');


  document.querySelector('.sentence-translation').textContent = properties.words[currentWord].textExampleTranslate;
  document.querySelector('.word__translation').textContent = properties.words[currentWord].wordTranslate;
  document.querySelector('.meaning-translation').textContent = properties.words[currentWord].textMeaningTranslate;
  document.querySelector('.hidden-word').textContent = properties.words[currentWord].word;
  document.querySelector('.submit-btn').classList.add('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');
  document.querySelector('.input-top-layer').classList.add('hidden');

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
}
