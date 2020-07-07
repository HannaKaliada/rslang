import './sprintPage.scss';
import initSprintPage from './SprintPage';
import WordsSet from './WordsSet';
import initWords from './initWords';

export default function renderStartSprintPage() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
    `<div class="container vh-100 d-flex flex-column align-items-center justify-content-center">
    <img class="logo-game">
      <h1 class="title-game">Sprint</h1>
    <div class="form-group row">
    <div class="col-md-6">
      <label for="ex1">Difficulity</label>
      <select class="selectpicker form-control select-level">
        <option value="" selected hidden>Select level of difficulty...</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="ex1">№</label>
      <select class="selectpicker form-control select-round">
        <option value="" selected hidden>Select number of set...</option>
      </select>
  </div>
  <button type="button" class="btn btn-primary btn-lg btn-block mt-4 btn-start">Start game</button>
  </div>
  </div>`);
  initNumberOfLevels(30);
  initNumberOfRounds(30);
  initStartButton()
}

function appendOption(selector, value) {
  let node = document.createElement('option');
  node.innerHTML = value;
  selector.appendChild(node);
}

function initNumberOfLevels(value) {
  const selector = document.querySelector('.select-level');
  let count = 0;
  while (count != value) {
    count++;
    appendOption(selector, count);
  }
};

  function initNumberOfRounds(value) {
    const selector = document.querySelector('.select-round');
    let count = 0;
    while (count != value) {
      count++;
      appendOption(selector, count);
    }
  }

  function clearCurrentpage() {
    let card = document.querySelector('.container');
    for (let i = card.childNodes.length - 1; i >= 0; i--) {
      card.removeChild(card.childNodes[i]);
   }
  }


  const initStartButton = () =>  {
    const falseButton = document.querySelector('.btn-start');
    falseButton.addEventListener('click', () => {
      const round = document.querySelector('.select-round option:checked').value;
      const level = document.querySelector('.select-level option:checked').value;
      localStorage.setItem('round_sprint', round);
      localStorage.setItem('level_sprint', level);
      initWords().then(result => {
        clearCurrentpage();
        initSprintPage(result);
      });
     });
  }
