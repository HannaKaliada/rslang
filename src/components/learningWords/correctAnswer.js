import goToTheNextWord from './goToTheNextWord';
import properties from './properties';
import playAudio from './pronunciation/playAudio';
import checkWordAndPage from './checkWordAndPage';
import showTranslation from './showTranslation';
import { updateAmountOfDoneCards } from './updateAmountOfDoneCards';

export default async function correctAnswer() {
  if (properties.sound) {
    await playAudio();
    return;
  }
  await checkWordAndPage();
  goToTheNextWord();
  showTranslation();
  updateAmountOfDoneCards();
  document.querySelector('.submit-btn').classList.add('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');
  document.querySelector('.input-top-layer').classList.add('hidden');
}
