import createDomElem from '../common';
import wordRow from './common';
import State from '../state';

let instance;

class Result {
  get container() {
    return this.appContainer;
  }

  static create() {
    return new Result();
  }

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.appContainer = null;
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['speak-it__result']);
    return this;
  }

  addContent() {
    const state = State.create();
    const words = state.wordsData;
    const correctWords = words
      .filter((obj) => state.correctWords.indexOf(obj.word.toLowerCase()) !== -1)
      .map((obj) => wordRow(obj));
    const wrongWords = words
      .filter((obj) => state.correctWords.indexOf(obj.word.toLowerCase()) === -1)
      .map((obj) => wordRow(obj));
    const btns = ['return', 'new game']
      .map((str) => createDomElem(
        'button', ['speak-it__result__btn', 'btn', 'btn-primary'], [str.toUpperCase()], [['data-action', str]],
      ));
    const btnsRow = createDomElem('div', ['speak-it__result__controls'], btns);
    const correctTitle = createDomElem('p', ['speak-it__result__title'], [`Correct: ${correctWords.length}`]);
    const correctField = createDomElem('div', ['speak-it__result__correct'], [correctTitle, ...correctWords]);
    const wrongTitle = createDomElem('p', ['speak-it__result__title'], [`Wrong: ${wrongWords.length}`]);
    const wrongField = createDomElem('div', ['speak-it__result__wrong'], [wrongTitle, ...wrongWords]);
    const wrap = createDomElem('div', ['speak-it__result__wrap'], [correctField, wrongField, btnsRow]);
    this.container.append(wrap);
    return this;
  }

  removeContent() {
    this.container.textContent = '';
    return this;
  }
}

export default Result;
