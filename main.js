import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game__board');

/**
 * Main game loop
 * 
 * @param {*} currentTime 
 * @returns 
 */
function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondesSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondesSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main)


function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}