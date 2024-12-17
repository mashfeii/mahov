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
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$(".reviews__slider").slick({
  slidesToShow: 3,
  speed: 500,
  infinite: true,
  dots: false,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

const catalog = document.querySelector('.catalog');
document.addEventListener('click', function(e) {
  const target = e.target;

  if (target.closest('[data-catalog]')) {
    catalog.classList.toggle('_active');
  } else if (!target.closest('[data-catalog-body]')) {
    catalog.classList.contains('_active') ? catalog.classList.remove('_active') : null;
  }
})
