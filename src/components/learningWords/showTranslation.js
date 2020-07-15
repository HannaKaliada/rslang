import properties from './properties';

export default function showTranslation() {
  const currentWord = localStorage.getItem('currentWord');
  const settings = properties.settings.optional;

  if (settings.wordTranslationHint === 'true') {
    document.querySelector('.word__translation').textContent = properties.words[currentWord].wordTranslate;
  }
  if (settings.sentencesTranslation === 'true') {
    if (settings.wordExample === 'true') {
      document.querySelector('.sentence-translation').textContent = properties.words[currentWord].textExampleTranslate;
    }
    if (settings.wordMeaning === 'true') {
      document.querySelector('.meaning-translation').textContent = properties.words[currentWord].textMeaningTranslate;
    }
  }
}
