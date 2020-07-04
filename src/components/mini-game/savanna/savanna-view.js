import model from './savanna-model';

const view = {
  changeLevelDifficulty() {
    this.remove(document.getElementsByClassName('level-difficulty')[0]);
    const content = `<span>level: ${localStorage.getItem(
      'savanna-level',
    )} ; difficulty:${localStorage.getItem('savanna-difficulty')}</span>`;
    document
      .getElementsByClassName('level-difficulty')[0]
      .insertAdjacentHTML('afterbegin', content);
  },
  gameResult() {
    let contentFalse = '<div class="content-false"><span>FALSE</span>';
    let contentTrue = '<div class="content-true"><span>TRUE</span>';
    const page = document.querySelector('.game-words');
    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    page.insertAdjacentElement('afterbegin', ul);
    model.arrayOfAnswers.forEach((el) => {
      if (el.answer === 'true') {
        contentTrue += `
        <li class="list-group-item">
        <span>${el.word}</span>
        <span>${el.transcription}</span>
        <span>${el.wordTranslate}</span>
        <span><button id="play-btn" type="button" class="btn btn-dark">
                <audio id="audiotag1" src="${el.audio}" preload="auto"></audio>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
        </button></span</li>`;
      } else {
        contentFalse += `
        <li class="list-group-item">
<span>${el.word}</span>
<span>${el.transcription}</span>
<span>${el.wordTranslate}</span>
<span><button id="play-btn" type="button" class="btn btn-dark">
        <audio id="audiotag1" src="${el.audio}" preload="auto"></audio>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
</button></span></li>`;
      }
    });
    contentFalse += '</div>';
    contentTrue += '</div>';
    let nextLevelBtn = '';
    let nextDifficultyBtn = '';
    if (model.level >= 6 || model.mistakes >= 5) nextLevelBtn = '<button type="button" id="next-level-btn" class="btn btn-primary disabled">Next Level</button>';
    else nextLevelBtn = '<button type="button" id="next-level-btn" class="btn  btn-primary">Next Level</button>';
    if (model.difficulty >= 5 || model.mistakes >= 5) nextDifficultyBtn = '<button type="button" id="next-difficulty-btn" class="btn btn-primary disabled">Next Difficulty</button>';
    else nextDifficultyBtn = '<button type="button" id="next-difficulty-btn" class="btn  btn-primary">Next Difficulty</button>';
    const buttons = `<div class="btn-next-repeat">
    ${nextLevelBtn}
    ${nextDifficultyBtn}
    <button type="button" id="repeat-level-btn" class="btn  btn-primary">Repeat Level</button>
    <button type="button" id="game-menu-btn" class="btn  btn-primary">Game menu</button>
    </div>`;
    ul.insertAdjacentHTML('beforeend', contentTrue + contentFalse + buttons);
  },
  async generateGameLayout() {
    model.getLevelDifficulty();
    const page = document.querySelector('.savanna-game-wrapper');
    const gameLayout = document.createElement('div');
    gameLayout.classList.add('game-layout', 'mx-auto');
    const gameWords = document.createElement('div');
    const spinnerContainer = document.createElement('div');
    spinnerContainer.classList.add('spinner-container', 'mx-auto');
    gameWords.classList.add('game-words', 'mx-auto');
    gameLayout.insertAdjacentElement('beforeend', spinnerContainer);
    gameLayout.insertAdjacentElement('beforeend', gameWords);
    this.innerContent(gameLayout, page);
    this.preparationPage();
  },
  lives() {
    const lives = document.createElement('div');
    lives.classList.add('lives-container');
    document
      .getElementsByClassName('game-layout')[0]
      .insertAdjacentElement('afterbegin', lives);
  },
  livesInner() {
    const lives = document.getElementsByClassName('lives-container')[0];
    let content = '';
    for (let i = 0; i <= model.mistakes - 1; i += 1) {
      content += `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>`;
    }
    for (let i = 0; i <= 4 - model.mistakes; i += 1) {
      content += `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;
    }
    lives.insertAdjacentHTML('afterbegin', content);
  },
  innerContent(gameLayout, page) {
    this.remove(page);
    page.insertAdjacentElement('beforeend', gameLayout);
  },
  async wordInner() {
    const gameWords = document.getElementsByClassName('game-words')[0];
    this.remove(gameWords);
    this.remove(document.getElementsByClassName('lives-container')[0]);
    this.livesInner();
    const content = await model.processArray();
    gameWords.insertAdjacentHTML('beforeend', content);
    setTimeout(
      () => document
        .getElementsByClassName('translation')[0]
        .classList.add('translation-move'),
      100,
    );
  },
  remove(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  },
  spinner() {
    const spinnerContainer = document.getElementsByClassName(
      'spinner-container',
    )[0];
    const spinner = `
    <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>`;
    spinnerContainer.insertAdjacentHTML('beforeend', spinner);
  },
  removeSpinner() {
    this.remove(document.getElementsByClassName('spinner-container')[0]);
  },
  preparationPage() {
    const gameWords = document.getElementsByClassName('game-words')[0];
    this.remove(gameWords);

    const timer = document.createElement('span');
    timer.innerHTML = '3';
    timer.classList.add('timer');
    this.spinner();
    document
      .getElementsByClassName('spinner-border')[0]
      .insertAdjacentElement('beforebegin', timer);
    let index = 3;

    const interval = setInterval(() => {
      index -= 1;
      timer.innerText = index;
      if (index <= 0) {
        clearInterval(interval);
        this.removeSpinner();
        this.lives();
        this.wordInner();
      }
    }, 1000);
  },
};
export default view;
