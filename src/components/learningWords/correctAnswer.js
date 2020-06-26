import goToTheNextWord from './goToTheNextWord';
import setWordsToProps from './setWordsToProps';

export default async function correctAnswer() {
  if (localStorage.getItem('currentWord') < 9) {
    localStorage.setItem('currentWord', Number(localStorage.getItem('currentWord')) + 1);
  } else {
    localStorage.setItem('currentWord', 0);
    if (localStorage.getItem('currentPage') < 30) {
      localStorage.setItem('currentPage', Number(localStorage.getItem('currentPage')) + 1);
      await setWordsToProps();
    } else {
      localStorage.setItem('currentPage', 0);
      localStorage.setItem('currentGroup', Number(localStorage.getItem('currentGroup')) + 1);
    }
  }
  await goToTheNextWord();
}
