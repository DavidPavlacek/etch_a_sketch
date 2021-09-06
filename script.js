const gridCells = document.getElementById("grid-cells");
const slider = document.getElementById("slider");
const gridSize = document.getElementById("grid-size");
const allButtons = document.getElementById("color-selection-buttons");
const colorPick = document.getElementById("color-pick");
let gridItemList = document.getElementsByClassName('grid-item');


let blackBtnIsActive = false;
let rainbowBtnIsActive = false;
let scaleBtnIsActive = false;
let pickBtnIsActive = false;

let blackColorValue = "#000000";
let pickColorValue = "#0826af";
colorPick.addEventListener("input", function() {
    return pickColorValue = this.value
})

function makeGrid(rows, cols) {   
    gridCells.style.setProperty('--grid-rows', rows);
    gridCells.style.setProperty('--grid-cols', cols);
    for ( i = 0; i < ( rows * cols); i++) {
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
    if (e.target.id == "black-btn") {
        blackBtnClick();
    }
    if (e.target.id == "rainbow-btn") {
        console.log(e.target.id + " was clicked");
    }
    if (e.target.id == "scale-btn") {
        console.log(e.target.id + " was clicked");
    }
    if (e.target.id == "pick-btn" ||
        e.target.id == "color-pick") {
        pickBtnClick()  
    }
    if (e.target.id == "clear-btn") {
        clearBtnClick();
    }
});

function listenMouseOverCells() {
    Array.from(gridItemList).forEach(cell => cell.addEventListener("mouseover", pickColor));
}

function blackBtnClick() {
    if (blackBtnIsActive == false) {
        disableAllButtons();
        blackBtnIsActive = true;
        listenMouseOverCells();
    } else disableAllButtons();
}

function pickBtnClick() {
    if (pickBtnIsActive == false) {    
        disableAllButtons();
        pickBtnIsActive = true;
        listenMouseOverCells();
    } else disableAllButtons();
}

function pickColor() {
    if (blackBtnIsActive == true) {
        this.style.backgroundColor = blackColorValue;
    }
    else if (pickBtnIsActive == true) {
            this.style.backgroundColor = pickColorValue;
    }
}

function removeAllCells() {
    while (gridCells.firstChild) {
        gridCells.removeChild(gridCells.lastChild)
    }
}

function disableAllButtons() {
    if (blackBtnIsActive == true) {
        blackBtnIsActive = false;
    }else if (rainbowBtnIsActive == true) {
                rainbowBtnIsActive = false;
    }else if (scaleBtnIsActive == true) {
                scaleBtnIsActive = false;
    }else pickBtnIsActive = false;
}

function clearBtnClick() {
    disableAllButtons();
    removeAllCells();
    makeGrid(slider.value, slider.value)
}

makeGrid(16,16);
makeNewGrid();






