import properties from './properties';

export default async function renderContent() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
    `<div class="container">
      <div class="word">
        <div class="word__card card text-center">
          <form>
            <p class="sentence">
              ${properties.words[localStorage.currentWord].textExample.replace(/\<.*\>/, '<input type="text" class="form-control word-input" maxlength="30" class="form-control"><span class="input-top-layer hidden"></span>')}
            </p>
            <p class="sentence-translation">
              ${properties.words[localStorage.currentWord].textExampleTranslate}
            </p>
            <button type="submit" class="btn btn-primary">Check</button>
          </form>
        </div>
        <p class="word__translation">
          ${properties.words[localStorage.currentWord].wordTranslate}
        </p>
      </div>
    </div>`);
}
