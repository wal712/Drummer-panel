window.addEventListener('keydown', function(evt) {
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);

    // If key doesn't match keys on screen just return
    if (!audio) {
        return;
    }

    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`)

    audio.currentTime = 0; //Resets recording each press
    audio.play();

    key.classList.add('playing');
});

function removeTransition(evt) {
    // waits for whole transition to occur
    if (evt.propertyName !== 'transform') {
        return;
    }

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));