import properties from '../properties';
import checkWordAndPage from '../checkWordAndPage';
import goToTheNextWord from '../goToTheNextWord';
import showTranslation from '../showTranslation';
import { updateAmountOfDoneCards } from '../updateAmountOfDoneCards';

function switchOffForm(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
}

export default async function playAudio() {
  properties.currentWordPronunciation.play();
  const htmlDoc = document.querySelector('html');
  htmlDoc.addEventListener('keydown', switchOffForm, true);
  htmlDoc.addEventListener('click', switchOffForm, true);
  showTranslation();
  document.querySelector('.submit-btn').classList.add('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');
  document.querySelector('.input-top-layer').classList.add('hidden');
  if (!properties.playWordExample && !properties.playExplanation) {
    properties.currentWordPronunciation.onended = async () => {
      htmlDoc.removeEventListener('keydown', switchOffForm, true);
      htmlDoc.removeEventListener('click', switchOffForm, true);
      await checkWordAndPage();
      goToTheNextWord();
      updateAmountOfDoneCards();
    };
    return;
  }
  if (properties.playWordExample && !properties.playExplanation) {
    properties.currentWordPronunciation.onended = () => {
      properties.currentWordExample.play();
    };
    properties.currentWordExample.onended = async () => {
      htmlDoc.removeEventListener('keydown', switchOffForm, true);
      htmlDoc.removeEventListener('click', switchOffForm, true);
      await checkWordAndPage();
      goToTheNextWord();
      updateAmountOfDoneCards();
    };
    return;
  }
  if (properties.playWordExample && properties.playExplanation) {
    properties.currentWordPronunciation.onended = () => {
      properties.currentWordExample.play();
    };
    properties.currentWordExample.onended = () => {
      properties.currentWordMeaning.play();
    };
    properties.currentWordMeaning.onended = async () => {
      htmlDoc.removeEventListener('keydown', switchOffForm, true);
      htmlDoc.removeEventListener('click', switchOffForm, true);
      await checkWordAndPage();
      goToTheNextWord();
      updateAmountOfDoneCards();
    };
    return;
  }
  properties.currentWordPronunciation.onended = () => {
    properties.currentWordExplanation.play();
  };
  properties.currentWordExplanation.onended = async () => {
    htmlDoc.removeEventListener('keydown', switchOffForm, true);
    htmlDoc.removeEventListener('click', switchOffForm, true);
    await checkWordAndPage();
    goToTheNextWord();
    updateAmountOfDoneCards();
  };
}
