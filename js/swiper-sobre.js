var swiper = new Swiper('.swiper-container-premios', {
    effect: 'coverflow',
    slidesPerView: 1,
    spaceBetween: 5,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
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
  
  