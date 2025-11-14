// Mobile smooth play/pause tap
const video = document.getElementById("mainVideo");

video.addEventListener("click", () => {
    if (video.paused) video.play();
    else video.pause();
});
