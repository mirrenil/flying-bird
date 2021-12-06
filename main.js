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
    setInterval(moveBird, 20);
    setInterval(updateSpeed, 1000);
}

function updateSpeed() {
    speed.x = -0.5 + Math.random();
    speed.y = -0.5 + Math.random();
}

function moveBird() {
    // Flytta horisontellt
    position.left += speed.x;
    if (position.left > 100) {
        position.left = -size;
    } else if (position.left < size) {
        position.left = 100;
    }
    
    imageElement.style.left = position.left + '%';

    // Flyta vertikalt
    position.top += speed.y;
    if (position.top > 100) {
        position.top = -size;
    } else if (position.top < size) {
        position.top = 100;
    }
    imageElement.style.top = position.top + '%';
}