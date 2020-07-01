import createDomElem from '../../common';
import Tips from './tips';
// eslint-disable-next-line import/no-cycle
import Field from './field';
import WordsPuzzle from './words-puzzle';
import Buttons from './buttons';
// eslint-disable-next-line import/no-cycle
import actions from './action';
// eslint-disable-next-line import/no-cycle
import {
  // eslint-disable-next-line import/named
  handleDragEnd,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from './drug-and-drop';

let instance;

function active(elem) {
  const { action } = elem.dataset;
  // console.log(elem.dataset);
  if (actions[action]) {
    actions[action](elem);
  }
}

function handleClick(e) {
  active(e.target);
}

class Content {
  get container() {
    return this.appContainer;
  }

  constructor() {
    if (instance) {
      return instance;
    }
    this.appContainer = null;
    this.wordsData = null;
    this.curWords = 0;
    instance = this;
    return this;
  }

  static create() {
    return new Content();
  }

  getCurWords() {
    return this.curWords;
  }

  getWordsData() {
    return this.wordsData;
  }

  setData(data) {
    this.wordsData = data;
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['content']);
    return this;
  }

  addTips() {
    const tips = Tips.create()
      .setData(this.wordsData[this.curWords])
      .createContainer()
      .addContent();
    this.container.append(tips.container);
    return this;
  }

  addField(url) {
    const field = Field.create()
      .createContainer()
      .addContent(url);
    this.container.append(field.container);
    return this;
  }

  addPuzzleWords() {
    const words = WordsPuzzle.create()
      .createContainer()
      .setWords(this.wordsData[this.curWords].textExample)
      .addContent();
    this.container.append(words.container);
    return this;
  }

  addControls() {
    const btns = Buttons.create()
      .createContainer()
      .addFirstBtn()
      .container;
    this.container.append(btns);
    return this;
  }

  addEventClick() {
    this.container.addEventListener('click', handleClick);
    return this;
  }

  addEventDrug() {
    this.container.addEventListener('dragstart', handleDragStart);
    this.container.addEventListener('dragover', handleDragOver);
    this.container.addEventListener('drop', handleDrop);
    this.container.addEventListener('dragend', handleDragEnd);
    return this;
  }

  nextWords() {
    if (this.curWords < this.wordsData.length - 1) {
      actions.isCheck = false;
      this.curWords += 1;
      WordsPuzzle.create()
        .setWords(this.wordsData[this.curWords].textExample)
        .addContent();
    }
    return this;
  }

  updateContent(data) {
    this.setData(data);
    Tips.create()
      .cleanContainer()
      .setData(this.wordsData[this.curWords])
      .addContent();
    Field.create()
      .cleanContainer()
      .cleanFields()
      .addContent();
    WordsPuzzle.create()
      .cleanContainer()
      .setWords(this.wordsData[this.curWords].textExample)
      .addContent();
    Buttons.create()
      .cleanContainer()
      .addFirstBtn();
    actions.isCheck = false;
    return this;
  }
}

export default Content;
