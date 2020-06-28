import createDomElem from '../../common';
import Tips from './tips';
import Field from './field';
import WordsPuzzle from './words-puzzle';
import Buttons from './buttons';
// eslint-disable-next-line import/no-cycle
import actions from './action';

let instance;

let dragSrcEl = null;

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

function handleDragStart(e) {
  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  const curPos = instance.getCurWords();
  const curField = Field.create().getFields()[curPos];
  const puzzle = WordsPuzzle.create().container;
  if (curField === e.target || puzzle === e.target) e.dataTransfer.dropEffect = 'move';
  else e.dataTransfer.dropEffect = 'none';
  return false;
}

function handleDragEnter(e) {
  const curPos = instance.getCurWords();
  const curField = Field.create().getFields()[curPos];
  const puzzle = WordsPuzzle.create().container;
  if (curField === e.target || puzzle === e.target) e.target.classList.add('over');
}

function handleDragLeave(e) {
  const curPos = instance.getCurWords();
  const curField = Field.create().getFields()[curPos];
  const puzzle = WordsPuzzle.create().container;
  if (curField === e.target || puzzle === e.target) e.target.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  const curPos = instance.getCurWords();
  const curField = Field.create().getFields()[curPos];
  const puzzle = WordsPuzzle.create().container;
  if (curField === e.target || puzzle === e.target) {
    e.target.classList.remove('over');
    active(dragSrcEl);
  }
  return false;
}

// eslint-disable-next-line no-unused-vars
function handleDragEnd(e) {

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

  addField() {
    const field = Field.create()
      .createContainer()
      .setCount(this.wordsData.length)
      .addContent();
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
    this.container.addEventListener('dragenter', handleDragEnter);
    this.container.addEventListener('dragleave', handleDragLeave);
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
      .setCount(this.wordsData.length)
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
