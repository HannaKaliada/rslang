import setInputWidth from './setInputWidth';
import fillCardDueToSettings from './fillCardDueToSettings';
import properties from './properties';
import createUserWord from '../../services/createUserWord';

export default function goToTheNextWord() {
  const nextBtn = document.querySelector('.next-btn');

  nextBtn.addEventListener('click', () => {
    const difficulty = 'easy';
    const currentWord = properties.words[properties.currentWord - 1];
    const wordInfo = {
      word: currentWord,
      image: currentWord.image,
      audio: currentWord.audio,
      textMeaning: currentWord.textMeaning,
      textExample: currentWord.textExample,
    };
    const word = {
      difficulty,
      optional: wordInfo,
    };
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    createUserWord({
      userId: userInfo.userId, wordId: currentWord.id, word, token: userInfo.token,
    });
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
