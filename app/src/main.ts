import "./assets/app.css";
import "./assets/2048.css";

import { setupGrid } from "./2048Grid.ts";

const grid = setupGrid(document.querySelector<HTMLDivElement>(".grid")!);

/**
 * Exemple
 * TODO: à supprimer
 */
grid.display([
  [null, null, 4, null],
  [null, null, 8, null],
  [null, null, 64, 8],
  [2, 8, 2, 8],
]);
