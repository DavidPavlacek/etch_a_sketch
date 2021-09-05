const gridCells = document.getElementById("grid-cells");
const slider = document.getElementById("slider");
const gridSize = document.getElementById("grid-size");
const allButtons = document.getElementById("color-selection-buttons");
let gridItemList = document.getElementsByClassName('grid-item');

let blackBtnIsActive = false;
let rainbowBtnIsActive = false;
let scaleBtnIsActive = false;
let pickBtnIsActive = false;

function makeGrid(rows, cols) {   
    gridCells.style.setProperty('--grid-rows', rows);
    gridCells.style.setProperty('--grid-cols', cols);
    for ( c = 0; c < ( rows * cols); c++) {
        let cell = document.createElement("div");
        gridCells.appendChild(cell).className = "grid-item";
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
        blackBtnIsActive = false;
        return makeGrid(val, val);
    })
    slider.addEventListener("touchend", function() { 
        let val = this.value;   
        removeAllCells();
        return makeGrid(val, val);
    })  
}

allButtons.addEventListener("click", function(e) {

    if (e.target && e.target.id == "black-btn") {
        blackBtnClick();
    }
    if (e.target && e.target.id == "rainbow-btn") {
        console.log(e.target.id + " was clicked");
    }
    if (e.target && e.target.id == "scale-btn") {
        console.log(e.target.id + " was clicked");
    }
    if (e.target && e.target.id == "pick-btn") {
        console.log(e.target.id + " was clicked");
    }
    if (e.target && e.target.id == "clear-btn") {
        clearBtnClick();
    }
})

function removeAllCells() {
    while (gridCells.firstChild) {
        gridCells.removeChild(gridCells.lastChild)
    }
}

function disableAllButtons() {
    blackBtnIsActive = false;
    rainbowBtnIsActive = false;
    scaleBtnIsActive = false;
    pickBtnIsActive = false;
}

function clearBtnClick() {
    disableAllButtons();
    removeAllCells();
    makeGrid(slider.value, slider.value)
}

function pickColor() {
    if (blackBtnIsActive == true) {
        this.classList.add("black-pen")
    }
}

function blackBtnClick() {
    if (blackBtnIsActive == false) {
        blackBtnIsActive = true;
        Array.from(gridItemList).forEach(cell => cell.addEventListener("mouseover", pickColor));
    } else blackBtnIsActive = false
}

makeGrid(16,16);
makeNewGrid();