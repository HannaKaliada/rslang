import WordsSet from './WordsSet';

export default class Card {

  renderCard() {
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', `<div class="card">
    <h5 class="card-header text-center bg-success">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </h5>
  <div class="card-body text-center">
    <div class="words">
      <h5 class="word_english mb-4">test</h5>
      <h5 class="word_russian">test</h5>
    </div>
    <div class="buttons mt-4">
    <button type="button" class="btn btn-danger">Неверно</button>
    <button type="button" class="btn btn-success">Верно</button>
  </div>
  </div>
  </div>`);
  }

  initWords() {
    const wordSet = new WordsSet();
    const englishContent = document.querySelector('.word_english');
    const russianContent = document.querySelector('.word_russian');
    wordSet.getGamesPairWord()
    .then(result => {
      console.log(result);
      englishContent.firstChild.nodeValue = result.eng;
      russianContent.firstChild.nodeValue = result.rus;
    });
  }
}
