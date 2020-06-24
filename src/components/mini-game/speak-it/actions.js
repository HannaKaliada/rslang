import State from './state';
import ImageField from './content/content-image';
import WordsField from './content/content-words';
import getWords from './get-words';
import Result from './result';
import Content from './content';

// eslint-disable-next-line import/no-mutable-exports
let actions;

function changeClass(elem) {
  elem.parentNode.classList.remove('show');
  elem.parentNode.parentNode.classList.remove('show');
}

function toggleClass(elem, first, second) {
  elem.classList.toggle(first);
  elem.classList.toggle(second);
}

function changeClassSpeak() {
  const elem = document.querySelector('button[data-action="speak"]');
  toggleClass(elem, 'btn-primary', 'btn-success');
}

function changeClassBtns() {
  let btns = document.querySelectorAll('.btn-primary');
  if (btns.length) {
    btns.forEach((node) => {
      toggleClass(node, 'btn-primary', 'btn-secondary');
    });
    return;
  }
  btns = document.querySelectorAll('.btn-secondary');
  btns.forEach((node) => {
    toggleClass(node, 'btn-primary', 'btn-secondary');
  });
}

async function changeLvl(group, page) {
  const words = await getWords(page, group);
  if (typeof words === 'object') {
    State.create()
      .resetScore()
      .wordsData = words;
    ImageField.create()
      .resetInfo();
    WordsField.create()
      .updateContent();
  }
}

function compareAnswers(str) {
  const state = State.create();
  const { correctWords } = state;
  if (correctWords.find((word) => word === str.toLowerCase())) return;
  const words = document.querySelectorAll('.speak-it__content-word__item-title');
  const word = [...words].find((elem) => elem.textContent.toLowerCase() === str.toLowerCase());
  if (word) {
    const wordData = state.wordsData.find((obj) => obj.word.toLowerCase() === str.toLowerCase());
    state
      .addPoint()
      .correctWords.push(word.textContent.toLowerCase());
    word.parentNode.classList.add('speak-it__correct');
    ImageField.create()
      .addPoint()
      .fieldImg
      .setAttribute('src', wordData.image);
  }
  if (correctWords.length === state.wordsData.length) {
    actions.turnOff();
    actions.result();
  }
}

actions = {
  curWordElem: null,

  word(elem, val) {
    if (this.isStart) return;
    const state = State.create().wordsData;
    const word = state.find((obj) => obj.word === val);
    const field = ImageField.create();
    const img = field.fieldImg;
    const title = field.fieldTitle;
    const audio = elem.parentNode.querySelector('.speak-it__content-word__item-audio');

    if (this.curWordElem) this.curWordElem.classList.toggle('speak-it__active');
    this.curWordElem = elem.parentNode;
    this.curWordElem.classList.toggle('speak-it__active');

    if (word && img && title && audio) {
      img.setAttribute('src', word.image);
      title.textContent = word.wordTranslate;
      audio.play();
    }
  },

  restart() {
    this.isStart = false;
    State.create()
      .resetScore();
    ImageField.create()
      .resetInfo();
    if (this.curWordElem) {
      this.curWordElem.classList.toggle('speak-it__active');
      this.curWordElem = null;
    }
    const corrects = [...document.querySelectorAll('.speak-it__correct')];
    if (corrects.length) {
      corrects.forEach((elem) => elem.classList.remove('speak-it__correct'));
    }
  },

  action(elem, type) {
    if (this[type]) {
      this[type]();
    }
  },

  result() {
    const result = Result.create()
      .createContainer()
      .addContent()
      .container;
    Content.create().container.append(result);
  },

  levelChange(elem) {
    elem.parentNode.classList.toggle('show');
    elem.nextSibling.classList.toggle('show');
  },

  page(elem, type) {
    changeClass(elem);
    const state = State.create();
    state.page = parseInt(type, 10);
    changeLvl(state.group, state.page);
    this.isStart = false;
    // eslint-disable-next-line no-param-reassign
    elem.parentNode.previousSibling.textContent = `Page: ${state.page + 1}`;
  },

  level(elem, type) {
    changeClass(elem);
    const state = State.create();
    state.group = parseInt(type, 10);
    changeLvl(state.group, state.page);
    this.isStart = false;
    // eslint-disable-next-line no-param-reassign
    elem.parentNode.previousSibling.textContent = `Level: ${state.group + 1}`;
  },

  sound(elem) {
    const parent = elem.parentNode;
    const resultAudio = parent.querySelector('.speak-it__result__audio');
    resultAudio.play();
  },

  return() {
    Result.create()
      .removeContent()
      .container.remove();
  },

  'new game': function () {
    const pages = [...document.querySelectorAll('.dropdown-page')];
    const num = Math.floor(Math.random() * pages.length);
    pages.forEach((elem) => {
      const { page } = elem.dataset;
      if (parseInt(page, 10) === num) {
        elem.click();
      }
    });
    this.return();
  },

  speak() {
    if (!this.recognition) this.turnOn();
    else this.turnOff();
  },

  recognition: null,

  isStart: false,

  turnOn() {
    changeClassSpeak();
    changeClassBtns();
    if (!this.isStart) {
      ImageField.create().resetInfo();
      this.isStart = true;
    }
    if (this.curWordElem) this.curWordElem.classList.remove('speak-it__active');
    // eslint-disable-next-line no-use-before-define,no-undef
    const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = false;
    this.recognition.lang = 'en=EN';
    this.recognition.continuous = false;
    this.recognition.addEventListener('result', (e) => {
      const { output } = ImageField.create();
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      compareAnswers(transcript);
      output.textContent = '';
      output.textContent = transcript;
    });
    this.recognition.addEventListener('end', this.recognition.start);
    this.recognition.start();
  },

  turnOff() {
    changeClassBtns();
    changeClassSpeak();
    const { output } = ImageField.create();
    output.textContent = '';
    this.recognition.removeEventListener('end', this.recognition.start);
    this.recognition.abort();
    this.recognition = null;
  },
};

export default actions;
