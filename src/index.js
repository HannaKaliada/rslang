import '@/styles/normalize.css';
import '@/styles/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routing from './routing/routing';
import routes from './routing/routes';
import SpeakIt from './components/mini game/speak-it';
import State from './components/mini game/speak-it/state';
import getWords from './components/mini game/speak-it/get-words';

const routing = new Routing(routes);

document.addEventListener('DOMContentLoaded', async () => {
  const data = await getWords(0, 0);
  // eslint-disable-next-line no-multi-assign
  State.create()
    .wordsData = data;
  console.log(data);
  const speakIt = SpeakIt.create()
    .createContainer()
    .addControls()
    .addContent()
    .container;
  const { body } = document;
  body.append(speakIt);
  // routing.init();
});
