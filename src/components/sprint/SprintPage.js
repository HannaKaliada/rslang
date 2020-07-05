import './sprintPage.scss';
import Card from './Card';
import Score from './Score';
import Buttons from './Buttons';
import CircleTimer from './CircleTimer';
import renderResultPage from './ResultPage';

const card = new Card();
const score = new Score();
const buttons = new Buttons();
const timer = new CircleTimer();

const initTrueButton = () =>  {
  const trueButton = document.querySelector('.btn-success');
  trueButton.addEventListener('click', () => {
    if(card.isCorrect()) {
      console.log('click true');
      score.addScore();
      card.succesClick();
      card.initWords();
    }
    else {
      score.cancelBonus();
      card.unsuccesClick();
      card.initWords();
    }
   });
}

const initFalseButton = () =>  {
  const falseButton = document.querySelector('.btn-danger');
  falseButton.addEventListener('click', () => {
    if(!card.isCorrect()) {
      console.log('click false');
      score.addScore();
      card.succesClick();
      card.initWords();
    }
    else {
      score.cancelBonus();
      card.unsuccesClick();
      card.initWords();
    }
   });
}


export default function renderSprintPage() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
  `<div class="container">
</div>`);
  card.renderCard();
  score.renderScore();
  buttons.renderButtons();
  initTrueButton();
  initFalseButton();
  timer.renderCircleTimer();
  timer.startTimer();
  setTimeout(function(){renderResultPage(score);}, 30000);
}

