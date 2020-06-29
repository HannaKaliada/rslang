import createElement from '../../shared/createElement';
import createGameData from './createGameData';
import '../../assets/icons/speaker.svg';
import '../../assets/icons/spinner.svg';
import randomize from '../../shared/randomize';

class GamePage {
  constructor(createHTML, rancdomizing) {
    this.createElement = createHTML;
    this.rancdomize = rancdomizing;
    this.activeData = [];
  }

  createSoundIcon() {
    const icon = this.createElement('img', 'audiocall__speaker');
    icon.src = 'images/speaker.svg';
    return icon;
  }

  createAnswerBlock() {
    const data = this.gameWords.pop();
    let variants = data.variants.map((el) => el.wordTranslate);
    this.writeAnswer = data.wordTranslate;
    variants.push(this.writeAnswer);
    const answerBlock = this.createElement('div', 'audiocall__answers');
    variants = this.rancdomize(variants);
    variants.forEach((el) => {
      const answer = this.createElement('div', 'audiocall__answer');
      answer.innerText = el.wordTranslate;
      answerBlock.append(answer);
    });
    return answerBlock;
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

  loadingPlug() {
    const loader = this.createElement('img', 'loader');
    loader.src = '/images/spinner.svg';
    const message = this.createElement('p', 'audio-call_message');
    message.innerText = 'Loading, please wait';
    return [loader, message];
  }

  async init() {
    const root = document.querySelector('.root');
    const container = this.createElement('div', ['container', 'audio-call']);
    container.append(...this.loadingPlug());
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

