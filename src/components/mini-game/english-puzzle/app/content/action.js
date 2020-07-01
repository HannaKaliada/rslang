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
  const wordsCorrect = document.querySelectorAll('.correct-word');
  const wordsWrong = document.querySelectorAll('.wrong-word');
  wordsCorrect.forEach((word) => word.classList.remove('correct-word'));
  wordsWrong.forEach((word) => word.classList.remove('wrong-word'));
}

function replaceWord(field, elem, direction) {
  field.some((element) => {
    if (element.textContent === '') {
      // eslint-disable-next-line no-param-reassign
      element.textContent = elem.textContent;
      element.setAttribute('data-action', `${direction}-field`);
      element.setAttribute('draggable', 'true');
      element.classList.add('puzzle-shape');
      return true;
    }
    return false;
  });
  const parentElem = elem.parentNode;
  elem.classList.remove('puzzle-shape');
  elem.removeAttribute('draggable');
  elem.removeAttribute('data-action');
  // eslint-disable-next-line no-param-reassign
  elem.textContent = '';
  elem.remove();
  parentElem.append(elem);
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
    if (!this.isCheck) {
      const curPos = Content.create().getCurWords();
      const fieldClass = Field.create();
      const curField = fieldClass.getFields()[curPos];
      const field = [...curField.children];
      replaceWord(field, elem, 'out');
      // checkField();
    }
  },

  'out-field': function (elem) {
    if (!this.isCheck) {
      cleanCheckWords();
      const field = [...WordsPuzzle.create()
        .container
        .children];
      replaceWord(field, elem, 'in');
      // checkField();
    }
  },
};

export default actions;
