const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active')

  burgerBtn.classList.contains('active') ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'visible';
})

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })