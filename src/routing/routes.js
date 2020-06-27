import settings from '../components/settings/settings.js';
import renderTeamPage from '../components/about-team-page/render-about-team-page.js';
import renderStartPage from '../components/start-page/renderStartPage.js';
import createStartPage from '../components/mini-game/speak-it/start-page';
import ready from '../components/mini-game/english-puzzle';

function mainPage() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is main page';
  const list = document.createElement('ul');
  list.innerHTML = `<li><a href="#/statis-tics">Statistic page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>
  <li><a href="#/speak-it">Speak it</a></li>
  <li><a href="#/about-team">About team page</a></li>
  <li><a href="#/english-puzzle">English puzzle</a></li>
`;
  page.append(header, list);
}

function statistics() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is statistics page';
  const list = document.createElement('ul');
  list.innerHTML = `<li><a href="#/">Main page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>`;
  page.append(header, list);
}

function game() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is game page';
  const list = document.createElement('ul');
  list.innerHTML = `<li><a href="#/statis-tics">Statistic page</a></li>
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
  '#/': mainPage,
  '#/statis-tics': statistics,
  '#/game': game,
  '#/settings': settings,
  '#/speak-it': speakIt,
  '#/about-team': renderTeamPage,
  '#/english-puzzle': ready,
};

export default routes;
