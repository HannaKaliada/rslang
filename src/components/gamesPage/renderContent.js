import games from '../../data/gamesInfo';
import createElement from '../../shared/createElement';

export default function renderContent() {
  const wrapper = createElement('div', 'games-page__wrapper');
  const page = document.querySelector('.root');
  wrapper.insertAdjacentHTML('beforeend',
    `<div class="container games-page">
      <h1>Games:</h1>
      <div class="games"></div>
    </div>`);
  const gamesContainer = document.querySelector('.games');
  games.forEach((game) => {
    gamesContainer.insertAdjacentHTML('beforeend', `<div class="card game">
  <div class="game__title">${game.gameTitle}</div>
  <div class="game__desc">${game.gameDesc}</div>
  <a href="${game.gameURL}" class="btn btn-warning play-btn">Play</a>
  </div>`);
  });
  page.append(wrapper);
}
