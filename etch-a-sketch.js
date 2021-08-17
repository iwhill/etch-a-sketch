//Creates each square div element that goes in the grid.
//Adds a class and mouseover event listener for each, and appends it to the grid-container as a child.
function createSquare(squareId) {
    let square = document.createElement('div');
    square.setAttribute('id', `${ squareId }`);
    square.classList.add("square-properties");
    container.appendChild(square);
    square.addEventListener("mouseover", fillSquare);
}

//Creates grid of square div elements based on length of one side of grid.
function createGrid(length) {
    for (let i = 0; i < length ** 2; i++) {
        createSquare(i);
    }
    document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${ length }, 1fr`;
    document.getElementById('grid-container').style.gridTemplateRows = `repeat(${ length }, 1fr`;
    
}

//Function that event listener in createSquare calls to remove class that makes square white (cont.)
//and add class that makes it black after mouseover.
function fillSquare(e) {
    const square = document.getElementById(`${e.target.id}`)
    e.target.classList.remove("square-properties");
    e.target.classList.add("square-properties-hover");
}

//Function that is called when 'Clear' button is clicked
//Prompts user to enter a number between 1-100 (inclusive) to set new grid height*width
function checkLength() {
    let gridPrompt = prompt('Please enter an integer between 1 and 100, inclusive.');

    if (gridPrompt === '' || gridPrompt === null || isNaN(parseInt(gridPrompt))
        || parseInt(gridPrompt) > 100 || parseInt(gridPrompt) < 1) {
        return;
    }
    resetGrid(Math.floor(parseInt(gridPrompt)));
}

//Removes square div elementws from grid
//Calls createGrid, passing in a new height/width for grid
function resetGrid(newSize) {
    let parent = document.getElementById('grid-container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    defaultGridLength = newSize;
    createGrid(defaultGridLength);
}

const container = document.querySelector('#grid-container');
const button = document.querySelector('button');

let defaultGridLength = 16;

createGrid(defaultGridLength);

button.addEventListener('click', checkLength);