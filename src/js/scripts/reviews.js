var swiper = new Swiper(".reviews-js", {
  lazy: true,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});