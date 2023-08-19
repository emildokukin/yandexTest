import "./css/style.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

Swiper.use([Navigation]);

let swiper;
let init = false;

function swiperMode() {
  const mobile = window.matchMedia("(min-width: 0px) and (max-width: 692px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        modules: [Navigation],
        spaceBetween: 80,

        navigation: {
          nextEl: ".navigation__prev",
          prevEl: ".navigation__next",
        },
      });
    }
  } else if (swiper) {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});
