import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import renderSprintPage from '../components/sprint/SprintPage';

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

const routes = {
  '#/': renderStartPage,
  '#/statistics': statistics,
  '#/game': game,
  '#/settings': settings,
  '#/auth': createSignInSignUpPage.init.bind(createSignInSignUpPage),
  '#/about-team': renderTeamPage,
  '#/hub': initHubPage,
  '#/sprint': renderSprintPage,
};

export default routes;
