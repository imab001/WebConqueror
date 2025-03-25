const observer = new MutationObserver(() => {
  const video = document.querySelector('video');
  const adContainer = document.querySelector('.ad-showing');

  if (adContainer && video) {
    // Mute during ads
    video.muted = true;
  } else if (video) {
    // Unmute regular content
    video.muted = false;
  }
});

// Start observing the video container
const observeTarget = () => {
  const videoContainer = document.querySelector('#movie_player');
  if (videoContainer) {
    observer.observe(videoContainer, {
      attributes: true,
      attributeFilter: ['class'],
    });
  } else {
    requestAnimationFrame(observeTarget); // Retry until container exists
  }
};

observeTarget();
