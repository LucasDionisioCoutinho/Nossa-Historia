const divCarousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// Lista de vídeos com os caminhos corretos para a pasta imagens-videos
const videos = [
    './imagens-videos/entrada-sogra.mp4',
    './imagens-videos/video-entrada-casamento-noivo.mp4'
];

let currentVideoIndex = 0;

function changeVideo(index) {
    videoSource.src = videos[index];
    videoPlayer.load();
    videoPlayer.play();
}

prevBtn.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    changeVideo(currentVideoIndex);
});

nextBtn.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    changeVideo(currentVideoIndex);
});
