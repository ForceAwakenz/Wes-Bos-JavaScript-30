'use strict'

window.addEventListener('keydown', playSound);

function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div.button[data-key="${e.key}"]`);
    if (!audio) return;
    key.classList.add('played');
    key.addEventListener('transitionend', key.classList.remove('played'));
    audio.currentTime = 0;
    audio.play();

}

