import properties from './properties';
import setInputWidth from './setInputWidth';

export default function goToTheNextWord() {
  document.querySelector('.input-top-layer').classList.remove('transparent');
  document.querySelector('.sentence').textContent = '';
  document.querySelector('.sentence').insertAdjacentHTML('beforeend', properties.words[localStorage.currentWord].textExample.replace(/\<.*\>/, '<input type="text" class="form-control word-input" maxlength="30"><span class="input-top-layer hidden"></span>'));
  [properties.missingWord] = properties.words[localStorage.currentWord].textExample.match(/(?<=\>).*(?=\<)/);
  document.querySelector('.sentence-translation').textContent = properties.words[localStorage.currentWord].textExampleTranslate;
  document.querySelector('.word__translation').textContent = properties.words[localStorage.currentWord].wordTranslate;
  const input = document.querySelector('form input');
  setInputWidth();
  input.focus();
}
