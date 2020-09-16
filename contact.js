
/*function myFunction1() {
document.getElementById("ex").src = "Imagini/poza1.jpg";
 var x = document.getElementsByClassName("numbertext");
    x[0].innerHTML = "1 / 5";
}

function myFunction2() {
document.getElementById("ex").src = "Imagini/poza2.jpg";
 var x = document.getElementsByClassName("numbertext");
    x[0].innerHTML = "2 / 5";
}


function myFunction3() {
document.getElementById("ex").src = "Imagini/poza3jpg.jpg";
 var x = document.getElementsByClassName("numbertext");
    x[0].innerHTML = "3 / 5";
}



function myFunction4() {
document.getElementById("ex").src = "Imagini/poza4.jpg";
 var x = document.getElementsByClassName("numbertext");
    x[0].innerHTML = "4 / 5";
}


function myFunction5() {
document.getElementById("ex").src = "Imagini/poza5.jpg";
 var x = document.getElementsByClassName("numbertext");
    x[0].innerHTML = "5 / 5";
}


*/


function myFunction(n) {
  Slides(Index = n);
}

function Slides(n) {
  var i;
  var slides = document.getElementsByClassName("imagine");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {Index = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Index-1].style.display = "block"; 
  dots[Index-1].className += " active";
}





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imagine");
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