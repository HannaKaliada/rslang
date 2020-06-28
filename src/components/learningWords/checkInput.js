import properties from './properties';
import correctAnswer from './correctAnswer';
import showWrongAndRightLetters from './showWrongAndRightLetters';

export default function checkInput() {
  const form = document.querySelector('.word form');
  form.querySelector('input').focus();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    document.querySelector('.input-top-layer').textContent = '';
    document.querySelector('.input-top-layer').classList.remove('transparent');

    if (input.value === properties.missingWord) {
      correctAnswer();
    } else {
      document.querySelector('.input-top-layer').classList.remove('hidden');

      await showWrongAndRightLetters();

      input.value = '';
      input.style.width = `${document.querySelector('.input-top-layer').offsetWidth}px`;
      document.querySelector('.input-top-layer').style.marginLeft = `${-input.offsetWidth - 5}px`;

      input.addEventListener('input', () => {
        document.querySelector('.input-top-layer').classList.add('transparent');
      });

      document.querySelector('.input-top-layer').addEventListener('click', () => {
        input.focus();
      });
    }
  });
}
