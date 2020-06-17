import '@/styles/normalize.css';
import '@/styles/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/about-team-page/about-team-page.js';
import Routing from './routing/routing';
import routes from './routing/routes';

const routing = new Routing(routes);

document.addEventListener('DOMContentLoaded', () => {
    routing.init();
});