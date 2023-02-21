// Табы

let workPath = document.querySelectorAll('.work__path');
let workTarget = document.querySelectorAll('.work__target');
let workDesc = document.querySelectorAll('.work__desc');
let pic = document.querySelectorAll('.picture')

workPath.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    workPath.forEach(function(link) {
      link.classList.remove('work__path--active')});

    e.currentTarget.classList.add('work__path--active');

    workTarget.forEach(function(element) {element.classList.remove('work__target--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__target--active');

    workDesc.forEach(function(element) {element.classList.remove('work__desc--active') });
    document.querySelector(`[data-desc="${path}"]`).classList.add('work__desc--active');

    pic.forEach(function(element) {element.classList.remove('picture--active') });
    document.querySelector(`[data-pic="${path}"]`).classList.add('picture--active');

  })
})

// Бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let links = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
})


links.forEach(function(el) {
  el.addEventListener('click', function() {
    menu.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');
  })
})

// Слайдер


const swiper = new Swiper('.swiper', {

  speed: 300,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },

});

// Аккордион

const accordion = new Accordion('.accordion-container', {
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  activeClass: 'is-active',
  collapse: true
});

// Поиск

let search = document.querySelector('.header__btn');
let form = document.querySelector('.header__form');
let close = document.querySelector('.header__btn-close')

search.addEventListener('click', function() {
  form.classList.add('header__form--active');
});

close.addEventListener('click', function() {
  form.classList.remove('header__form--active');
  form.querySelector('input').value="";
})

document.addEventListener('click', function(e) {
  let target = e.target;
  if (!target.closest('.header__form-container')) {
    form.classList.remove('header__form--active');
    form.querySelector('input').value="";
  }
})




