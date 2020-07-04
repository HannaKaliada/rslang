import createStartPage from '../components/mini-game/speak-it/start-page';
import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import renderSavannaPage from "../components/mini-game/savanna/render-savanna-page.js";
import learningWords from '../components/learningWords/learningWords.js';


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
  <li><a href="#/statis-tics">Statistic page</a></li>
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
  '#/': renderStartPage,
  '#/statistics': statistics,
  '#/game': game,
  '#/settings': settings,
  '#/auth': createSignInSignUpPage.init.bind(createSignInSignUpPage),
  '#/about-team': renderTeamPage,
  '#/hub': initHubPage,

  "#/savanna-game": renderSavannaPage,

  '#/learning': learningWords,
  '#/speak-it': speakIt,
};

export default routes;
