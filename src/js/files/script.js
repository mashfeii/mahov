// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

$(".ready__slider").slick({
  slidesToShow: 3,
  speed: 500,
  infinite: true,
  dots: false,
  arrows: false,
  centerMode: false,
});

$(".reviews__slider").slick({
  slidesToShow: 3,
  speed: 500,
  infinite: true,
  dots: false,
  arrows: false,
  centerMode: false,
});
