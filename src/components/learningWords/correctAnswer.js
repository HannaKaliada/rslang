import goToTheNextWord from './goToTheNextWord';
import setWordsToProps from './setWordsToProps';
import { updateAmountOfDoneCards } from './updateAmountOfDoneCards';

export default function correctAnswer() {
  const currentWord = localStorage.getItem('currentWord');
  const currentPage = localStorage.getItem('currentPage');
  const currentGroup = localStorage.getItem('currentGroup');
  updateAmountOfDoneCards();

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
  goToTheNextWord();
}
