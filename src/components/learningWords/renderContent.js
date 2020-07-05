import properties from './properties';

export default function renderContent() {
  const page = document.querySelector('.root');
  const currentWord = localStorage.getItem('currentWord');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
    <div class="learning-settings">
    <div class="word-translation">
    <p>Word translation</p>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" checked> ON
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2"> OFF
  </label>
</div>
    </div>
    <div class="sentences-translation">
    <p>Example and Meaning translation</p>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" checked> ON
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2"> OFF
  </label>
</div>
    </div>
    </div>
      <div class="word">
        <div class="word__card card text-center">
          <form>
            <p class="sentence">
              ${properties.words[currentWord].textExample.replace(/\<.*\>/,
              `<input type="text" class="form-control word-input" maxlength="30">
              <span class="input-top-layer hidden"></span>`)}
            </p>
            <p class="sentence-translation"></p>
            <p class="meaning">
            ${properties.words[currentWord].textMeaning.replace(/\<.*\>/,
              `<span class="hidden-word">[...]</span>`)}</p>
            <p class="meaning-translation"></p>
            <button type="submit" class="btn btn-primary submit-btn">Check</button>
          </form>
          <button class="btn btn-primary next-btn hidden">Next</button>
        </div>
        <p class="word__translation"></p>
      </div>
    </div>`);
}
