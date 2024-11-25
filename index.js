
    document.addEventListener('DOMContentLoaded', function () {
    new Glide('#banner-carousel', {
        type: 'carousel',
        startAt: 0,         
        perView: 3,          
        gap: 10,             
        autoplay: 3000,      
        hoverpause: true     
    }).mount();
});


    document.addEventListener('DOMContentLoaded', function () {
        new Glide('#banner-carousel', {
            type: 'carousel',
            startAt: 0,
            perView: 3,  
            gap: 10,    
            autoplay: 3000, 
            hoverpause: true
        }).mount();
    });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
}


setInterval(function() {
  plusSlides(1);
}, 3000);
