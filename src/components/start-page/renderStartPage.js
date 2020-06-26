import './startPage.scss';

export default function renderStartPage() {
  const page = document.querySelector('.root');
  page.insertAdjacentHTML('beforeend',
    `<div class="main-page__wrapper">
      <div class="main-page__promo">
        <a href="#/promo" class="promo-link">RS Lang</a>
      </div>
      <div class="main-page__description">
          <h1>The best way to learn a language</h1>
          <div class="description-text">
              <p>Learn words using interval repetition techniques. Practice and test your knowledge by playing mini-games.</p>
              <p>Beat your records and improve knowledge every day</p>
          </div>
      </div>
      <div class="main-page__start-btn">
          <a class="btn btn-primary" href="#/auth" role="button">Start</a>
      </div>
    </div>`);
}
