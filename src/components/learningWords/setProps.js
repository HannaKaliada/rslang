import getWords from '../../shared/getWords';
import properties from './properties';

export default async function setProps() {
  const words = await getWords(
    localStorage.getItem('currentPage'),
    localStorage.getItem('currentGroup'),
  );
  properties.words = words;
  const localAllWords = words.map((el) => {
    // eslint-disable-next-line
    el.answer = "none";
    return el;
  });

  const localAllWords1 = JSON.parse(localStorage.getItem('localAllWords')) || [];

  if (localAllWords1.length === 0) {
    localStorage.setItem('currentWordIndex', 0);
  }

  if (localAllWords1.length === 0 || localAllWords1[0].word !== localAllWords[0].word) {
    const localAllWords2 = [...localAllWords1, ...localAllWords];
    localStorage.setItem('localAllWords', JSON.stringify(localAllWords2));
  } else localStorage.setItem('localAllWords', JSON.stringify(localAllWords));

  properties.settings = {
    wordsPerDay: localStorage.getItem('wordsLimit'),
    optional: {
      currentWordIndex: localStorage.getItem('currentWordIndex'),
      cardsLimit: localStorage.getItem('cardsLimit'),
      currentWord: localStorage.getItem('currentWord'),
      currentPage: localStorage.getItem('currentPage'),
      currentGroup: localStorage.getItem('currentGroup'),
      wordImage: localStorage.getItem('wordImage'),
      wordTranslation: localStorage.getItem('wordTranslation'),
      wordExample: localStorage.getItem('wordExample'),
      wordMeaning: localStorage.getItem('wordMeaning'),
      wordTranscription: localStorage.getItem('wordTranscription'),
      wordTranslationHint: localStorage.getItem('wordTranslationHint'),
      sentencesTranslation: localStorage.getItem('sentencesTranslation'),
      deleteBtn: localStorage.getItem('deleteBtn'),
      intervalRepeating: localStorage.getItem('intervalRepeating'),
      showAnswerBtn: localStorage.getItem('showAnswerBtn'),
      moveToDifficultBtn: localStorage.getItem('moveToDifficultBtn'),
      playWordExample: localStorage.getItem('playWordExample'),
      playWordMeaning: localStorage.getItem('playWordMeaning'),
    },
  };
}
