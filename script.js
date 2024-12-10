const divContainer = document.querySelector("#div-container");

let gridSize = 16; // default grid size

const makeGrid = () => {
    divContainer.innerHTML = ""; // Clear any existing grid
    const totalCells = gridSize * gridSize;
    const cellSize = 100 / gridSize;

    for (let i=0; i<totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;

        divContainer.appendChild(cell);

        cell.addEventListener("mouseover", () => {
            cell.style.background = "black";
        })
    }
}

makeGrid();

// changing the amount of squares per side through the button:
const popUp = document.querySelector("#pop-up");

popUp.addEventListener("click", () => {
    gridSize = prompt("Choose the number of squares per side. Enter a number from 1-100)");
    makeGrid(); // resets the canvas with new "pincel" size
})

