import './sprintPage.scss';
import Card from './Card';
import Score from './Score';
import Buttons from './Buttons';
import CircleTimer from './CircleTimer';
import renderResultPage from './ResultPage';
import WordsSet from './WordsSet';



// const initTrueButton = () =>  {
//   const trueButton = document.querySelector('.btn-success');
//   trueButton.addEventListener('click', () => {
//     if(card.isCorrect()) {
//       console.log('click true');
//       score.addScore();
//       card.succesClick();
//       card.renderWords();
//     }
//     else {
//       score.cancelBonus();
//       card.unsuccesClick();
//       card.renderWords();
//     }
//    });
// }

// const initFalseButton = () =>  {
//   const falseButton = document.querySelector('.btn-danger');
//   falseButton.addEventListener('click', () => {
//     if(!card.isCorrect()) {
//       console.log('click false');
//       score.addScore();
//       card.succesClick();
//       card.renderWords();
//     }
//     else {
//       score.cancelBonus();
//       card.unsuccesClick();
//       card.renderWords();
//     }
//    });
// }



//   function renderSprintPage() {
//     const page = document.querySelector('.root');
//   //   page.insertAdjacentHTML('beforeend',
//   //   `<div class="container">
//   // </div>`);
//     // card.renderCard();
//     // score.renderScore();
//     // buttons.renderButtons();
//     // initTrueButton();
//     // initFalseButton();
//     // timer.renderCircleTimer();
//     // timer.startTimer();
//   //setTimeout(function(){renderResultPage(score);}, 1000);
// }

export default function initSprintPage(date) {
  console.log(date);
  const wordSet = new WordsSet(date);
  const card = new Card(wordSet);
  const score = new Score();
  const buttons = new Buttons();
  const timer = new CircleTimer();
  //console.log(wordSet.getGamesPairWord());
  card.renderCard();
  score.renderScore();
  buttons.renderButtons();
  timer.renderCircleTimer();
  timer.startTimer();

  const trueButton = document.querySelector('.btn-success');
  trueButton.addEventListener('click', () => {
    if(card.isCorrect()) {
      console.log('click true');
      score.addScore();
      card.succesClick();
      card.renderWords();
    }
    else {
      score.cancelBonus();
      card.unsuccesClick();
      card.renderWords();
    }
   });

   const falseButton = document.querySelector('.btn-danger');
   falseButton.addEventListener('click', () => {
     if(!card.isCorrect()) {
       console.log('click false');
       score.addScore();
       card.succesClick();
       card.renderWords();
     }
     else {
       score.cancelBonus();
       card.unsuccesClick();
       card.renderWords();
     }
    });
}
