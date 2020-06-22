export default function renderAboutTeamPage() {
    const page = document.querySelector('.root');
    page.insertAdjacentHTML('beforeend',
        `<div class="links"> <h1>About team page:</h1>
        <h1 ><a href="#/">Main</a></h1> </div>
        <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
          <div class="swiper-slide"><div class="card" style="width: 18rem;">
          <img src="../src/components/about-team-page/img/lesha.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
      </div>
         `);

}