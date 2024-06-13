const portfolioImages = document.querySelectorAll('.portfolio-box img');
let currentIndex = 0;

function slideImages() {
    portfolioImages[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % portfolioImages.length;
    portfolioImages[currentIndex].style.opacity = 1;
}

setInterval(slideImages, 5000);