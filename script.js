jQuery(document).ready(function ($) {
    let mainSlider = new Swiper('.main-slider', {
        slidesPerView: 'auto',
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: '.custom-button-next',
            prevEl: '.custom-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 18
            },
            767: {
                spaceBetween: 36
            },
        }
    });
});
