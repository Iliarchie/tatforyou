const swiper = new Swiper(".swiper", {
  spaceBetween: 16,
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

swiper.update();
