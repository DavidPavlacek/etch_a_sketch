const gridCells = document.getElementById("grid-cells");
let slider = document.getElementById("slider")

makeGrid(16,16)

function makeGrid(rows, cols) {
    gridCells.style.setProperty('--grid-rows', rows);
    gridCells.style.setProperty('--grid-cols', cols);
    for ( c = 0; c < ( rows * cols); c++) {
        let cell = document.createElement("div");
        gridCells.appendChild(cell).className = "grid-item";
    }
}

function removeAllCells() {

    while (gridCells.firstChild) {
        gridCells.removeChild(gridCells.lastChild)
    }
}

slider.addEventListener("mouseup", function() {
    let sliderVal = this.value;
    sliderVal = parseInt(sliderVal);
    console.log(sliderVal);
    removeAllCells();
    return makeGrid(sliderVal, sliderVal);
    
})
