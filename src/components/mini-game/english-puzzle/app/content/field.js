import createDomElem from '../../common';

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
    this.appContainer = createDomElem('div', ['puzzle__content__field-list']);
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
      for (let i = 0; i < this.count; i += 1) {
        const field = createDomElem('div', ['puzzle__content__field-item']);
        this.fields.push(field);
        this.container.append(field);
      }
    }
    return this;
  }
}

export default Field;
