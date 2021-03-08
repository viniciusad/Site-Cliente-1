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
/* ============================== SCROLL TOP ============================== */
