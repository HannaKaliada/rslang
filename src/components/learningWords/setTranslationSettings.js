import properties from './properties';

export default function setTranslationSettings() {
  if (!localStorage.getItem('sentencesTranslation')) {
    localStorage.setItem('sentencesTranslation', 'true');
    properties.sentencesTranslation = 'true';
  }
  if (!localStorage.getItem('wordTranslationHint')) {
    localStorage.setItem('wordTranslationHint', 'true');
    properties.wordTranslationHint = 'true';
  }

  if (properties.wordTranslationHint === 'true') {
    document.querySelector('.word-trans-on').classList.add('active');
  } else {
    document.querySelector('.word-trans-off').classList.add('active');
  }

  if (properties.sentencesTranslation === 'true') {
    document.querySelector('.sent-trans-on').classList.add('active');
  } else {
    document.querySelector('.sent-trans-off').classList.add('active');
  }
}
