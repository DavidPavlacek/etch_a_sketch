const gridCells = document.getElementById("grid-cells");

function makeGrid(rows, cols) {
    gridCells.style.setProperty('--grid-rows', rows);
    gridCells.style.setProperty('--grid-cols', cols);
    for ( c = 0; c < ( rows * cols); c++) {
        let cell = document.createElement("div");
        gridCells.appendChild(cell).className = "grid-item"
    }
}

makeGrid(16,16)