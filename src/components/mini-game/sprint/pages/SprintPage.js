import '../styles/sprintPage.scss';
import Card from '../components/Card';
import Score from '../components/Score';
import Buttons from '../components/Buttons';
import CircleTimer from '../components/CircleTimer';
import renderResultPage from './ResultPage';
import WordsSet from '../components/WordsSet';
import clearCurrentPage from '../methods/clearCurrentPage';

function playCorrectAudio() {
  let audio = new Audio("/src/components/mini-game/sprint/assets/correct.mp3");
  audio.playbackRate = 1.5;
  audio.play();
}

function playUnCorrectAudio() {
    let audio = new Audio("/src/components/mini-game/sprint/assets/uncorrect.mp3");
    audio.playbackRate = 1.75;
    audio.play();
}


export default function initSprintPage(date) {
  const wordSet = new WordsSet(date);
  const card = new Card(wordSet);
  const score = new Score();
  const buttons = new Buttons();
  const timer = new CircleTimer();
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
  `<div class="container vh-100 d-flex flex-column align-items-center justify-content-center">
</div>`);
  card.renderCard();
  score.renderScore();
  buttons.renderButtons();
  timer.renderCircleTimer();
  timer.startTimer();

  const trueButton = document.querySelector('.btn-success');
  trueButton.addEventListener('click', () => {
    if(card.isCorrect()) {
      playCorrectAudio();
      score.addScore();
      card.succesClick();
      card.renderWords();
    }
    else {
      playUnCorrectAudio();
      score.cancelBonus();
      card.unsuccesClick();
      card.renderWords();
    }
   });

   const falseButton = document.querySelector('.btn-danger');
   falseButton.addEventListener('click', () => {
     if(!card.isCorrect()) {
       playCorrectAudio();
       score.addScore();
       card.succesClick();
       card.renderWords();
     }
     else {
       playUnCorrectAudio()
       score.cancelBonus();
       card.unsuccesClick();
       card.renderWords();
     }
    });
    setTimeout(function(){
      clearCurrentPage();
      renderResultPage(score);}, 60000)
}
