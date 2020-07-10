import properties from './properties';
import setInputWidth from './setInputWidth';
import createAudioObjects from './pronunciation/createAudioObjects';

export default function goToTheNextWord() {
  console.log(5);
  const currentWord = localStorage.getItem('currentWord');
  const sentence = document.querySelector('.sentence');

  document.querySelector('.input-top-layer').classList.remove('transparent');

  sentence.textContent = '';
  sentence.insertAdjacentHTML('beforeend', properties.words[currentWord].textExample.replace(/\<.*\>/,
    `<input type="text" class="form-control word-input" maxlength="30">
  <span class="input-top-layer hidden"></span>`));

  [properties.missingWord] = properties.words[currentWord].textExample.match(/(?<=\>).*(?=\<)/);

  document.querySelector('.sentence-translation').textContent = properties.words[currentWord].textExampleTranslate;
  document.querySelector('.word__translation').textContent = properties.words[currentWord].wordTranslate;
  createAudioObjects();

  setInputWidth();
}
