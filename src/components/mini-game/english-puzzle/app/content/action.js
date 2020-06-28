// eslint-disable-next-line import/no-cycle
import Content from './index';
import Field from './field';
import WordsPuzzle from './words-puzzle';
import Buttons from './buttons';
import Tips from './tips';
import createDomElem from '../../common';

function checkField() {
  const curPos = Content.create().getCurWords();
  const btns = Buttons.create();
  const words = WordsPuzzle.create().getWords().split(' ');
  const field = Field.create().getFields()[curPos];
  if (field.children.length === words.length) {
    btns.addCheckBtn();
  } else {
    btns.delCheckBtn();
  }
}

function cleanCheckWords() {
  const wordsField = document.querySelectorAll('.content__words-item');
  wordsField.forEach((word) => word.classList.remove('correct-word', 'wrong-word'));
}

const actions = {

  isSound: true,

  isCheck: false,

  repeat() {
    const audio = document.querySelector('.content__tips-audio');
    audio.play();
  },

  know() {
    if (!this.isCheck) {
      const curPos = Content.create().getCurWords();
      const words = WordsPuzzle.create().cleanContainer().getWords().split(' ');
      const field = Field.create()
        .cleanField(curPos)
        .getFields()[curPos];
      words.forEach((str) => {
        const word = createDomElem('div', ['content__words-item'], [str]);
        word.setAttribute('data-action', 'out-field');
        field.append(word);
      });
      checkField();
    }
  },

  check() {
    const curPos = Content.create().getCurWords();
    const words = WordsPuzzle.create().cleanContainer().getWords().split(' ');
    const curField = Field.create().getFields()[curPos];
    const btns = Buttons.create();
    curField.classList.remove('ddd');
    words.forEach((str, index) => {
      curField.children[index].classList.remove('correct-word', 'wrong-word');
      if (str === curField.children[index].textContent) {
        curField.children[index].classList.add('correct-word');
      } else {
        curField.children[index].classList.add('wrong-word');
      }
    });
    const result = words
      .every((str, index) => str === curField.children[index].textContent);
    if (result) {
      btns.delCheckBtn().addContinueBtn();
      this.isCheck = true;
      if (this.isSound) this.repeat();
    }
  },

  continue() {
    cleanCheckWords();
    Content.create().nextWords();
    const curPos = Content.create().getCurWords();
    const { textExampleTranslate, audioExample } = Content.create().getWordsData()[curPos];
    Tips.create()
      .delText()
      .delAudio()
      .setData({ textExampleTranslate, audioExample })
      .addText()
      .addAudio();
    Buttons.create().delContinueBtn();
  },

  'in-field': function (elem) {
    console.log(elem.classList);
    if (!this.isCheck) {
      const curPos = Content.create().getCurWords();
      const field = Field.create();
      // elem.setAttribute('data-action', 'out-field');
      const curField = field.getFields()[curPos];
      const secondElem = 1;
      const curWordsList = [...curField.children[secondElem].children]
        .some((element) => {
          if (element.textContent === '') {
            // eslint-disable-next-line no-param-reassign
            element.textContent = elem.textContent;
            element.setAttribute('data-action', 'out-field');
            return true;
          }
          return false;
        });
      console.log(curWordsList);
      // checkField();
    }
  },

  'out-field': function (elem) {
    if (!this.isCheck) {
      const curPos = Content.create().getCurWords();
      const curField = Field.create().getFields()[curPos];
      if (elem.parentNode === curField) {
        cleanCheckWords();
        elem.setAttribute('data-action', 'in-field');
        const puzzle = WordsPuzzle.create();
        const list = puzzle.container;
        list.append(elem);
        checkField();
      }
    }
  },
};

export default actions;
