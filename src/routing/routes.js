import settings from "../components/settings/settings.js";
import renderTeamPage from "../components/about-team-page/render-about-team-page.js";
import renderStartPage from "../components/start-page/renderStartPage.js";
import renderSavannaPage from "../components/mini-game/savanna/render-savanna-page.js";

function mainPage() {
  const page = document.querySelector(".root");
  const header = document.createElement("h2");
  header.innerText = "This is main page";
  const list = document.createElement("ul");
  list.innerHTML = `<li><a href="#/statis-tics">Statistic page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>
  <li><a href="#/about-team">About team page</a></li>
  <li><a href="#/savanna-game">Savanna game page</a></li>`;
  page.append(header, list);
}

function statistics() {
  const page = document.querySelector(".root");
  const header = document.createElement("h2");
  header.innerText = "This is statistics page";
  const list = document.createElement("ul");
  list.innerHTML = `<li><a href="#/">Main page</a></li>
  <li><a href="#/game">Game page</a></li>
  <li><a href="#/settings">Settings</a></li>`;
  page.append(header, list);
}

function game() {
  const page = document.querySelector(".root");
  const header = document.createElement("h2");
  header.innerText = "This is game page";
  const list = document.createElement("ul");
  list.innerHTML = `<li><a href="#/statis-tics">Statistic page</a></li>
  <li><a href="#/">Main page</a></li>
  <li><a href="#/settings">Settings</a></li>`;
  page.append(header, list);
}

const routes = {
  "#/": renderStartPage,
  "#/statis-tics": statistics,
  "#/game": game,
  "#/settings": settings,
  "#/about-team": renderTeamPage,
  "#/savanna-game": renderSavannaPage,
};

export default routes;
