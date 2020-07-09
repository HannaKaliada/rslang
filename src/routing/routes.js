import createStartPage from '../components/mini-game/speak-it/start-page';
import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import learningWords from '../components/learningWords/learningWords';
import initVocabulary from '../components/vocabulary/initVocabulary';

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

  '#/vocabulary': {
    requiresAuth: true,
    render: initVocabulary,
  },

};

export default routes;
