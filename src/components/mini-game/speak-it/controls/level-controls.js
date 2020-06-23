import { createPages, createGroups } from './common';
import createDomElem from '../common';

let instance;

class LevelControls {
  get container() {
    return this.appContainer;
  }

  static create() {
    return new LevelControls();
  }

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.appContainer = null;
    this.initValue = 0;
    return this;
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['speak-it__controls-level']);
    return this;
  }

  addLevel() {
    const groups = createGroups(this.initValue);
    const pages = createPages(this.initValue);
    this.container.append(groups, pages);
    return this;
  }
}

export default LevelControls;
