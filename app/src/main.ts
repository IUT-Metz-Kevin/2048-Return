import "./assets/app.css";
import "./assets/2048.css";

import { setupGrid } from "./2048Grid.ts";

type TileValue = number | null;
type Grid = TileValue[][];
type Direction = "UP" | "LEFT" | "RIGHT" | "DOWN";

const grid = setupGrid(document.querySelector<HTMLDivElement>(".grid")!);

async function moveToDirection(direction: Direction) {
  const response = await fetch("http://localhost:3000/2048", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ direction }),
  });

  const newGrid = (await response.json()) as Grid;
  grid.display(newGrid);
}

const mapDirectionKeys: Record<string, Direction> = {
  ArrowUp: "UP",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  ArrowDown: "DOWN",
};

document.addEventListener("keyup", (event) => {
  moveToDirection(mapDirectionKeys[event.key]);
});
