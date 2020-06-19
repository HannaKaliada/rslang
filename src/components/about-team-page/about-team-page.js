import './about-team-page.scss';

export default function renderAboutTeamPage() {
    const page = document.querySelector('.root');
    page.insertAdjacentHTML('beforeend',
        `<div class="links"> <h1>About team page:</h1>
        <h1 ><a href="#/">Main</a></h1> </div>
        <div class="card mentor" style="width: 18rem;">
  <img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary more-inf">More inf</a>
  </div>
</div>
        <div class="container">
       
        <div class="card " style="width: 18rem;">
        <img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary more-inf">More inf</a>
        </div>
      </div>

      <div class="card " style="width: 18rem;">
      <img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary more-inf">More inf</a>
      </div>
    </div>

    <div class="card " style="width: 18rem;">
    <img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary more-inf">More inf</a>
    </div>
  </div>

  <div class="card " style="width: 18rem;">
  <img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary more-inf">More inf</a>
  </div>
</div>

<div class="card " style="width: 18rem;">
<img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary more-inf">More inf</a>
</div>
</div>

<div class="card " style="width: 18rem;">
<img src="../src/components/about-team-page/img/lil_lesha.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary more-inf">More inf</a>
</div>
</div>
 



      </div>`);

}


document.addEventListener('click', (event) => {
    if (event.target.className == 'btn btn-primary more-inf') {
        event.preventDefault();
        console.log(event.path[1].children[1].innerText)
    }

})