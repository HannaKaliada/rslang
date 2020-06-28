import createElement from '../../shared/createElement';
import createGameData from './createGameData';

class GamePage {
  constructor(func) {
    this.createElement = func;
    this.activeData = {};
  }

  createSoundIcon() {
    const icon = this.createElement('img', 'audiocall__speaker');
    icon.src = '../../assets/icons/speaker.svg';
    return icon;
  }

  createAnswerBlock() {

  }

  createWordsBlock() {
    const arr = ['word1', 'word2', 'word3', 'word4'];
    const words = this.createElement('div', 'words-container');
    arr.forEach((el) => {
      const div = this.createElement('div', 'word');
      div.innerText = el;
      words.append(div);
    });
  }

  checkAnswer(e) {
    if (!e.target.classList.contains('word')) {
      return
    }

  }

  gameButtonHandler() {

  }

  createGameButton() {
    const button = this.createElement('button', 'audiocall__game-button');
    button.innerText = 'Я не знаю';
    button.addEventListener('click', this.gameButtonHandler.bind(this));
    return button;
  }

  rightAnswerHandler() {

  }

  wrongAnswerHandler() {

  }

  createPage() {
    const elements = [];
    elements.push(this.createSoundIcon(), this.createAnswerBlock, this.createGameButton());
    return elements;
  }

  async init() {
    const root = document.querySelector('.root');
    const container = this.createElement('div', ['container', 'audio-call']);
    container.append(...this.createPage());
    root.removeChild(root.firstChild);
    root.append(container);
    await createGameData()
      .then((words) => {
        console.log(words);
        this.gameWords = words;
      })
      .then(() => {
        this.gameWords.forEach((el) => {
          console.log(el.variants);
        });
      });
  }
}

const gamePage = new GamePage(createElement);

export default gamePage;

