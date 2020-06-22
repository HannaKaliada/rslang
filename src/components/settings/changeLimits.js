export default function changeLimits() {
  document.querySelector('.limits').addEventListener('input', (event) => {
    if (event.target.classList.contains('change-limit')) {
      if (event.target.classList.contains('words-limit')) {
        document.querySelector('.words-limit-output').textContent = event.target.value;
      } else {
        document.querySelector('.cards-limit-output').textContent = event.target.value;
      }
    }
  });
}
