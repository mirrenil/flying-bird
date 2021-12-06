window.addEventListener('load', main);

/** @type {HTMLOmageElement} */
let imageElement;

// State
const size = 40;
const speed = 0.4;
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
    position.left += speed;
    if (position.left > 100) {
        position.left = -size;
    }
    imageElement.style.left = position.left + '%';
}
