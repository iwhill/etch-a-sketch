//Creates n (size) squared tile elements and appends them to grid container
function createGrid (size) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  const gridTiles = [];
  let squared = size ** 2

  for (let i = 0; i < squared; i++) {
    gridTiles[i] = document.createElement('div');
    gridTiles[i].setAttribute('class', 'grid-tile');
    gridContainer.appendChild(gridTiles[i]);
  }
}

//Changes color of tiles on grid from white to black when mousing over tiles
function initializeGrid() {
  const tiles = document.querySelectorAll('.grid-tile');

  tiles.forEach(tile => {
    tile.addEventListener('mouseover', e => {
      e.target.removeAttribute('.grid-tile');
      e.target.setAttribute('class', 'grid-tile-filled');
    });
  });
}

//removes all of the grid-container's children if they exist
function resetGrid() {
  const gridContainer = document.querySelector('.grid-container');

  if (gridContainer.hasChildNodes()) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }
}

//Gets a number between 1 and 100 from user, rounds it, and returns it
function getGridSize() {
  let gridSize = prompt('Enter a size between 1 and 100 (inclusive)');

  if (gridSize === null) {
    return;
  }

  while (gridSize < 1 || gridSize > 100) {
    gridSize = prompt('Invalid grid size. Please enter a size between 1 and 100 (inclusive)');

    if (gridSize === null) {
      return;
    }
  }

  return (Math.round(gridSize * 1));
}

//Adds click event listener to 'Grid Size' button which sets up grid for drawing
function initializeGridSizeButton() {
  const button = document.querySelector('button');

  button.addEventListener('click', e => {
    let gridSize = getGridSize();
    
    if (gridSize) {
      resetGrid();
      createGrid(gridSize);
      initializeGrid();
    }
  });
}

//Sets up grid upon initial page load
createGrid(16);
initializeGrid();

//Function that enables grid size button funtionality
initializeGridSizeButton();
