var swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 2,
        spaceBetween: 3
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
    });