export default function changeLimits() {
  if (!localStorage.wordLimit) {
    localStorage.setItem('wordsLimit', document.querySelector('.words-limit').value);
  }

  if (!localStorage.cardsLimit) {
    localStorage.setItem('cardsLimit', document.querySelector('.cards-limit').value);
  }

  document.querySelector('.limits').addEventListener('input', (event) => {
    if (event.target.classList.contains('change-limit')) {
      if (event.target.classList.contains('words-limit')) {
        document.querySelector('.words-limit-output').textContent = event.target.value;
        localStorage.wordLimit = event.target.value;
      } else {
        document.querySelector('.cards-limit-output').textContent = event.target.value;
        localStorage.cardsLimit = event.target.value;
      }
    }
  });
}
