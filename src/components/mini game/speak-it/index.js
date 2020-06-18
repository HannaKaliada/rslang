import createDomElem from './common';
import Controls from './controls';
import Content from './content';

let instance;

class SpeakIt {
  get container() {
    return this.appContainer;
  }

  static create() {
    return new SpeakIt();
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
    this.appContainer = createDomElem('div', ['speak-it']);
    return this;
  }

  addControls() {
    const controls = Controls.create()
      .createContainer()
      .addLevelControls()
      .addAppControls()
      .container;
    this.container.append(controls);
    return this;
  }

  addContent() {
    const content = Content.create()
      .createContainer()
      .addStartImage()
      .container;
    this.container.append(content);
    return this;
  }
}

export default SpeakIt;
