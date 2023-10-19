window.addEventListener('DOMContentLoaded', () => {
  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }

  function playSound(event) {
    const audioList = document.querySelectorAll('audio');
    const key = document.querySelector(`.key[data-key="${event.key}"]`);
    audioList.forEach((audio) => {
      if (event.key === audio.dataset.key) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
      }
    });
  }
  window.addEventListener('keydown', playSound);
});
