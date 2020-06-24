import Swiper from 'swiper';
export default function swiperInit() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            20: {
                centeredSlidesBounds: true,
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            690: {
                spaceBetween: 0,
                slidesPerView: 2,
                // slidesPerGroup: 2
            },
            1200: {
                slidesPerView: 3,
                // slidesPerGroup: 3
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })


}