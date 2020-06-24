export default function renderHeader() {
  const root = document.querySelector('.root');
  root.insertAdjacentHTML('beforeend', `
    <div class="header">
     <div class="header__menu dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="menu__item dropdown-item" href="#/learn">Learn words</a>
        <a class="menu__item dropdown-item" href="#/games">Play games</a>
        <a class="menu__item dropdown-item" href="#/vocabluary">Vocabluary</a>
        <a class="menu__item dropdown-item" href="#/statis-tics">Statistics</a>
        <a class="menu__item dropdown-item" href="#/settings">Settings</a>
        <a class="menu__item dropdown-item" href="#/about-team">About our team</a>
      </div>
      <div class="header__buttons">
        <a href="#/" class="btn btn-primary" role="button">Log out</a>
      </div>
  </div>
  `);
}
