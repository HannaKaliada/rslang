import goToTheNextWord from './goToTheNextWord';
import properties from './properties';
import playAudio from './pronunciation/playAudio';
import checkWordAndPage from './checkWordAndPage';
import showTranslation from './showTranslation';
import { updateAmountOfDoneCards } from './updateAmountOfDoneCards';
import showMessage from './showMessage';
import showStatistic from './showStatistic';

export default async function correctAnswer() {
  if (properties.sound) {
    await playAudio();
    return;
  }
  await checkWordAndPage();
  goToTheNextWord();
  showTranslation();
  let currentWordIndex = localStorage.getItem('currentWordIndex');
  // eslint-disable-next-line
  currentWordIndex++;
  localStorage.setItem('currentWordIndex', currentWordIndex);
  showMessage();
  showStatistic();
  updateAmountOfDoneCards();
  // eslint-disable-next-line
  const settings = properties.settings.optional;
  document.querySelector('.submit-btn').classList.add('hidden');
  document.querySelector('.next-btn').classList.remove('hidden');
  document.querySelector('.input-top-layer').classList.add('hidden');
}
