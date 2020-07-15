export default function renderSavannaContent() {
  if (!localStorage.getItem('savanna-level')) {
    localStorage.setItem('savanna-level', 1);
  }
  if (!localStorage.getItem('savanna-difficulty')) {
    localStorage.setItem('savanna-difficulty', 1);
  }
  const page = document.querySelector('.root');
  const links = `<div class="savanna-game-wrapper"><div class="links"> <h1>Savanna game page:</h1>
    <h1 ><a href="#/">Main</a></h1>
     </div>`;

  let content = `
  <div class="level-difficulty"><span>level: ${localStorage.getItem(
    'savanna-level',
  )}  difficulty:${localStorage.getItem('savanna-difficulty')}</span></div>
  <div class="d-flex">
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Level
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <a class="dropdown-item" id="dropdown-level" >1</a>
      <a class="dropdown-item" id="dropdown-level" >2</a>
      <a class="dropdown-item" id="dropdown-level" >3</a>
      <a class="dropdown-item" id="dropdown-level" >4</a>
      <a class="dropdown-item" id="dropdown-level" >5</a>
      <a class="dropdown-item" id="dropdown-level" >6</a>
    </div>
  </div>

  <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Difficulty
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
      <a class="dropdown-item" id="dropdown-difficulty" >1</a>
      <a class="dropdown-item" id="dropdown-difficulty" >2</a>
      <a class="dropdown-item" id="dropdown-difficulty" >3</a>
      <a class="dropdown-item" id="dropdown-difficulty" >4</a>
      <a class="dropdown-item" id="dropdown-difficulty" >5</a>
    </div>
  </div>

  </div>

  <button type="button" class="btn mx-auto btn-primary">Start game</button>
`;

  content = `${links + content}</div>`;
  page.insertAdjacentHTML('beforeend', content);
}
