import properties from './properties';

export default function showWrongAndRightLetters() {
  const input = document.querySelector('form input');
  const inputValueSpell = input.value.split('');
  const correctWord = properties.missingWord.split('');

  correctWord.forEach((letter, index) => {
    if (letter === inputValueSpell[index]) {
      document.querySelector('.input-top-layer').insertAdjacentHTML('beforeend', `<span class="correct-letter">${letter}</span>`);
    } else {
      document.querySelector('.input-top-layer').insertAdjacentHTML('beforeend', `<span class="wrong-letter">${letter}</span>`);
    }
  });
}
