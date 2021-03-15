var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 100,
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
  
  