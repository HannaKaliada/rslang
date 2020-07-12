import properties from './properties';
import createVolumeBlock from './pronunciation/createVolumeBlock';
import createProgressBar from './progressBar';

export default function renderContent() {
  const page = document.querySelector('.root');
  const currentWord = localStorage.getItem('currentWord');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
      <div class="learning-settings">
        <div class="word-translation">
          <p>Word translation</p>
          <div
            class="btn-group mr-2 word-trans-btns"
            role="group"
            aria-label="First group"
          >
            <button
              type="button"
              class="btn btn-primary word-trans-on"
              data-word-translation-hint="true"
            >
              ON
            </button>
            <button
              type="button"
              class="btn btn-primary word-trans-off"
              data-word-translation-hint="false"
            >
              OFF
            </button>
          </div>
        </div>
        <div class="sentences-translation">
          <p>Example and Meaning translation</p>
          <div
            class="btn-group mr-2 sent-trans-btns"
            role="group"
            aria-label="Second group"
          >
            <button
              type="button"
              class="btn btn-primary sent-trans-on"
              data-sentences-translation="true"
            >
              ON
            </button>
            <button
              type="button"
              class="btn btn-primary sent-trans-off"
              data-sentences-translation="false"
            >
              OFF
            </button>
          </div>
        </div>
      </div>
      <div class="word">
        <span class="to-check-width"></span>
        <div class="word__card card text-center">
          <img class="image" />
          <form>
            <p class="translation-input"></p>
            <p class="translation"></p>
            <p class="sentence"></p>
            <p class="sentence-translation"></p>
            <p class="meaning"></p>
            <p class="meaning-translation"></p>
            <p class="transcription"></p>
            <button type="submit" class="btn btn-primary submit-btn">Check</button>
            ${createVolumeBlock()}
          </form>
          <button class="btn btn-primary next-btn hidden">Next</button>
          <button class="btn btn-info show-answer-btn">Show answer</button>
        </div>
        <p class="word__translation">
          ${properties.words[currentWord].wordTranslate}
        </p>
        ${createProgressBar()}
        <p class="word__translation"></p>
      </div>
    </div>`);
}
