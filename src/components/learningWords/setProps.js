import getWords from '../../shared/getWords';
import properties from './properties';

export default async function setProps() {
  const words = await getWords(localStorage.getItem('currentPage'), localStorage.getItem('currentGroup'));
  properties.words = words;
  const localAllWords = words.map((el) => {
    // eslint-disable-next-line
    el.answer = 'none';
    return el;
  });
  properties.allWords = properties.allWords.concat(localAllWords);
  properties.currentWord = localStorage.getItem('currentWord');
  properties.currentWordIndex = localStorage.getItem('currentWordIndex');
  properties.currentPage = localStorage.getItem('currentPage');
  properties.currentGroup = localStorage.getItem('currentGroup');
  properties.wordTranslation = localStorage.getItem('wordTranslation');
  properties.wordExample = localStorage.getItem('wordExample');
  properties.wordMeaning = localStorage.getItem('wordMeaning');
  properties.wordTranscription = localStorage.getItem('wordTranscription');
  properties.wordTranslationHint = localStorage.getItem('wordTranslationHint');
  properties.sentencesTranslation = localStorage.getItem('sentencesTranslation');
  properties.wordImage = localStorage.getItem('wordImage');
}
