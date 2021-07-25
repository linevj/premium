//Quotes slideshow start
//Code from: https://www.w3schools.com/howto/howto_js_slideshow.asp, removed the text from the slideshow as well as the arrows. Automatic version.
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides-in");
  var dots = document.getElementsByClassName("dot-in");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
//    determing what slide and dot is active
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
    // Change image every 2 seconds
  setTimeout(showSlides, 4000); 
}
//Quotes slideshow end