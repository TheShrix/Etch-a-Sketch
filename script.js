const container = document.querySelector("#container");
const boxStyle = document.querySelector("#box-style");
const clear = document.querySelector("#clear");
const blackButton = document.querySelector(".blk");
const rgbButton = document.querySelector(".rgb");


let grid = 16;




createGrid();

// Creates grid with initial 16x16

function createGrid() {
  let gridSize = `${700 / grid}px`;

  for (i = 1; i <= (grid * grid); i++) {
    let box = document.createElement('div');
    box.setAttribute('id', 'box-style');
    box.style.width = gridSize;
    box.style.height = gridSize;
    box.classList.add("trace");
    box.addEventListener("mouseover", colorBox);
    container.appendChild(box);
  }
}

function colorBox(e) {
  switch (color) {
    case 'rgb1': 
      e.target.classList.add('rgb1');
      break;
    case 'black':
      e.target.classList.add('black');
      break; 
    default:
      e.target.classList.add('black');
  };
}




function changeColor(event) {
  switch (event.target.dataset.color) {
    case 'rgb1': 
      color = 'rgb1';
      clearGrid();
      break;
    case 'black':
      color = 'black';
      clearGrid();
      break;
    default: 
      color = 'black';
      break;
  }
}






// Clears grid of all color
function clearAll() {
  const trace = document.getElementsByClassName("trace");
  while (trace[0]) {
    container.removeChild(trace[0]);
  }

  createGrid();
  newGridSize();
}

//Clears grid when changing colors
function clearGrid() {
  const trace = document.getElementsByClassName("trace");
  while (trace[0]) {
    container.removeChild(trace[0]);
  }

  createGrid();
}



// Creates new gridsize and prompts user to input new number less than 100
function newGridSize() {
  grid = parseInt(prompt("New canvas size", "16"));
  for (i = 0; i < Infinity; i++) {
    if (grid > 100) {
      grid = parseInt(prompt("Please choose smaller number", "100"));
    } else {
      return;
    }
  }
}








//Event Listeners
clear.addEventListener("click", clearAll);
blackButton.addEventListener('click', changeColor);
rgbButton.addEventListener('click', changeColor);