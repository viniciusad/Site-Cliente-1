/* ============================== OVERLAY NAV MENU ============================== */
let overlay = document.getElementById('overlay');
let closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
});

/* ============================== SCROLL TOP ============================== */
let goTop = document.getElementById("back-top");
            
// Definindo scroll para aparecer o botão
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
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
    alert('Mensagem enviada com sucesso!');
    location.href = "index.html";
}


/* ============================== navbar-toggler ============================== */
function openAndCloseNav() {
  var n = document.getElementById("navbarNav");
  var corpo = document.getElementById("main");
  var menutop = document.getElementById("navbarSlider");

  if (n.style.display === "none") {
    menutop.style.backgroundImage = "url('../assets/cortina-vermelha.png')";
    menutop.style.backgroundPosition = "center";
    menutop.style.backgroundRepeat = "no-repeat";
    menutop.style.backgroundSize = "cover";
    n.style.display = "block";
    n.style.height = "300px";
    corpo.style.marginTop = "300px";
  } else {
    n.style.display = "none";
    corpo.style.marginTop = "60px";
  }
}
