export default function renderStatisticPage() {
  const h2 = this.createElement('h2', 'audio-call__title');
  h2.textContent = 'Your statistics:';
  const score = this.createElement('p', 'audio-call__score');
  score.textContent = `Score: ${this.score}`;
  const page = this.createElement('div', 'audio-call__statistics');
  page.append(h2, score);
  if (this.gameResults.rightAnswers.length) {
    const rightAnswersTitle = this.createElement('h3', 'audio-call__list-title');
    rightAnswersTitle.textContent = 'Right answers:';
    const rightAnswers = this.createElement('ul', 'audio-call__statistics-list');
    rightAnswers.append(...this.gameResults.rightAnswers.map((el) => {
      const statsItem = this.createElement('li', 'audio-call__statistics-item');
      statsItem.textContent = el.word;
      return statsItem;
    }));
    const firstBlock = this.createElement('div', 'audio-call__statitics-block');
    firstBlock.append(rightAnswersTitle, rightAnswers);
    page.append(firstBlock);
  }
  if (this.gameResults.wrongAnswers.length) {
    const wrongAnswersTitle = this.createElement('h3', 'audio-call__list-title');
    wrongAnswersTitle.textContent = 'Wrong answers:';
    const wrongAnswers = this.createElement('ul', 'audio-call__statistics-list');
    wrongAnswers.append(...this.gameResults.wrongAnswers.map((el) => {
      const statsItem = this.createElement('li', 'audio-call__statistics-item');
      statsItem.textContent = el.word;
      return statsItem;
    }));
    const secondBlock = this.createElement('div', 'audio-call__statitics-block');
    secondBlock.append(wrongAnswersTitle, wrongAnswers);
    page.append(secondBlock);
  }
  this.gameButton.textContent = 'Next round';
  this.gameButton.dataset.value = 'Next round';
  page.append(this.gameButton);
  const container = document.querySelector('.container.audio-call');
  container.innerHTML = '';
  container.append(page);
}
