export default function renderStatisticPage(createElement, gameResults) {
  const h2 = createElement('h2', 'audio-call__title');
  h2.textContent = 'Your statistics:';
  const score = createElement('p', 'audio-call__score');
  score.textContent = `Score: ${this.score}`;
  const page = createElement('div', 'audio-call__statistics');
  page.append(h2, score);
  if (gameResults.rightAnswers.length) {
    const rightAnswersTitle = createElement('h3', 'audio-call__list-title');
    rightAnswersTitle.textContent = 'Right answers:';
    const rightAnswers = createElement('ul', 'audio-call__statistics-list');
    rightAnswers.append(...gameResults.rightAnswers.map((el) => {
      const statsItem = createElement('li', 'audio-call__statistics-item');
      statsItem.textContent = el.word;
      return statsItem;
    }));
    const firstBlock = createElement('div', 'audio-call__statitics-block');
    firstBlock.append(rightAnswersTitle, rightAnswers);
    page.append(firstBlock);
  }
  if (gameResults.wrongAnswers.length) {
    const wrongAnswersTitle = createElement('h3', 'audio-call__list-title');
    wrongAnswersTitle.textContent = 'Wrong answers:';
    const wrongAnswers = createElement('ul', 'audio-call__statistics-list');
    wrongAnswers.append(...gameResults.wrongAnswers.map((el) => {
      const statsItem = createElement('li', 'audio-call__statistics-item');
      statsItem.textContent = el.word;
      return statsItem;
    }));
    const secondBlock = createElement('div', 'audio-call__statitics-block');
    secondBlock.append(wrongAnswersTitle, wrongAnswers);
    page.append(secondBlock);
  }
  const gameButton = document.querySelector('.audio-call__game-button');
  gameButton.textContent = 'Next round';
  gameButton.dataset.value = 'Next round';
  page.append(gameButton);
  const container = document.querySelector('.container.audio-call');
  container.innerHTML = '';
  container.append(page);
}
