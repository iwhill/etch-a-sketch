function displayGrid () {
  const body = document.querySelector('body')
  const gridContainer = document.createElement('div')
  gridContainer.setAttribute('class', 'grid-container');
  body.appendChild(gridContainer); 

  const gridTiles = [];

  for (let i = 0; i < 16; i++) {
    gridTiles[i] = document.createElement('div');
    gridTiles[i].setAttribute('class', 'grid-tile');
    gridContainer.appendChild(gridTiles[i]);
  }
}