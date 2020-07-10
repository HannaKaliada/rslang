export default function renderContent() {
  const page = document.querySelector('.root');
  const cardsLimit = localStorage.getItem('cardsLimit');
  const wordsLimit = localStorage.getItem('wordsLimit');
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
            value="${wordsLimit || 50}"
          />
          <output class="words-limit-output" for="words-limit">${wordsLimit || 50}</output>
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
            value="${cardsLimit || 80}"
          />
          <output class="cards-limit-output" for="cards-limit">${cardsLimit || 80}</output>
        </div>
      </div>
      <div class="main-settings">
        <p><b>Main settings:</b></p>
        <p>What information do you want to see on the cards?</p>
        <label>
          <input
            type="checkbox"
            name="wordTranslation"
            class="settings-to-save"
          />
          Word translation</label>
        <label>
          <input type="checkbox" name="wordMeaning" class="settings-to-save" />
          Sentence explaining the meaning of the word</label>
        <label>
          <input type="checkbox" name="wordExample" class="settings-to-save" />
          Sentence with an example of using the studied word</label>
        <label>
          <input
            type="checkbox"
            name="wordTranscription"
            class="settings-to-save"
          />
          Word transcription</label>
        <label>
          <input type="checkbox" name="wordImage" class="settings-to-save" />
          Image-association to the studied word</label>
        <p class="warning hidden">
          At least one point from main settings must be chosen!
        </p>
      </div>
      <div class="additional-settings">
        <p><b>Additional settings:</b></p>
        <label
          data-toggle="tooltip"
          data-placement="top"
          title="Using the 'Again', 'Difficult', 'Good', 'Easy' buttons, you can specify the individual complexity of the studied word">
          <input
            type="checkbox"
            name="intervalRepeating"
            class="settings-to-save"
          />
          Show buttons 'Again', 'Difficult', 'Good', 'Easy'</label>
        <p class="success-notification hidden">
          Your settings have been successfully saved!
        </p>
      </div>
      <input class="btn btn-primary save-btn" type="button" value="Save" />
    </div>`);
}
