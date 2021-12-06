window.addEventListener('load', main);

/** @type {HTMLOmageElement} */
let imageElement;

// State
const size = 40;
const speed = {
    x: 0.4,
    y: 0.2,
};

const position = {
top: 0, 
left: -size,
}

function main() {
    imageElement = document.querySelector('img');
    imageElement.style.width = size + '%';
    setInterval(moveBird, 10);
}

function moveBird() {
    // Flytta horisontellt
    position.left += speed.x;
    if (position.left > 100) {
        position.left = -size;
    }
    imageElement.style.left = position.left + '%';

    // Flyta vertikalt
    position.top += speed.y;
    if (position.top > 100) {
        position.top = -size;
    }
    imageElement.style.top = position.top + '%';
}