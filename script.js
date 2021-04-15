var slideIndex = 1;
showSlides(slideIndex, "proveedorSlide");
showSlides(slideIndex, "clienteSlide");

// Next/previous controls
function plusSlides(n,className) {
  showSlides(slideIndex += n, className);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n, className);
}

function showSlides(n, className) {
  var i;
  var slides = document.getElementsByClassName(className);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}