function createGrid () {
  const gridContainer = document.querySelector('.grid-container');
  const gridTiles = [];

  for (let i = 0; i < 16; i++) {
    gridTiles[i] = document.createElement('div');
    gridTiles[i].setAttribute('class', 'grid-tile');
    gridContainer.appendChild(gridTiles[i]);
  }
}