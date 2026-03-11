let gridWidthHeight = 16;
const containerElement = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetGrid);
createGrid();
containerElement.addEventListener("click", paintSquare);

function createGrid() {
    const totalSquares = gridWidthHeight ** 2;
    const squareWidthHeight = 100 / gridWidthHeight;
    for (let index = 0; index < totalSquares; index++) {
        const square = document.createElement("div");
        const backgroundSquare = document.createElement("div");
        const colorSquare = document.createElement("div");

        square.classList.add("square");
        backgroundSquare.classList.add("inactive");
        colorSquare.classList.add("active");
        square.style.width = `${squareWidthHeight}%`;
        square.style.height = `${squareWidthHeight}%`;
        colorSquare.style.backgroundColor = getRandomColor();

        square.appendChild(backgroundSquare);
        square.appendChild(colorSquare);
        containerElement.appendChild(square);
    }

}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}


function paintSquare(square) {
    if (!square.target.classList.contains('active')) return;
    if (window.getComputedStyle(square.target).opacity > 0) {
        square.target.style.opacity = window.getComputedStyle(square.target).opacity - 0.1;
    }
}

function resetGrid() {
    let gridSize;
    do {
        gridSize = parseInt(prompt("Set a number from 1 to 100"));
    } while (isNaN(gridSize) || (gridSize < 1 || gridSize > 100));

    gridWidthHeight = gridSize;
    deleteGrid();
    createGrid();
}

function deleteGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.remove();
    });
}