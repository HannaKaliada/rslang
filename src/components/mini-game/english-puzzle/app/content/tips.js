import createDomElem from '../../common';

let instance;

class Tips {
  get container() {
    return this.appContainer;
  }

  constructor() {
    if (instance) {
      return instance;
    }
    this.appContainer = null;
    this.data = null;
    this.btn = null;
    this.text = null;
    this.audio = null;
    this.isText = true;
    this.isBtn = true;
    instance = this;
    return this;
  }

  static create() {
    return new Tips();
  }

  setData(data) {
    this.data = data;
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['content__tips']);
    return this;
  }

  cleanContainer() {
    this.appContainer.innerHTML = '';
    return this;
  }

  addBtn() {
    if (this.isBtn) {
      this.btn = createDomElem('button', ['content__tips-btn', 'btn', 'btn-info']);
      this.btn.setAttribute('data-action', 'repeat');
      this.container.prepend(this.btn);
    }
    return this;
  }

  delBtn() {
    if (this.btn) {
      this.btn.remove();
      this.btn = null;
    }
    return this;
  }

  addText() {
    if (this.isText) {
      this.text = createDomElem('p', ['content__tips-text'], [this.data.textExampleTranslate]);
      this.container.append(this.text);
    }
    return this;
  }

  delText() {
    if (this.text) {
      this.text.remove();
      this.text = null;
    }
    return this;
  }

  addAudio() {
    const source = createDomElem('source', ['content__tips-source']);
    source.setAttribute('src', this.data.audioExample);
    source.setAttribute('type', 'audio/ogg');
    this.audio = createDomElem('audio', ['content__tips-audio'], [source]);
    this.container.append(this.audio);
    return this;
  }

  delAudio() {
    if (this.audio) {
      this.audio.remove();
      this.audio = null;
    }
    return this;
  }

  addContent() {
    this
      .addBtn()
      .addText()
      .addAudio();
    return this;
  }
}

export default Tips;
