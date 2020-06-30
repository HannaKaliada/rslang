import createElement from '../../shared/createElement';
import createGameData from './createGameData';
import '../../assets/icons/speaker.svg';
import '../../assets/icons/spinner.svg';
import randomize from '../../shared/randomize';

class GamePage {
  constructor(createHTML, randomizing) {
    this.createElement = createHTML;
    this.randomize = randomizing;
    this.gameResults = {};
  }

  variantsBlockHandler(e) {
    if (!e.target.classList.contains('word')) {
      return;
    }
    this.checkAnswer(e.target);
  }

  checkAnswer(target) {
    this.showAnswer();
    this.gameButton.value = 'Next';
    if (target.innerText === this.rightVariantText) {
      this.gameResults['right answers'] = this.gameData;
      this.totalScore += this.isHintUsed ? 1 : 2;
      target.classList.add('right');
      this.showAnswer(true);
    } else {
      this.gameResults['wrong answers'] = this.gameData;
      Array.prototype.forEach.call(this.variants, ((el) => {
        if (el.innerText === this.rightVariantText) {
          el.classList.add('right');
        }
      }));
      if (target instanceof Element) {
        target.classList.add('wrong');
      }
      this.showAnswer(false);
    }
  }

  showAnswer() {
    this.icon.src = this.wordImage;
    this.icon.removeEventListener('click', this.soundHandler);
    this.answerBlock.classList.remove('hidden');
    this.gameButton.textContent = 'Next';
  }

  pageElementsDropToDefault() {
    Array.prototype.forEach.call(this.variants, ((el) => {
      el.classList.remove('right');
      el.classList.remove('wrong');
    }));
    this.gameButton.textContent = `I don't know`;
    this.icon.src = 'images/speaker.svg';
    this.icon.addEventListener('click', this.soundHandler);
    this.answerBlock.classList.add('hidden');
  }

  startRound() {
    this.pageElementsDropToDefault();
    this.gameData = this.gameWords.pop();
    let variantsText = this.gameData.variants.map((el) => el.wordTranslate);
    this.rightVariantText = this.gameData.wordTranslate;
    variantsText.push(this.rightVariantText);
    variantsText = this.randomize(variantsText);
    console.log(this.gameData);
    this.icon.onload = () => {
      variantsText.forEach((el, i) => {
        this.variants[i].textContent = el;
      });
    };
    this.audioTask = new Audio();
    this.audioTask.src = this.gameData.audio;
    this.audioHint = new Audio();
    this.audioHint.src = this.gameData.audioMeaning;
    this.wordImage = this.gameData.image;
    this.rightAnswer.textContent = this.rightVariantText;
    setTimeout(this.audioTask.play.bind(this.audioTask), 500);
  }

  createShowAnswerBlock() {
    this.answerBlock = this.createElement('div', ['audio-call__show-answer', 'hidden']);
    this.rightAnswer = this.createElement('div', 'audio-call__answer');
    const smallIcon = this.createElement('img', 'audio-call__small-icon');
    smallIcon.src = 'images/speaker.svg';
    smallIcon.addEventListener('click', this.soundHandler);
    this.answerBlock.append(smallIcon, this.rightAnswer);
    return this.answerBlock;
  }

  createVariantsBlock() {
    this.variantsBlock = this.createElement('div', 'audio-call__answers');
    this.variantsBlock.addEventListener('click', this.checkAnswer.bind(this));
    this.variants = [1, 1, 1, 1, 1];
    this.variants = this.variants.map(() => this.createElement('p', 'audio-call__answer'));
    this.variantsBlock.append(...this.variants);
    return this.variantsBlock;
  }

  createSoundIcon() {
    this.icon = this.createElement('img', 'audio-call__speaker');
    this.icon.src = 'images/speaker.svg';
    this.soundHandler = this.soundIconHandler.bind(this);
    this.icon.addEventListener('click', this.soundHandler);
    return this.icon;
  }

  soundIconHandler() {
    this.audioTask.play();
  }

  createGameButton() {
    this.gameButton = this.createElement('button', ['audio-call__game-button', 'btn', 'btn-secondary']);
    this.gameButton.textContent = `I don't know`;
    this.gameButton.addEventListener('click', this.gameButtonHandler.bind(this));
    return this.gameButton;
  }

  gameButtonHandler() {
    const text = this.gameButton.textContent;
    switch (text) {
      case `I don't know`:
        this.showAnswer();
        return;
      case 'Next':
        this.startRound();
        return;
      default:
        this.startRound();
    }
  }

  renderPage() {
    const elements = [];
    elements.push(this.createSoundIcon(), this.createShowAnswerBlock(), this.createVariantsBlock(), this.createGameButton());
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
        this.gameWords = words;
        container.innerHTML = '';
        container.append(...this.renderPage());
        this.startRound();
      });
  }
}

const gamePage = new GamePage(createElement, randomize);

export default gamePage;
