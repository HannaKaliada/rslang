import limitsValue from './limitsValue.js';

export default function settings() {
  const page = document.createElement('div');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
  <div class="limits">
  <div class="limits__new-words">
  <label for="word-limit">New words limit per day: </label>
  <input type="range" name="words-limit" id="words-limit" min="1" max="3600" step="100" value="500">
  <output class="words-limit-output" for="words-limit">500</output>
  </div>
  <div class="limits__cards">
  <label for="cards-limit">New cards per day: </label>
  <input type="range" name="cards-limit" id="cards-limit" min="1" max="3600" step="100" value="500">
  <output class="cards-limit-output" for="cards-limit">500</output>
  </div>
  </div>
  </div>`);
  return page;
}


