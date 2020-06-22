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
     <div class="info-settings">
      <p>What information do you want to see on the cards?</p>
      <label>
        <input
          type="checkbox"
          name="wordTranslation"
          class="settings-to-save"
          checked
        />
        Word translation</label>
      <label>
        <input type="checkbox" name="wordMeaning" class="settings-to-save" />
        Sentence explaining the meaning of the word</label>
      <label>
        <input
          type="checkbox"
          name="wordExample-"
          class="settings-to-save"
          checked
        />
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
      <p class="warning hidden">At least one point must be chosen!</p>
      <p class="success-notification hidden">
        Your settings have been successfully saved!
      </p>
      <input class="btn btn-primary save-btn" type="button" value="Save" />
    </div>
    </div>`);
}
