import createDomElem from '../common';

let instance;

class WordsField {
  get container() {
    return this.appContainer;
  }

  static create() {
    return new WordsField();
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
    this.appContainer = createDomElem('div', ['speak-it__content-words']);
    return this;
  }
}

export default WordsField;
