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

$(".block-category__slides").slick({
  slidesToShow: 2.69,
  speed: 500,
  infinite: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
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

const catalog = document.querySelector('.header__catalog.catalog');
if (catalog) {
  document.addEventListener('click', function(e) {
    const target = e.target;

    if (target.closest('[data-catalog]')) {
      catalog.classList.toggle('_active');
    } else if (!target.closest('[data-catalog-body]')) {
      catalog.classList.contains('_active') ? catalog.classList.remove('_active') : null;
    }
  })
}

const buttons = document.querySelectorAll('[data-categories] button');
if (buttons.length) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('_active');
      })
      button.classList.add('_active');
    })
  })
}

const filter = document.querySelectorAll('.filter');
const filterList = document.querySelector('[data-filter-list]');
const filterButtons = filterList?.querySelector('button');

if (filter.length && filterList && filterButtons) {
  document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.closest('[data-filter]')) {
      target.closest('.filter').classList.toggle('_active');
    } else if (!target.closest('[data-filter-list]')) {
      filter.forEach(item => {
        item.classList.contains('_active') ? item.classList.remove('_active') : null;
      })
    } else if (target.closest('button')) {
      target.closest('button').classList.toggle('_active');
    }

  })
}

const sort = document.querySelectorAll('[data-sort-block]');
if (sort.length) {
  sort.forEach(item => {
    const openButton = item.querySelector('[data-sort]');
    const defaultValue = openButton.textContent;
    const buttons = Array.from(item.querySelectorAll('.filter__entity'));

    document.addEventListener('click', function(e) {
      const target = e.target;
      if (target.closest('[data-sort]')) {
        item.classList.toggle('_active');
      } else if (!target.closest('[data-sort-list]')) {
        item.classList.contains('_active') ? item.classList.remove('_active') : null;
      }
    })

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('_active');
        buttons.forEach(btn => {
          btn !== button && btn.classList.remove('_active');
        })
        openButton.textContent = button.textContent;

        if (buttons.every(btn => !btn.classList.contains('_active'))) {
          openButton.textContent = defaultValue;
          console.log(defaultValue)
        }
      })
    })
  })
}
