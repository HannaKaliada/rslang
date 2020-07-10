import properties from './properties';

export default function showTranslation() {
  const currentWord = localStorage.getItem('currentWord');

  if (properties.wordTranslationHint === 'true') {
    document.querySelector('.word__translation').textContent = properties.words[currentWord].wordTranslate;
  }
  if (properties.sentencesTranslation === 'true') {
    if (properties.wordExample === 'true') {
      document.querySelector('.sentence-translation').textContent = properties.words[currentWord].textExampleTranslate;
    }
    if (properties.wordMeaning === 'true') {
      document.querySelector('.meaning-translation').textContent = properties.words[currentWord].textMeaningTranslate;
    }
  }
}
