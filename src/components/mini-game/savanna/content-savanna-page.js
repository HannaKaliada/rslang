export default function renderSavannaContent() {
  const page = document.querySelector(".root");
  const links = `<div class="savanna-game-wrapper"><div class="links"> <h1>Savanna game page:</h1>
    <h1 ><a href="#/">Main</a></h1>


     </div>`;
  let content = `

  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Level
 </button>
 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <li class="dropdown-item" href="#">1</li>
     <li class="dropdown-item" href="#">2</li>
     <li class="dropdown-item" href="#">3</li>
     <li class="dropdown-item" href="#">4</li>
     <li class="dropdown-item" href="#">5</li>
     <li class="dropdown-item block" href="#">6</li>
    </div>
  </div>
  <button type="button" class="btn mx-auto btn-primary">Start game</button>
`;

  content = links + content+`</div>`;
  page.insertAdjacentHTML("beforeend", content);


}
