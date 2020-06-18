export default function changeLimits() {
  localStorage.setItem('wordsLimit', document.querySelector('.words-limit').value);
  localStorage.setItem('cardsLimit', document.querySelector('.cards-limit').value);

  document.querySelector('.limits').addEventListener('input', (event) => {
    if (event.target.classList.contains('change-limit')) {
      if (event.target.classList.contains('words-limit')) {
        document.querySelector('.words-limit-output').textContent = event.target.value;
        localStorage.setItem('wordsLimit', event.target.value);
      } else {
        document.querySelector('.cards-limit-output').textContent = event.target.value;
        localStorage.setItem('cardsLimit', event.target.value);
      }
    }
  });
}
