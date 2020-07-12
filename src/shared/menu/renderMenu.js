import createElement from '../createElement';


export default function renderMenu() {
  const menuWrapper = createElement('div', 'menu');
  menuWrapper.insertAdjacentHTML('beforeend', `
    <div class="menu__burger">
      <div class="burger-icon">
        <div class="burger-dash"></div>
        <div class="burger-dash"></div>
        <div class="burger-dash"></div>
      </div>
    </div>
    <div class="menu__items">
      <a class="menu__item" href="#/hub">
        <div class="menu-item__icon" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <img src=${require("../../assets/icons/dashboard.svg")}>
        </div>
        <div class="menu-item__label">Dashboard</div>
      </a>
      <a class="menu__item" href="#/learning">
        <div class="menu-item__icon" data-toggle="tooltip" data-placement="right" title="Start learning">
          <img src=${require("../../assets/icons/learn.svg")}>
        </div>
        <div class="menu-item__label">Learn</div>
      </a>
      <a class="menu__item" href="#/games">
        <div class="menu-item__icon" data-toggle="tooltip" data-placement="right" title="Play games">
          <img src=${require("../../assets/icons/games.svg")}>
        </div>
        <div class="menu-item__label">Play games</div>
      </a>
      <a class="menu__item" href="#/vocabulary">
        <div class="menu-item__icon" data-toggle="tooltip" data-placement="right" title="Vocabulary">
          <img src=${require("../../assets/icons/book.svg")}>
        </div>
        <div class="menu-item__label">Vocabulary</div>
      </a>
      </a>
      <a class="menu__item" href="#/settings">
        <div class="menu-item__icon" data-toggle="tooltip" data-placement="right" title="Settings">
         <img src=${require("../../assets/icons/settings.svg")}>
        </div>
        <div class="menu-item__label">Settings</div>
      </a>
      <a class="menu__item" href="#/about-team">
        <div class="menu-item__icon" data-toggle="tooltip" data-placement="right" title="About our team">
          <img src=${require("../../assets/icons/people.svg")}>
        </div>
        <div class="menu-item__label">About our team</div>
      </a>
    </div>`);
  return menuWrapper;
}
