let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    slideIndex++;
    console.log(slideIndex);
    if (slideIndex > slides.length ) {slideIndex = 1}
    else if(slideIndex <= 0){slideIndex = slides.length}    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slides[slideIndex-1].style.display = 'block';  
    // setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  function changeSlide(n) {
    showSlides(slideIndex += n);
  }