import data from '../../data/teamInfo.json';

export default function renderAboutTeamPage() {
    const page = document.querySelector('.root');
    const links = `<div class="links"> <h1>About team page:</h1>
    <h1 ><a href="#/">Main</a></h1> </div>`;
    const start = `<div class="swiper-container">
    <div class="swiper-wrapper">`;
    const end = ` </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
  </div>`;
    let content = '';
    data.forEach(el => {
        content += `<div class="swiper-slide"><div class="card" style="width: 18rem;">
        <img src="${el.img}" class="card-img-top" alt="${el.name}">
        <div class="card-body">
        <h1 class="card-name">${el.name}</h1>
          <p class="card-text">${el.description}</p>
        </div>
        </div>
        </div>`

    });
    console.log(content);
    content = links + start + content + end;
    page.insertAdjacentHTML('beforeend', content);

}