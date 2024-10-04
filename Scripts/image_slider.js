let currentSlideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");

    if (n >= slides.length) currentSlideIndex = 0; // Wrap around
    if (n < 0) currentSlideIndex = slides.length - 1; // Wrap around

    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlideIndex) ? "block" : "none";
        indicators[index].classList.toggle("active", index === currentSlideIndex);
    });
}

function changeSlide(n) {
    showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlides(currentSlideIndex);
}

// Initial call to display the first slide
showSlides(currentSlideIndex);