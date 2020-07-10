import getWords from '../../shared/getWords';
import properties from './properties';

export default async function setProps() {
  const words = await getWords(localStorage.getItem('currentPage'), localStorage.getItem('currentGroup'));
  properties.words = words;
  properties.settings = {
    wordsPerDay: localStorage.getItem('wordsLimit'),
    optional: {
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
    },
  };
}
