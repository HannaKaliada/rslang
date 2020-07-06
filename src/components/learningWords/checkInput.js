import properties from './properties';
import goToTheNextWord from './goToTheNextWord';
import setWordsToProps from './setWordsToProps';

export default function checkInput() {
  const form = document.querySelector('.word form');
  form.querySelector('input').focus();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const input = form.querySelector('input');

    if (input.value === properties.missingWord) {
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
  });
}
