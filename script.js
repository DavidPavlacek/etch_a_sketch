const gridCells = document.getElementById("grid-cells");
const slider = document.getElementById("slider");
const gridSize = document.getElementById("grid-size");
const allButtons = document.getElementById("color-selection-buttons");
const colorPick = document.getElementById("color-pick");
let gridItemList = document.getElementsByClassName("grid-item");

let blackBtnIsActive = false;
let rainbowBtnIsActive = false;
let scaleBtnIsActive = false;
let pickBtnIsActive = false;
let ereaseBtnIsActive = false;
let pickColorValue = "#0826af";
let ereaserColorValue = "whitesmoke";
let coloringFunction = blackPen;


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

function listenMouseOverCells() {
    Array.from(gridItemList).forEach(cell => cell.addEventListener("mouseover", coloringFunction));
}

allButtons.addEventListener("click", function(e) { 
    if (e.target.id == "black-btn") {
        coloringFunction = blackPen;
        if (blackBtnIsActive == false) {
            disableAllButtons();
            blackBtnIsActive = true;
            listenMouseOverCells();
        } else disableAllButtons();     
    }
    if (e.target.id == "rainbow-btn") {
        coloringFunction = rainbowPen;
        if (rainbowBtnIsActive == false) {     
            disableAllButtons();
            rainbowBtnIsActive = true;
            listenMouseOverCells();
        } else disableAllButtons();    
    }
    if (e.target.id == "scale-btn") {
        coloringFunction = greyScalePen;
        if (scaleBtnIsActive == false) {
            disableAllButtons();
            scaleBtnIsActive = true;
            listenMouseOverCells();
        } else disableAllButtons();
    }
    if (e.target.id == "pick-btn" ||
        e.target.id == "color-pick") {
        coloringFunction = pickColorPen;
        if (pickBtnIsActive == false) {    
            disableAllButtons();
            pickBtnIsActive = true;
            listenMouseOverCells();
        }else disableAllButtons();
    }

    if (e.target.id == "erease-btn") {
        coloringFunction = ereasePen;
        if (ereaseBtnIsActive == false) {    
            disableAllButtons();
            ereaseBtnIsActive = true;
            listenMouseOverCells();
        } else disableAllButtons();
    }
    if (e.target.id == "clear-btn") {
        clearBtnClick();
    }
});

function clearBtnClick() {
    disableAllButtons();
    removeAllCells();
    makeGrid(slider.value, slider.value)
}

function blackPen(event) {
    if (blackBtnIsActive == true) {
        event.target.style.backgroundColor = "black";
        event.target.style.opacity = "1";
    } else event.stopPropagation()
}

function rainbowPen(event) {
    if (rainbowBtnIsActive == true) {
        event.target.style.backgroundColor = getRandomColor();
        event.target.style.opacity = "1";
    } else event.stopPropagation()
}

function greyScalePen(event) {
    if (scaleBtnIsActive == true) {  
        if (event.target.style.backgroundColor != "black") {
            event.target.style.opacity = 0;
        }
        event.target.style.backgroundColor = "black";
        event.target.style.opacity = (parseFloat(event.target.style.opacity) || 0) + 0.2;    
    } else event.stopPropagation()
}

function pickColorPen(event) {
    if (pickBtnIsActive == true) {
        event.target.style.backgroundColor = pickColorValue;;
        event.target.style.opacity = "1";
    } else event.stopPropagation()
}

function ereasePen(event) {
    if (ereaseBtnIsActive == true) {
        event.target.style.backgroundColor = ereaserColorValue;
        event.target.style.opacity = "1";
    } else event.stopPropagation()
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for ( let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];      
    } return randomColor;  
}

colorPick.addEventListener("input", function() {
    return pickColorValue = this.value
})

function removeAllCells() {
    while (gridCells.firstChild) {
        gridCells.removeChild(gridCells.lastChild)
    }
}

function disableAllButtons() {
    if (blackBtnIsActive == true) {
        blackBtnIsActive = false;
    } else if (rainbowBtnIsActive == true) {
                rainbowBtnIsActive = false;
    } else if (scaleBtnIsActive == true) {
                scaleBtnIsActive = false;
    } else if (pickBtnIsActive == true) {
                pickBtnIsActive = false;
    } else ereaseBtnIsActive = false;
}

makeGrid(16,16);
makeNewGrid();


