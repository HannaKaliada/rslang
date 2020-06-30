import createElement from '../../shared/createElement';
import createGameData from './createGameData';
import '../../assets/icons/speaker.svg';
import '../../assets/icons/spinner.svg';
import randomize from '../../shared/randomize';
import getUserStastics from '../../services/getUserStastics';
import setUserStatistics from '../../services/setUserStatistics';
import {state} from './startPage';

class GamePage {
  constructor(createHTML, randomizing, getStatistics, setStatistics) {
    this.createElement = createHTML;
    this.randomize = randomizing;
    this.getStatistics = getStatistics;
    this.setStatistics = setStatistics;
    this.gameResults = {
      rightAnswers: [],
      wrongAnswers: [],
    };
  }

  variantsBlockHandler(e) {
    if (!e.target.classList.contains('audio-call__answer')) {
      return;
    }
    this.checkAnswer(e.target);
  }

  checkAnswer(target) {
    this.showAnswer();
    this.gameButton.value = 'Next';
    if (target.innerText === this.rightVariantText) {
      this.gameResults.rightAnswers.push(this.gameData);
      this.totalScore += this.isHintUsed ? 1 : 2;
      target.classList.add('right');
      this.showAnswer(true);
    } else {
      this.gameResults.wrongAnswers.push(this.gameData);
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
    this.gameButton.textContent = "I don't know";
    this.icon.src = 'images/speaker.svg';
    this.icon.addEventListener('click', this.soundHandler);
    this.answerBlock.classList.add('hidden');
  }

  startRound() {
    this.pageElementsDropToDefault();
    if (!this.gameWords.length) {
      this.stopGame();
    }
    this.gameData = this.gameWords.pop();
    let variantsText = this.gameData.variants.map((el) => el.wordTranslate);
    this.rightVariantText = this.gameData.wordTranslate;
    variantsText.push(this.rightVariantText);
    variantsText = this.randomize(variantsText);
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

  stopGame() {
    this.renderStatisticPage();
    const statObj = this.getStatistics(state);
    if (statObj.audiocall.results) {
      statObj.audiocall.results.push();
    } else {
      statObj.audiocall.results = [];
    }

  }

  renderStatisticPage() {
    const h2 = this.createElement('h2', 'audio-call__title');
    h2.textContent = 'Your statistics:';
    const rightAnswersTitle = this.createElement('h3', 'audio-call__list-title');
    rightAnswersTitle.textContent = 'Right answers:';
    const rightAnswers = this.createElement('ul', 'audio-call__statistics-list');
    rightAnswers.append(...this.gameResults.rightAnswers.map((el) => {
      const li = this.createElement('li', 'audio-call__statistics-item');
      li.textContent = el.word;
      return li;
    }));
    const wrongAnswersTitle = this.createElement('h3', 'audio-call__list-title');
    wrongAnswersTitle.textContent = 'Wrong answers:';
    const wrongAnswers = this.createElement('ul', 'audio-call__statistics-list');
    wrongAnswers.append(...this.gameResults.wrongAnswers.map((el) => {
      const li = this.createElement('li', 'audio-call__statistics-item');
      li.textContent = el.word;
      return li;
    }));
    const page = this.createElement('div', 'audio-call__statistics');
    const firstBlock = this.createElement('div', 'audio-call__statitics-block');
    const secondBlock = this.createElement('div', 'audio-call__statitics-block');
    firstBlock.append(rightAnswersTitle, rightAnswers);
    secondBlock.append(wrongAnswersTitle, wrongAnswers);
    this.gameButton.textContent = 'Next round';
    page.append(h2, firstBlock, secondBlock, this.gameButton);
    const container = document.querySelector('.container.audio-call');
    container.innerHTML = '';
    container.append(page);
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
    this.variantsBlock.addEventListener('click', this.variantsBlockHandler.bind(this));
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
    this.gameButton.textContent = "I don't know";
    this.gameButton.addEventListener('click', this.gameButtonHandler.bind(this));
    return this.gameButton;
  }

  createLevelControls() {
    const fm = this.createElement('form', )
  }

  gameButtonHandler() {
    const text = this.gameButton.textContent;
    switch (text) {
      case "I don't know":
        this.showAnswer();
        return;
      case 'Next':
        this.startRound();
        return;
      case 'Next round':
        this.init();
        return;
      default:
        this.startRound();
    }
  }

  renderPage() {
    const elements = [];
    elements.push(this.createSoundIcon(), this.createShowAnswerBlock());
    elements.push(this.createVariantsBlock(), this.createGameButton());
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

const gamePage = new GamePage(createElement, randomize, getUserStastics, setUserStatistics);

export default gamePage;
