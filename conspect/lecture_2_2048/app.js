import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.querySelector(".game-board");

const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));

document.addEventListener("keydown", (e) => handleInput(e));

function handleInput(event) {
  switch (event.key) {
    case "ArrowUp":
      if(!canMove(grid.groupedCellsByRow)) return;
      moveUp();
      break;
      case "ArrowDown":
        if(!canMove(grid.groupedCellsByReversedRow)) return;
        moveDown();
        break;
    case "ArrowLeft":
      if(!canMove(grid.groupedCellsByColumn)) return;
      moveLeft();
      break;
    case "ArrowRight":
      if(!canMove(grid.groupedCellsByReversedColumn)) return;
      moveRight();
      break;
    default:
      return;
  }

  const newTile = new Tile(gameBoard);
  grid.getRandomEmptyCell().linkTile(newTile);

  if(grid.cells.some(cell => !cell.isEmpty() && cell.linkTile.value === 2048)) {
    alert('Подеба');
    document.removeEventListener("keydown", (e) => handleInput(e));
    return;
  }

  if(!(canMove(grid.groupedCellsByColumn) ||
  canMove(grid.groupedCellsByReversedColumn) ||
  canMove(grid.groupedCellsByRow) ||
  grid.groupedCellsByReversedRow)) {
    alert('Поражение');
    document.removeEventListener("keydown", (e) => handleInput(e));
    return;
  }
}

function moveLeft() {
  slideTiles(grid.groupedCellsByColumn);
}

function moveRight() {
  slideTiles(grid.groupedCellsByReversedColumn);
}

function moveUp() {
  slideTiles(grid.groupedCellsByRow);
}

function moveDown() {
  slideTiles(grid.groupedCellsByReversedRow);
}

function slideTiles(groupedCells) {
  groupedCells.forEach((group) => slideTilesInGroup(group));
  grid.cells.forEach(cell => cell.linkedTileForMerge && cell.mergeTiles());
}

function slideTilesInGroup(group) {
  for (let i = 1; i < group.length; i++) {
    if (group[i].isEmpty()) {
      continue;
    }

    const cellWithTile = group[i];
    let targetCell;
    let j = i - 1;

    while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
      targetCell = group[j];
      j--;
    }

    if (!targetCell) {
      continue;
    }

    if (targetCell.isEmpty()) {
      targetCell.linkTile(cellWithTile.linkedTile);
    } else {
      targetCell.linkTileForMerge(cellWithTile.linkedTile);
    }

    cellWithTile.unlinkTile();
  }
}

function canMove(groupCells) {
  return groupCells.some(group => canMoveInGroup(group));
}

function canMoveInGroup(group) {
  return group.some((cell, index) => {
    if(!index) return false;
    if(cell.isEmpty()) return false;
    const targetCell = group[index-1];
    return targetCell.canAccept(cell.linkedTile);
  });
}