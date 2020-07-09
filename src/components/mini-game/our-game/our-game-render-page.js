import './our-game.scss';
import control from './our-game-control';
import renderContentOurGamePage from './content-our-game-page';
import getWords from '../../../shared/get-words'
export default async function renderOurGamePage() {
  renderContentOurGamePage();
  // control.startClick();
  // control.click();
console.log(await getWords(1, 1));
}
