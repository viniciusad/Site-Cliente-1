var swiper = new Swiper('.swiper-container-elenco', {
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 80,
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
  
  