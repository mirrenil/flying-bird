window.addEventListener('load', main);

/** @type {HTMLOmageElement} */
let imageElement;

// State
const speed = .6;
const position = {
top: 0,
left: 0,
}

function main() {
    imageElement = document.querySelector('img');
    setInterval(moveBird, 10);
}

function moveBird() {
    position.left += speed;
    if (position.left > 100) {
        position.left = 20;
    }
    imageElement.style.left = position.left + '%';
}
