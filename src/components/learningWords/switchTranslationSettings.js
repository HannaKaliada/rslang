import properties from './properties';

export default function switchTranslationSettings() {
  document.querySelector('.learning-settings').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn') && !event.target.classList.contains('active')) {
      event.target.parentNode.querySelectorAll('.btn').forEach((button) => {
        button.classList.remove('active');
      });
      event.target.classList.add('active');
      if (event.target.parentNode.classList.contains('word-trans-btns')) {
        localStorage.setItem('wordTranslationHint', event.target.dataset.wordTranslationHint);
        properties.wordTranslationHint = event.target.dataset.wordTranslationHint;
      } else {
        localStorage.setItem('sentencesTranslation', event.target.dataset.sentencesTranslation);
        properties.sentencesTranslation = event.target.dataset.sentencesTranslation;
      }
    }
  });
}
