import properties from './properties';

export default function goToTheNextWord() {
  document.querySelector('.sentence').textContent = '';
  document.querySelector('.sentence').insertAdjacentHTML('beforeend', properties.words[localStorage.currentWord].textExample.replace(/\<.*\>/, '<input type="text" class="form-control word-input" maxlength="30" class="form-control" oninput="this.style.width = ((this.value.length + 1) * 8) + 24 + \'px\'"><span class="input-top-layer hidden"></span>'));
  [properties.missingWord] = properties.words[localStorage.currentWord].textExample.match(/(?<=\>).*(?=\<)/);
  document.querySelector('.sentence-translation').textContent = properties.words[localStorage.currentWord].textExampleTranslate;
  document.querySelector('.word__translation').textContent = properties.words[localStorage.currentWord].wordTranslate;

  const input = document.querySelector('form input');
  input.focus();
}
