import createDomElem from '../common';

let instance;

class ImageField {
  get container() {
    return this.appContainer;
  }

  static create() {
    return new ImageField();
  }

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.appContainer = null;
    this.img = null;
    this.title = null;
    this.input = null;
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['speak-it__content-image']);
    return this;
  }

  addContent() {
    this.img = createDomElem('img', ['speak-it__content-image__img']);
    this.img.setAttribute('src', '/assets/image/start-pic.jpg');
    this.title = createDomElem('p', ['speak-it__content-image__img-title']);
    this.input = createDomElem('p', ['speak-it__content-image__img-input']);
    this.container.append();
    return this;
  }
}

export default ImageField;
