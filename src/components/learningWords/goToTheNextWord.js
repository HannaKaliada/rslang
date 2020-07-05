import properties from './properties';
import setInputWidth from './setInputWidth';

export default function goToTheNextWord() {
  const nextBtn = document.querySelector('.next-btn');
  nextBtn.addEventListener('click', () => {
    const currentWord = localStorage.getItem('currentWord');
    const sentence = document.querySelector('.sentence');
    const submitBtn = document.querySelector('.submit-btn');
    const meaning = document.querySelector('.meaning');
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');

    document.querySelector('.input-top-layer').classList.remove('transparent');

    sentence.textContent = '';
    sentence.insertAdjacentHTML('beforeend', properties.words[currentWord].textExample.replace(/\<.*\>/,
    `<input type="text" class="form-control word-input" maxlength="30">
    <span class="input-top-layer hidden"></span>`));

    meaning.textContent = '';
    meaning.insertAdjacentHTML('beforeend', properties.words[currentWord].textMeaning.replace(/\<.*\>/,
      `<span class="hidden-word">[...]</span>`));

    [properties.missingWord] = properties.words[currentWord].textExample.match(/(?<=\>).*(?=\<)/);

    document.querySelector('.sentence-translation').textContent = '';
    document.querySelector('.word__translation').textContent = '';
    document.querySelector('.meaning-translation').textContent = '';

    setInputWidth();
  })
}
