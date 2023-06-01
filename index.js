const slides = document.querySelectorAll('.video-slide');
let currentSlide = 0;

function playSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      const video = slide.querySelector('.video');
      video.play();
    } else {
      slide.classList.remove('active');
      const video = slide.querySelector('.video');
      video.pause();
      video.currentTime = 0; // Reset video to the beginning when not active
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  playSlide(currentSlide);
}

slides.forEach((slide) => {
  const video = slide.querySelector('.video');
  video.preload = "auto"; // Set the preload attribute to "auto" for each video element
});

setInterval(nextSlide, 5000);
