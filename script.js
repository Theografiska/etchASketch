const divContainer = document.querySelector("#div-container");
let gridSize = 33; // default grid size
let cellOpacity = 0; // "pencil" starts out fully opaque

const cells = document.getElementsByClassName("cell");


// clear button:

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    makeGrid();
})

/*
// set color (work in progress)

const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");


blackButton.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.background = 'black';
        })
    })
});

*/

const makeGrid = () => {
    divContainer.innerHTML = ""; // Clear any existing grid
    cellOpacity = 0; // setting opacity back to 0;
    const totalCells = gridSize * gridSize;
    const cellSize = 100 / gridSize;

    for (let i=0; i<totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;

        divContainer.appendChild(cell);

        // random-colored cells; opacity grows with each cell
        cell.addEventListener("mouseover", () => {
            let colorValue1 = Math.floor(Math.random() * 256);
            let colorValue2  = Math.floor(Math.random() * 256);
            let colorValue3  = Math.floor(Math.random() * 256);
            cellOpacity += 0.01;
            cell.style.background = `RGB(${colorValue1} ${colorValue2} ${colorValue3}`;
            cell.style.opacity = `${cellOpacity}`;
        })
    }
}

makeGrid();

// changing the amount of squares per side through the button:
const popUp = document.querySelector("#pop-up");

popUp.addEventListener("click", () => {
    gridSize = prompt("Choose the number of squares per side. Enter a number from 1-100)", 33);
    makeGrid(); // resets the canvas with new "pincel" size
})

