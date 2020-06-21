import '@/styles/normalize.css';
import '@/styles/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routing from './routing/routing';
import routes from './routing/routes';
import createStartPage from './components/mini game/speak-it/start-page';

const routing = new Routing(routes);

document.addEventListener('DOMContentLoaded', () => {
  const { body } = document;
  body.append(createStartPage(body));
  // routing.init();
});
