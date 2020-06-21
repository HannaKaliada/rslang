import settings from '../components/settings/settings.js';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';

function mainPage() {
  const page = document.querySelector('.root');
  const header = document.createElement('h2');
  header.innerText = 'This is main page';
  const list = document.createElement('ul');
  list.innerHTML = `<li><a href="#/statis-tics">Statistic page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>
  <li><a href="#/auth">SignIn</a></li>`;
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
const routes = {
  '#/': mainPage,
  '#/statis-tics': statistics,
  '#/game': game,
  '#/settings': settings,
  '#/auth': createSignInSignUpPage.init.bind(createSignInSignUpPage),
};

export default routes;
