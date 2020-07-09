export default function renderContent() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
      <h1>Games:</h1>
      <div class="games"></div>
    </div>`);
  const gamesContainer = document.querySelector('.games');
  const games = [{
    gameTitle: 'Speak It',
    gameDesc: 'With the help of the game Speak It you will learn new words and also how to pronounce them correctly.',
    gameURL: ''
  },
  {
    gameTitle: 'English Puzzle',
    gameDesc: 'The English Puzzle game will teach you to formulate sentences correctly and to put words in the right order.',
    gameURL: ''
  },
  {
    gameTitle: 'Savanna',
    gameDesc: 'Savanna will make your vocabulary deeper and more diverse and also teaches you to think quickly.',
    gameURL: '#/savanna-game',
  },
  {
    gameTitle: 'Sprint',
    gameDesc: '',
    gameURL: ''
  },
  {
    gameTitle: 'AudioCall',
    gameDesc: '',
    gameURL: '#/audiocall'
  },]
  games.forEach((game) => {
  gamesContainer.insertAdjacentHTML('beforeend', `<div class="card game">
  <div class="game__title">${game.gameTitle}</div>
  <div class="game__desc">${game.gameDesc}</div>
  <a href="${game.gameURL}" class="btn btn-warning play-btn">Play</a>
  </div>`)
  });
}
