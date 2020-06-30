export default function renderHeader() {
  const root = document.querySelector('.root');
  root.insertAdjacentHTML('beforeend', `
    <div class="header">
      <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
          </button>
          <div class="header__menu dropdown-menu">
            <a class="menu__item dropdown-item active" href="#/hub">Dashboard</a>
            <a class="menu__item dropdown-item" href="#/learn">Learn words</a>
            <a class="menu__item dropdown-item" href="#/games">Play games</a>
            <a class="menu__item dropdown-item" href="#/vocabluary">Vocabluary</a>
            <a class="menu__item dropdown-item" href="#/statistics">Statistics</a>
            <a class="menu__item dropdown-item" href="#/settings">Settings</a>
            <a class="menu__item dropdown-item" href="#/about-team">About our team</a>
          </div>
      </div>
      <div class="header__buttons">
        <a href="#/" class="btn btn-primary logout-btn" role="button">Log out</a>
      </div>
  </div>
  `);
}
