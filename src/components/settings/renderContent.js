export default function renderContent() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
      <h1>Settings:</h1>
      <div class="limits">
        <div class="limit">
          <label for="word-limit">New words per day: </label>
          <input
            class="change-limit words-limit"
            type="range"
            name="words-limit"
            id="words-limit"
            min="1"
            max="300"
            step="1"
            value="${localStorage.getItem('wordsLimit') || 50}"/>
          <output class="words-limit-output" for="words-limit">${localStorage.getItem('wordsLimit') || 50}</output>
        </div>
        <div class="limit">
          <label for="cards-limit">New cards per day: </label>
          <input
            class="change-limit cards-limit"
            type="range"
            name="cards-limit"
            id="cards-limit"
            min="1"
            max="500"
            step="1"
            value="${localStorage.getItem('cardsLimit') || 80}"/>
          <output class="cards-limit-output" for="cards-limit">${localStorage.getItem('cardsLimit') || 80}</output>
        </div>
      </div>
    </div>`);
}
