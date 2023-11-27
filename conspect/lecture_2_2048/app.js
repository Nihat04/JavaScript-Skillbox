import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.querySelector('.game-board');

const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard))

document.addEventListener('keydown', (e) => handleInput(e))

function handleInput(event) {
  switch(event.key) {
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowDown':
      break;
    case 'ArrowLeft':
      break;
    case 'ArrowRight':
      break;
    default:
      return;
  }
}

function moveUp() {
  slideTiles(grid.groupedCellsBycolumn);
}

function slideTiles(groupedCells) {
  groupedCells.forEach(group => slideTilesInGroup(group));
}

function slideTilesInGroup(group) {
  for(let i = 1; i < group.lenght; i++) {
    if(group[i].isEmpty()) {
      continue;
    }

    const cellWithTile = group[i];
    let targetCell;
    let j = i-1;

    while (j>=0)
  }
}