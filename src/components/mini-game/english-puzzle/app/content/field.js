import createDomElem from '../../common';
// eslint-disable-next-line import/no-cycle
import Content from './index';

function createWordsList(words) {

}

let instance;

class Field {
  getFields() {
    return this.fields;
  }

  cleanFields() {
    this.fields = [];
    return this;
  }

  get container() {
    return this.appContainer;
  }

  constructor() {
    if (instance) {
      return instance;
    }
    this.appContainer = null;
    this.count = null;
    this.fields = [];
    instance = this;
    return this;
  }

  static create() {
    return new Field();
  }

  setCount(num) {
    this.count = num;
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['content__field-list']);
    return this;
  }

  cleanContainer() {
    this.appContainer.innerHTML = '';
    return this;
  }

  cleanField(num) {
    this.fields[num].innerHTML = '';
    return this;
  }

  addContent() {
    if (this.count) {
      const words = Content.create().getWordsData();
      console.log(words);
      for (let i = 0; i < this.count; i += 1) {
        const numField = createDomElem('div', ['content__field-num'], [`${i + 1}`]);
        const wordsArr = words[i].textExample.split(' ').map(() => createDomElem('div', ['content__field-word']));
        const wordsList = createDomElem('div', ['content__field-words'], wordsArr);
        const field = createDomElem('div', ['content__field-item'], [numField, wordsList]);
        this.fields.push(field);
        this.container.append(field);
      }
    }
    return this;
  }
}

export default Field;
