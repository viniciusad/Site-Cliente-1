/* ============================== SCROLL TOP ============================== */
// Criando Botão
var mybutton = document.getElementById("back-top");
            
// Definindo scroll para aparecer o botão
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

// Ao clicar vai para o topo da página
function topFunction() {
  document.documentElement.scrollTop = 0;
}

/* ============================== FORMULÁRIO ============================== */
function formEnviado() {
    alert('Mensagem enviada com sucesso!');
    location.href = "index.html";
}


/* ============================== navbar-toggler ============================== */
// function openNav() {
//   document.getElementById("navbarNav").style.height = "300px";
//   document.getElementById("main").style.marginTop = "300px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("navbarNav").style.visibility= "hidden";
//   document.getElementById("navbarNav").style.height = "0";
//   document.getElementById("main").style.marginTop= "0";
//   document.body.style.backgroundColor = "rgba(0,0,0)";
// }
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
