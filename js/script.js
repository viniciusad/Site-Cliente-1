/* ============================== OVERLAY NAV MENU ============================== */
let overlay = document.getElementById('overlay');
let closeMenu = document.getElementById('close-menu');
let openMenu = document.getElementById('open-menu');

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
    openMenu.style.display = "none";

});

document.getElementById('close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
    openMenu.style.display = "block";
});

/* ============================== SCROLL TOP ============================== */
let goTop = document.getElementById("back-top");
            
// Definindo scroll para aparecer o botão
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
}

// Ao clicar vai para o topo da página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ============================== FORMULÁRIO ============================== */
function formEnviado() {
  window.alert('Mensagem enviada com sucesso!');
  location.href = "index.html";
}


/* ============================== CARROSSEL DE IMAGENS SWIPER ============================== */
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
    autoplay: {
      delay: 2500,
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


/* ============================== ANIMAÇÃO DE DIGITAÇÃO ============================== */
var typed = new Typed(".typing", {
  strings: ["Arte"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

/* ============================== navbar-toggler ============================== */
// function openAndCloseNav() {
//   var n = document.getElementById("open-menu");
//   var links = document.getElementById("links");

//   if (document.documentElement.scrollY > 30) {
//     n.style.display = "block";
//     links.style.display = "none";
//   } else {
//     n.style.display = "none";
//     links.style.display = "block";
//   }
// }

