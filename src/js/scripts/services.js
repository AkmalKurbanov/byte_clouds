var swiper = new Swiper(".services-js", {
  lazy: true,
  loop: true,
  spaceBetween: 15,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
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
    },
    1200: {
      slidesPerView: 4
    },
  }
});