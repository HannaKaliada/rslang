import createDomElem from '../common';
import getWords from '../../../../shared/get-words';
import getImg from '../data';
import Puzzle from '../app';

const FIRST_VALUE = 0;

async function start() {
  const errors = createDomElem('div', ['errors']);
  const { body } = document;
  const app = Puzzle.create()
    .createContainer()
    .addControls({ group: FIRST_VALUE, page: FIRST_VALUE });
  body.append(app.container, errors);
  const data = await getWords(FIRST_VALUE, FIRST_VALUE);
  const imgData = await getImg();
  if (typeof data === 'object' && typeof imgData === 'object') {
    app
      .addContent(data, imgData);
  }
}

function createStartPage() {
  const titleText = 'english puzzle';
  const title = createDomElem('h1', ['start-page__title'], [titleText.toUpperCase()]);
  const subtitleText = 'Click on words, collect phrases. <br> Words can be drugs and drop. Select tooltips in the menu';
  const subtitle = createDomElem('p', ['start-page__subtitle']);
  subtitle.innerHTML = subtitleText;
  const btn = createDomElem('button', ['start-page__btn', 'btn', 'btn-primary'], ['Start']);
  const page = createDomElem('div', ['start-page'], [title, subtitle, btn]);
  page.addEventListener('click', (e) => {
    if (e.target === btn) {
      e.currentTarget.remove();
      start();
    }
  });
  return page;
}

export default start;
