import setInputWidth from './setInputWidth';
import fillCardDueToSettings from './fillCardDueToSettings';

export default function goToTheNextWord() {
  const nextBtn = document.querySelector('.next-btn');

  nextBtn.addEventListener('click', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const toCleanBlocksClasses = ['sentence', 'meaning', 'translation-input', 'sentence-translation', 'word__translation', 'meaning-translation'];

    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    document.querySelector('.input-top-layer').classList.remove('transparent');

    toCleanBlocksClasses.forEach((className) => {
      document.querySelector(`.${className}`).textContent = '';
    });

    fillCardDueToSettings();

    setInputWidth();
  });
}
