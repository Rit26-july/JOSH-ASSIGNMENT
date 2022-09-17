$(document).ready(function () {
  $(".your-class").slick({
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

/** Cart Modal Details */
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the back to menu button id
var backtomenuBtn = document.getElementById("backToMenu");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

backtomenuBtn.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/** Dish request modal details */

var dishModal = document.getElementById("myDishModal");

var dishRequestBtn = document.getElementById("dishRequest");

var dishCancelBtn = document.getElementById("dishCancel");
var dishSubmitBtn = document.getElementById("dishSubmit");

dishRequestBtn.onclick = function () {
  dishModal.style.display = "block";
};

dishCancelBtn.onclick = function () {
  dishModal.style.display = "none";
};

dishSubmitBtn.onclick = function () {
  dishModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == dishModal) {
    dishModal.style.display = "none";
  }
};
