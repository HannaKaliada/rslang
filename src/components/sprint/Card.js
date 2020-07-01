import WordsSet from './WordsSet';

export default class Card {

  constructor() {

  }

  renderCard() {
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', `<div class="card">
    <h5 class="card-header text-center bg-success">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <p class="info"></p>
    </h5>
  <div class="card-body text-center">
    <div class="words">
      <h5 class="word_english mb-4">test</h5>
      <h5 class="word_russian">test</h5>
    </div>
  </div>
  </div>`);
  this.initWords();
  }

  initWords() {
    const wordSet = new WordsSet();
    const englishContent = document.querySelector('.word_english');
    const russianContent = document.querySelector('.word_russian');
    wordSet.getGamesPairWord()
    .then(result => {
      this.currentWords = result;
      englishContent.firstChild.nodeValue = result.eng;
      russianContent.firstChild.nodeValue = result.rus;
    });
  }

  isCorrect() {
    return this.currentWords.correct;
  }

  succesClick() {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
      if(!dots[i].classList.contains('dot-succes')) {
        dots[i].classList.add('dot-succes');
        return;
      }
    }
    this.unsuccesClick();
  }

  unsuccesClick() {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('dot-succes');
  }
  }

}
