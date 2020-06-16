import '@/styles/normalize.css';
import '@/styles/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routing from './routing/routing';
import routes from './routing/routes';

const routing = new Routing(routes);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.root');
    routing.navigation('#/');
    window.onpopstate = () => {
        if (!window.location.href.match(/#\/\w*$/)) {
            return
        }
        const route = window.location.href.match(/#\/\w*$/)[0];
        console.log(route);
        routing.navigation(route);
    };
});