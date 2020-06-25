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
    } else {
      const inputValueSpell = input.value.split('');
      const correctWord = properties.missingWord.split('');

      document.querySelector('.input-top-layer').classList.remove('hidden');
      document.querySelector('.input-top-layer').style.marginLeft = `${- input.offsetWidth}px`
      input.value = '';

      inputValueSpell.map((letter, index) => {
        if (letter === correctWord[index]) {
          document.querySelector('.input-top-layer').insertAdjacentHTML('beforeend', `<span class="correct-letter">${letter}</span>`);
        } else {
          document.querySelector('.input-top-layer').insertAdjacentHTML('beforeend', `<span class="wrong-letter">${letter}</span>`);
        }
      })

      // input.addEventListener('focus', () => {
      //   document.querySelector('.input-top-layer').classList.add('transparent');
      //   document.querySelector('.input-top-layer').textContent = '';
      // })
      input.addEventListener('input', () => {
        document.querySelector('.input-top-layer').classList.add('transparent');
        input.style.width = document.querySelector('.input-top-layer').offsetWidth;
        // document.querySelector('.input-top-layer').textContent = '';
      });

      document.querySelector('.input-top-layer').addEventListener('click', ()=>{
        input.focus();
      })

      console.log(inputValueSpell);
      console.log(correctWord);
    }
  });
}
