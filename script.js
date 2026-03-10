let gridWidthHeight = 16;
const containerElement = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetGrid);
createGrid();

function createGrid() {
    const totalSquares = gridWidthHeight ** 2;
    const squareWidthHeight = 100 / gridWidthHeight;
    for (let index = 0; index < totalSquares; index++) {
        const square = document.createElement("div");

        square.classList.add("square");
        square.classList.add("inactive");
        square.style.width = `${squareWidthHeight}%`;
        square.style.height = `${squareWidthHeight}%`;
 
        containerElement.appendChild(square);
    }

    containerElement.addEventListener("mouseover", paintSquare);
}

function paintSquare(square) {
    if (!square.target.classList.contains('square')) return;
    square.target.classList.remove("inactive");
    square.target.classList.add("active");
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