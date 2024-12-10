const divContainer = document.querySelector("#div-container");

const makeGrid = () => {
    for (i=0; i<16; i++) {
        for (j=0; j<16; j++) {
            let rowBox = document.createElement("div");
            rowBox.textContent = "!";
            rowBox.classList.add("cell");

            divContainer.appendChild(rowBox);
        }
    }
}

makeGrid();

