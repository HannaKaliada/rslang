import createDomElem from '../../common';
// eslint-disable-next-line import/no-cycle
import Content from './index';

function createWordsList(words) {

}

let instance;

class Field {
  get container() {
    return this.appContainer;
  }

  constructor() {
    if (instance) {
      return instance;
    }
    this.appContainer = null;
    this.fields = [];
    instance = this;
    return this;
  }

  static create() {
    return new Field();
  }

  getFields() {
    return this.fields;
  }

  cleanFields() {
    this.fields = [];
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['content__field']);
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

  addContent(url) {
    const words = Content.create().getWordsData();
    if (words) {
      const wordsNodeList = words.map((elem) => {
        const wordsArr = elem.textExample.split(' ').map(() => createDomElem('div', ['content__field-word']));
        const wordsList = createDomElem('div', ['content__field-words'], wordsArr);
        const field = createDomElem('div', ['content__field-item'], [wordsList]);
        this.fields.push(field);
        return field;
      });
      const numNodeList = words.map((elem, i) => createDomElem('li', ['content__field-num'], [`${i + 1}`]));
      const numList = createDomElem('ul', ['content__field-nums'], [...numNodeList]);
      const imgStyle = ['style', `background-image: url(${url})`];
      const wordsList = createDomElem('div', ['content__field-words__container'], [...wordsNodeList], [imgStyle]);
      this.container.append(numList, wordsList);
    }
    return this;
  }
}

export default Field;
