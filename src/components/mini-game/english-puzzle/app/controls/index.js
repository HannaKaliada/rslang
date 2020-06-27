import createDomElem from '../../common';
import { createDataControls, createOptionsControls } from './common';
import getWords from '../../../../../shared/get-words';
import Content from '../content';
import actionsContent from '../content/action';
import Tips from '../content/tips';

let instance;

function changeText(elem, val) {
  const secondElem = 1;
  const toggle = elem.parentNode.querySelector('.dropdown-toggle');
  const text = toggle.textContent.split(' ');
  text[secondElem] = `${val + 1}`;
  toggle.textContent = text.join(' ');
}

async function changeView(elem, value, type) {
  let { page, group } = instance.info;
  if (type === 'page') page = value;
  else group = value;
  const data = await getWords(page, group);
  if (typeof data === 'object') {
    changeText(elem.parentNode, parseInt(type === 'page' ? page : group, 10));
    instance.info = { group, page };
    Content.create().updateContent(data);
  }
}

const actions = {
  page(elem) {
    const [value] = Object.values(elem.dataset);
    const [type] = Object.keys(elem.dataset);
    changeView(elem, parseInt(value, 10), type);
  },
  level(elem) {
    const [value] = Object.values((elem.dataset));
    const [type] = Object.keys(elem.dataset);
    changeView(elem, parseInt(value, 10), type);
  },
  sound() {
    actionsContent.isSound = !actionsContent.isSound;
  },
  translate() {
    const tips = Tips.create();
    if (tips.isText) tips.delText();
    else tips.addText();
    tips.isText = !tips.isText;
  },
  melody() {
    const tips = Tips.create();
    if (tips.isBtn) tips.delBtn();
    else tips.addBtn();
    tips.isBtn = !tips.isBtn;
  },
};

function changeData(e) {
  const [action] = Object.keys(e.target.dataset);
  console.log(action);
  if (actions[action]) {
    actions[action](e.target);
  }
}

function toggleActive(elem) {
  elem.classList.toggle('btn-primary');
  elem.classList.toggle('btn-secondary');
}

function changeOptions(e) {
  const [type] = Object.values(e.target.dataset);
  toggleActive(e.target);
  if (actions[type]) {
    actions[type](e.target);
  }
}

class Controls {
  get container() {
    return this.controlsContainer;
  }

  set info(data) {
    this.curInfoLevel = data;
  }

  get info() {
    return this.curInfoLevel;
  }

  constructor() {
    if (instance) {
      return instance;
    }
    this.controlsContainer = null;
    this.dataElem = null;
    this.optionsElem = null;
    this.curInfoLevel = null;
    instance = this;
    return this;
  }

  static create() {
    return new Controls();
  }

  createContainer() {
    this.controlsContainer = createDomElem('div', ['puzzle__controls']);
    return this;
  }

  addDataControls(data) {
    this.info = data;
    this.dataElem = createDataControls(data);
    this.container.append(this.dataElem);
    return this;
  }

  addDataEventClick() {
    this.dataElem.addEventListener('click', changeData);
    return this;
  }

  addOptionsControls() {
    this.optionsElem = createOptionsControls();
    this.container.append(this.optionsElem);
    return this;
  }

  addOptionsEventClick() {
    this.optionsElem.addEventListener('click', changeOptions);
    return this;
  }
}

export default Controls;
