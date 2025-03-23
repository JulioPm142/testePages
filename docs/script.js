var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true, // Permite selecionar o slide ao clicar
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll(".tranding-slide-img a").forEach((link) => {
  link.addEventListener("click", function (event) {
    let slide = this.closest(".swiper-slide");
    if (!slide.classList.contains("swiper-slide-active")) {
      event.preventDefault(); // Evita clicar em slides que não estão ativos
    }
  });
});
