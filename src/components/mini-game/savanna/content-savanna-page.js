export default function renderSavannaContent() {
    const page = document.querySelector('.root');
    const links = `<div class="links"> <h1>Savanna game page:</h1>
    <h1 ><a href="#/">Main</a></h1>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#">1</a>
      <a class="dropdown-item" href="#">2</a>
    </div>
    
     </div>`;
    let content = `<button type="button" class="btn btn-primary">Primary</button>`;



    content = links + content;
    page.insertAdjacentHTML('beforeend', content);

}