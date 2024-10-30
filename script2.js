function goHome() {
    window.location.href = "index.html"; // Басты бетке бағыттайтын сілтеме
}

const video = document.getElementById('myVideo');

video.addEventListener('ended', function() {
    video.currentTime = 0; // Видеоны қайта бастау
    video.play(); // Видеоны автоматты түрде ойнату
});
