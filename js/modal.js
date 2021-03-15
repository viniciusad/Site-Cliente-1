/* ============================== MODAL 1 ============================== */

// Get the modal
let modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
let btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

/* ============================== MODAL 2 ============================== */

// Get the modal
let modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/* ============================== MODAL 3 ============================== */

// Get the modal
let modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
let btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
let span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

/* ============================== MODAL 4 ============================== */

// Get the modal
let modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
let btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
let span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}