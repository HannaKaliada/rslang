import './sprintPage.scss';
import Card from './Card';
import Score from './Score';
import WordSet from './WordsSet';

export default function renderSprintPage() {
  const page = document.querySelector('.root');
  const card = new Card();
  const score = new Score();
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
  </div>`);
  score.renderScore();
  card.renderCard();
  card.initWords();
}

