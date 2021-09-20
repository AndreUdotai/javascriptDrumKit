

let removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

let soundFromKeys = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

let soundFromTap = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    const key = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', soundFromKeys);

document.querySelector('.firstRow').addEventListener('click', soundFromTap);
document.querySelector('.secondRow').addEventListener('click', soundFromTap);