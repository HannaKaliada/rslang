export default class Score {
  constructor() {
    this.score = 0;
  }

  renderScore() {
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', `<h1 class="score text-center">1243</h1>`);
  }

  addScore(value) {
    this.score += value;
  }
}
