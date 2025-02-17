const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Sample media items (to be replaced with actual images/videos)
const mediaItems = [
    { type: 'image', src: 'imagens/img1.jpg' },
    { type: 'video', src: 'videos/video1.mp4' },
    { type: 'image', src: 'imagens/img2.jpg' },
    { type: 'video', src: 'videos/video2.mp4' }
];

// Initialize carousel with media items
function initializeCarousel() {
    mediaItems.forEach(item => {
        const mediaElement = document.createElement(item.type);
        mediaElement.src = item.src;
        mediaElement.controls = item.type === 'video';
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.appendChild(mediaElement);
        carousel.appendChild(carouselItem);
    });
}

// Move to specific slide
function moveToSlide(index) {
    if (index < 0) index = mediaItems.length - 1;
    if (index >= mediaItems.length) index = 0;
    
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
}

// Event listeners for navigation
prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));

// Initialize the carousel on page load
window.addEventListener('load', initializeCarousel);

// Auto-play functionality (optional)
let autoPlayInterval;
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play when mouse leaves carousel
carousel.parentElement.addEventListener('mouseleave', startAutoPlay);
// Stop auto-play when mouse enters carousel
carousel.parentElement.addEventListener('mouseenter', stopAutoPlay);

// Start auto-play initially
startAutoPlay();
