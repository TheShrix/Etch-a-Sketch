const container = document.querySelector("#container");
const boxStyle = document.querySelector("#box-style");
const clear = document.querySelector("#clear");

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
  e.target.classList.add("black");
}

// Clears grid of all color
function clearAll() {
  const trace = document.getElementsByClassName("trace");
  while (trace[0]) {
    container.removeChild(trace[0]);
  }
  //newGridSize would go here if wanting to change canvas size after clearing
  createGrid();
  newGridSize();
}

clear.addEventListener("click", clearAll);

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
