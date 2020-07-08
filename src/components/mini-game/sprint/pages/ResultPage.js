import renderStarSprintPage from './StartSprintPage'
import initSprintPage from './SprintPage';
import clearCurrentPage from '../methods/clearCurrentPage';


export default function renderResultPage(score) {
  let card = document.querySelector('.root');
  card.insertAdjacentHTML('beforeend', `
  <div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
  <div class="card w-50 h-50">
<div class="card-body text-center">
<div class="result">Congratulations!<br>  Your score: ${score}</div>
<div class="buttons mt-4">
  <button type="button" class="btn btn-primary btn-lg btn-again">Try again</button>
  <button type="button" class="btn btn-secondary btn-lg btn-menu">Choose another level</button>
  </div>
</div>
</div>
</div>
  `);
  const trueButton = document.querySelector('.btn-again');
  trueButton.addEventListener('click', () => {
    clearCurrentPage();
    let data = JSON.parse(localStorage.getItem("current_sprint") || "[]");
    console.log(data);
    initSprintPage(data);
   });

   const falseButton = document.querySelector('.btn-menu');
   falseButton.addEventListener('click', () => {
    clearCurrentPage();
    renderStarSprintPage();
    });
}
