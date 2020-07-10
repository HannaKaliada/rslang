import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import renderSavannaPage from '../components/mini-game/savanna/render-savanna-page';
import learningWords from '../components/learningWords/learningWords';
import createStartPage from '../components/mini-game/speak-it/start-page';
import renderOurGamePage from '../components/mini-game/our-game/our-game-render-page';

function statistics() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is statistics page';
  const list = document.createElement('ul');
  list.innerHTML = `
  <li><a href="#/">Main page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>`;
  page.append(header, list);
}

function game() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is game page';
  const list = document.createElement('ul');
  list.innerHTML = `
  <li><a href="#/statistics">Statistic page</a></li>
  <li><a href="#/">Main page</a></li>
  <li><a href="#/settings">Settings</a></li>`;
  page.append(header, list);
}

function speakIt() {
  const page = document.querySelector('.root');
  page.innerHTML = '';
  page.append(createStartPage(page));
}

const routes = {
  '#/': {
    requiresAuth: false,
    render: renderStartPage,
  },
  '#/statistics': {
    requiresAuth: true,
    render: statistics,
  },
  '#/game': {
    requiresAuth: true,
    render: game,
  },
  '#/settings': {
    requiresAuth: true,
    render: settings,
  },
  '#/auth': {
    requiresAuth: false,
    render: createSignInSignUpPage.init.bind(createSignInSignUpPage),
  },
  '#/about-team': {
    requiresAuth: false,
    render: renderTeamPage,
  },
  '#/hub': {
    requiresAuth: true,
    render: initHubPage,
  },
  '#/learning': {
    requiresAuth: true,
    render: learningWords,
  },
  '#/speak-it': {
    requiresAuth: true,
    render: speakIt,
  },
  '#/savanna-game': {
    requiresAuth: true,
    render: renderSavannaPage,
  },
  '#/our-game': {
    requiresAuth: true,
    render: renderOurGamePage,
  },
};

export default routes;
