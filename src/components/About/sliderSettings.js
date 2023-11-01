
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css"; // Import Swiper styles

SwiperCore.use([Navigation]);

export const sliderSettings = {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};