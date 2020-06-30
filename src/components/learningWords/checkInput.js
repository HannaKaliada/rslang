import properties from './properties';
import correctAnswer from './correctAnswer';
import showWrongAndRightLetters from './showWrongAndRightLetters';

export default function checkInput() {
  const form = document.querySelector('.word form');
  form.querySelector('input').focus();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    const inputTopLayer = document.querySelector('.input-top-layer');

    inputTopLayer.textContent = '';
    inputTopLayer.classList.remove('transparent');

    if (input.value === properties.missingWord) {
      correctAnswer();
    } else {
      inputTopLayer.classList.remove('hidden');

      showWrongAndRightLetters();

      input.value = '';
      input.style.width = `${inputTopLayer.offsetWidth}px`;
      inputTopLayer.style.marginLeft = `${-input.offsetWidth - 5}px`;

      input.addEventListener('input', () => {
        inputTopLayer.classList.add('transparent');
      });

      inputTopLayer.addEventListener('click', () => {
        input.focus();
      });
    }
  });
}
