import goToTheNextWord from './goToTheNextWord';
import properties from './properties';
import playAudio from './pronunciation/playAudio';
import checkWordAndPage from './checkWordAndPage';

export default async function correctAnswer() {
  if (properties.sound) {
    await playAudio();
    return;
  }
  await checkWordAndPage();
  goToTheNextWord();
}
