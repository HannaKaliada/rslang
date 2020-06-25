// import $ from 'jquery';
import createDomElem from '../common';
import getWords from '../../../../shared/get-words';
import State from '../state';
import SpeakIt from '../index';

export default function createStartPage(node) {
  const tittle = 'speakit';
  const subTittle = [
    'Click on the words to hear them sound.',
    document.createElement('br'),
    'Click on the button and speak the words into the microphone.',
  ];
  const btn = 'START';
  const startPageTitle = createDomElem('h1', ['start-page__title'], [tittle.toUpperCase()]);
  const startPageSubTitle = createDomElem('p', ['start-page__subtitle'], [...subTittle]);
  const startPageBtn = createDomElem('button', ['start-page__btn', 'btn', 'btn-primary'], [btn]);
  const startPage = createDomElem(
    'div', ['start-page'], [startPageTitle, startPageSubTitle, startPageBtn],
  );
  async function toContent() {
    const data = await getWords(0, 0);
    // eslint-disable-next-line no-multi-assign
    State.create()
      .wordsData = data;
    const speakIt = SpeakIt.create()
      .createContainer()
      .addControls()
      .addContent()
      .addClickHandle()
      .container;
    startPageBtn.removeEventListener('click', toContent);
    startPage.remove();
    node.append(speakIt);
  }
  startPageBtn.addEventListener('click', toContent);
  return startPage;
}
