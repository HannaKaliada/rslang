export default function renderContentOurGamePage() {
  if (!localStorage.getItem('our-game-level')) {
    localStorage.setItem('our-game-level', 1);
  }
  if (!localStorage.getItem('our-game-difficulty')) {
    localStorage.setItem('our-game-difficulty', 1);
  }
  const page = document.querySelector('.root');
  const links = `<div class="our-game-wrapper">`;
  let dropDown = '';
  for (let i = 1; i <= 30; i += 1) dropDown += ` <a class="dropdown-item" id="dropdown-level" >${i}</a>`;
  let content = `
    <div class="level-difficulty"><span>level: ${localStorage.getItem(
    'our-game-level',
  )}  difficulty:${localStorage.getItem('our-game-difficulty')}</span></div>
    <div class="d-flex">
    <div class="dropdown mr-1">
      <button type="button" class="btn btn_gray btn_dropdown dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        Level
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
       ${dropDown}
      </div>
    </div>

    <div class="dropdown mr-1">
      <button type="button" class="btn btn_gray btn_small btn_dropdown dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        Difficulty
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <a class="dropdown-item" id="dropdown-difficulty" >1</a>
        <a class="dropdown-item" id="dropdown-difficulty" >2</a>
        <a class="dropdown-item" id="dropdown-difficulty" >3</a>
        <a class="dropdown-item" id="dropdown-difficulty" >4</a>
        <a class="dropdown-item" id="dropdown-difficulty" >5</a>
        <a class="dropdown-item" id="dropdown-difficulty" >6</a>
      </div>
    </div>

    </div>

    <div class="card game-rules">
    <img src="${require('../../../assets/images/teamgame-2.png')}">
    <p class="info">В этой игре с левой и правой стороны написано описание слова, вам нужно правильно сопоставить их посредством кнопок и клавиш(процессом игры можно управлять стрелками <span class="info-arrow">← →</span>  на клавиатуре и кнопками непосредственно на самом экране). Игра закончится по истечению таймера или по прохождению 10 слов.</p>
    <button type="button" id="srart-btn" class="btn btn_yellow mx-auto">Start game</button>
    </div>

  `;

  content = `${links + content}</div>`;
  page.insertAdjacentHTML('beforeend', content);
}
