type Grid2048 = (number | null)[][];

const emptyGrid: Grid2048 = Array.from({ length: 4 }, () =>
  Array.from({ length: 4 }, () => null)
);

export function setupGrid(gridElement: HTMLDivElement) {
  const gridSize = 4;

  const display = (grid: Grid2048) => {
    const cells = gridElement.querySelectorAll(".grid_cell");
    cells.forEach((cell, index) => {
      const row = index % gridSize;
      const col = Math.floor(index / gridSize);

      if (cell.children.length) cell.removeChild(cell.children[0]);
      if (grid[col][row] === null) return;

      cell.appendChild(createTile(grid[col][row]!));
    });
  };

  display(emptyGrid);

  return {
    display,
  };
}

function createTile(value: number): HTMLDivElement {
  const tile = document.createElement("div");

  tile.classList.add("tile");
  tile.textContent = value.toString();

  colorSet(value, tile);

  return tile;
}

function colorSet(value: number, tile: HTMLDivElement) {
  switch (value) {
    case 2:
      tile.style.background = "#fbfced";
      tile.style.color = "black";
      break;
    case 4:
      tile.style.background = "#ecefc6";
      tile.style.color = "black";
      break;
    case 8:
      tile.style.background = "#ffb296";
      tile.style.color = "black";
      break;
    case 16:
      tile.style.background = "#ff7373";
      tile.style.color = "black";
      break;
    case 32:
      tile.style.background = "#f6546a";
      tile.style.color = "white";
      break;
    case 64:
      tile.style.background = "#8b0000";
      tile.style.color = "white";
      break;
    case 128:
      tile.style.background = "#794044";
      tile.style.color = "white";
      tile.style.fontSize = "50px";
      break;
    case 256:
      tile.style.background = "#31698a";
      tile.style.color = "white";
      tile.style.fontSize = "50px";
      break;
    case 512:
      tile.style.background = "#297A76";
      tile.style.color = "white";
      tile.style.fontSize = "50px";
      break;
    case 1024:
      tile.style.background = "#2D8A68";
      tile.style.color = "white";
      tile.style.fontSize = "40px";
      break;
    case 2048:
      tile.style.background = "#1C9F4E";
      tile.style.color = "white";
      tile.style.fontSize = "40px";
      break;
    case 4096:
      tile.style.background = "#468499";
      tile.style.color = "white";
      tile.style.fontSize = "40px";
      break;
    case 8192:
      tile.style.background = "#0E2F44";
      tile.style.color = "white";
      tile.style.fontSize = "40px";
      break;
  }
}
