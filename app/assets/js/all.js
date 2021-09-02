$(function() {
  console.log('Hello Bootstrap5');
});



var swiper = new Swiper('.mySwiper', {

  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000 

  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

var swiper = new Swiper('.mySwiper_2', {

  slidesPerView: 'auto',
  spaceBetween: 0,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000 

  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

var swiper = new Swiper('.mySwiper_3', {

  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000 

  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});