import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const topicSwiper = new Swiper(`.topic-video-swiper`, {
  pagination: {
    el: ".topic-video-swiper__pagintaion",
    clickable: true,
  },

  navigation: {
    nextEl: ".topic-video-swiper__next",
    prevEl: ".topic-video-swiper__prev",
  },
});
