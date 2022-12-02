var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var closebtn = document.getElementsByClassName("close")[0];

// if the user clicks the modal button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// If user clicks on <button> (x), close modal
closebtn.onclick = function() {
  modal.style.display = "none";
}

// If the user clicks anywhere outside of the modal, close modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}