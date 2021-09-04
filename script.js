const gridCells = document.getElementById("grid-cells");
const slider = document.getElementById("slider");
const gridSize = document.getElementById("grid-size");
const clearBtn = document.getElementById("clear-btn");
const blackBtn = document.getElementById("black-btn");

let blackBtnIsActive = false;

makeGrid(16,16)
makeNewGrid();

const gridItemList = document.querySelectorAll(".grid-item");

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

function makeNewGrid() {
    slider.addEventListener("input", function() {
        let val = this.value;
        gridSize.textContent = "Size: " + val + " x " + val
    })
    slider.addEventListener("mouseup", function() { 
        let val = this.value;   
        removeAllCells();
        return makeGrid(val, val);
    })
    slider.addEventListener("touchend", function() { 
        let val = this.value;   
        removeAllCells();
        return makeGrid(val, val);
    })
}

function pickColor() {
    if (blackBtnIsActive == true) {
        this.classList.add("black-pen")
    }
}

function blackBtnClick() {
    if (blackBtnIsActive == false) {
        blackBtnIsActive = true;
        gridItemList.forEach(cell => cell.addEventListener("mouseover", pickColor));
    } else blackBtnIsActive = false
    console.log(blackBtnIsActive);
}

blackBtn.addEventListener("click", blackBtnClick)


