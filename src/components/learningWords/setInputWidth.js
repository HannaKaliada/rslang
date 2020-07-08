import properties from './properties';

export default function setInputWidth() {
  console.log(3);
  const input = document.querySelector('form input');
  input.style.width = `${((properties.missingWord.length + 1) * 8) + 24}px`;
  input.focus();
}
