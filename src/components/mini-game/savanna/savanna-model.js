const { default: view } = require('./savanna-view');
const { default: getWords } = require('../../../shared/get-words');

const model = {
  answer: '',
  rightAnswer: 0,
  level: 1,
  index: 0,
  difficulty: 1,
  mistakes: 0,
  timer: 0,
  arrayOfAnswers: [],
  getLevelDifficulty() {
    this.level = localStorage.getItem('savanna-level');
    this.difficulty = localStorage.getItem('savanna-difficulty');
    this.index = localStorage.getItem('savanna-level') * 10 - 10;
  },
  playMusic(event) {
    event.target.children[0].play();
  },
  endGame() {
    view.remove(document.getElementsByClassName('lives-container')[0]);
    clearTimeout(this.timer);
    view.remove(document.getElementsByClassName('game-words')[0]);
    view.gameResult();
    if (this.mistakes <= 5) {
    } else document.getElementById('next-level-btn').classList.add('disabled');
  },
  trueCheck(word) {
    clearTimeout(this.timer);
    if (this.index + 1 >= this.level * 10 || this.mistakes >= 5) this.endGame();
    else {
      if (word === this.answer) {
        this.rightAnswer++;
        this.arrayOfAnswers[this.index % 10].answer = 'true';
      } else {
        this.mistakes++;
        this.arrayOfAnswers[this.index % 10].answer = 'false';
      }
      this.index++;
      view.wordInner();
    }
  },
  async processArray() {
    let content = '';
    const createArray = (length) => Array.from({ length }, (v, k) => k);
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const array = shuffle(createArray(10));
    view.spinner();
    const word = await getWords(this.index, this.difficulty);

    view.removeSpinner();
    let min = array[0];
    let translate = word[array[0]].wordTranslate;
    let answer = word[array[0]].word;
    for (let i = 0; i < 4; i++) {
      if (min > array[i]) {
        min = array[i];
        translate = word[array[i]].wordTranslate;
        answer = word[array[i]].word;
      }
      content += `<button type="button" id="word-btn" class="btn word-btn btn-secondary">
       ${word[array[i]].word}</button>`;
    }
    this.arrayOfAnswers.push(word[min]);
    content += `<div class="translation">${translate}</div>`;
    this.answer = answer;
    this.arrayOfAnswers[this.index % 10].answer = 'false';
    this.timer = setTimeout(() => {
      this.mistakes++;
      this.index++;

      if (this.index + 1 >= this.level * 10 || this.mistakes >= 5) {
        this.endGame();
        clearTimeout(this.timer);
      } else view.wordInner();
    }, 9000);
    return content;
  },
};

export default model;
