// eslint-disable-next-line import/extensions
import settings from '../components/settings/settings.js';
import createStartPage from '../components/mini game/speak-it/start-page';

function mainPage() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is main page';
  const list = document.createElement('ul');
  list.innerHTML = `<li><a href="#/statis-tics">Statistic page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>
  <li><a href="#/speak-it">Speak it</a></li>`;
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
};

export default routes;
