export default function setInputWidth() {
  const input = document.querySelector('form input');
  input.addEventListener('input', () => {
    if (document.querySelector('.input-top-layer').textContent === '') {
      input.style.width = `${((input.value.length + 1) * 8) + 24}px`;
    }
  });
}
