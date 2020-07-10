import createElement from '../../shared/createElement';

export default function renderContent() {
  const learnPage = createElement('div', 'learn-page__wrapper');
  const page = document.querySelector('.root');
  learnPage.insertAdjacentHTML('beforeend',
    `<div class="container learn-page">
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
          <p>Sentences translation</p>
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
            <button type="submit" class="btn btn-primary submit-btn">
              Check
            </button>
          </form>
          <button class="btn btn-primary next-btn hidden">Next</button>
        </div>
        <p class="word__translation"></p>
      </div>
    </div>`);
  page.append(learnPage);
}
