import settings from '../components/settings/settings.js';
import renderStartPage from '../components/start-page/renderStartPage.js';
import startPage from '../components/audio-call/createAudioCallPage';

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
const routes = {
  '#/': startPage.createPage.bind(startPage),
  '#/statis-tics': statistics,
  '#/game': game,
  '#/settings': settings,
};

export default routes;
