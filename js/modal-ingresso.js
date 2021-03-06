/* ============================== MODAL 1 (INFO) ============================== */

// Get the modal
let modalinfo = document.getElementById("myModalinfo");

// Get the button that opens the modal
let btninfo = document.getElementById("myBtninfo");

// Get the <span> element that closes the modal
let spaninfo = document.getElementsByClassName("closeinfo")[0];

// When the user clicks on the button, open the modal
btninfo.onclick = function() {
  modalinfo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spaninfo.onclick = function() {
  modalinfo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalinfo) {
    modalinfo.style.display = "none";
  }
}

/* ============================== MODAL 2 (INGRESSO) ============================== */

// Get the modal
let modalingresso = document.getElementById("myModalingresso");

// Get the button that opens the modal
let btningresso = document.getElementById("myBtningresso");

// Get the <span> element that closes the modal
let spaningresso = document.getElementsByClassName("closeingresso")[0];

// When the user clicks on the button, open the modal
btningresso.onclick = function() {
  modalingresso.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spaningresso.onclick = function() {
  modalingresso.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalingresso) {
    modalingresso.style.display = "none";
  }
}