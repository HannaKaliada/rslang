import createDomElem from '../common';
import Controls from './controls';
import Content from './content';
// eslint-disable-next-line no-unused-vars

let instance;

class Puzzle {
  get container() {
    return this.appContainer;
  }

  constructor() {
    if (instance) {
      return instance;
    }
    this.appContainer = null;
    instance = this;
    return this;
  }

  static create() {
    return new Puzzle();
  }

  createContainer() {
    this.appContainer = createDomElem('div', ['puzzle']);
    return this;
  }

  addControls(data) {
    const controls = Controls.create()
      .createContainer()
      .addDataControls(data)
      .addOptionsControls()
      .addDataEventClick()
      .addOptionsEventClick();
    this.container.append(controls.container);
    return this;
  }

  addContent(data) {
    const content = Content.create()
      .setData(data)
      .createContainer()
      .addTips()
      .addField()
      .addPuzzleWords()
      .addControls()
      .addEventClick()
      .addEventDrug();
    this.container.append(content.container);
    return this;
  }
}

export default Puzzle;
