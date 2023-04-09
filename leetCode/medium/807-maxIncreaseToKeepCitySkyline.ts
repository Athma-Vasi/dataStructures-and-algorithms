import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function maxIncreaseToKeepCitySkyline(grid: Array<number[]>) {
  const numOfCols = grid[0].length;
  const numOfRows = grid.length;
  // each gridCols array is a column inside [[(0,0), (0,1), (0,2), (0,3)], [...etc]]
  const gridCols: Array<number[]> = [];
  let colIdx = 0;

  while (colIdx < numOfCols) {
    const col = grid.map((row) => row[colIdx]);
    gridCols.push(col);
    colIdx += 1;
  }

  const newGridDiff: Array<number[]> = [];

  for (let y = 0; y < numOfRows; y += 1) {
    const oldRow = grid[y];
    const rowMax = Math.max(...oldRow);
    const newDiffRow: number[] = [];

    for (let x = 0; x < numOfCols; x += 1) {
      const oldCol = gridCols[x];
      const colMax = Math.max(...oldCol);
      const newHeight = Math.min(rowMax, colMax);

      const oldHeight = grid[y][x];
      const diffBetweenHeights = Math.abs(oldHeight - newHeight);
      newDiffRow.push(diffBetweenHeights);
    }

    newGridDiff.push(newDiffRow);
  }

  return newGridDiff.reduce((total, rowDiffs) => {
    rowDiffs.forEach((diff) => (total += diff));

    return total;
  }, 0);
}

export { maxIncreaseToKeepCitySkyline };

describe("maxIncreaseToKeepCitySkyline", () => {
  it("1. should return the max amount of increase to keep the city skyline", () => {
    const grid = [
      [3, 0, 8, 4],
      [2, 4, 5, 7],
      [9, 2, 6, 3],
      [0, 3, 1, 0],
    ];
    assertEquals(maxIncreaseToKeepCitySkyline(grid), 35);
  });

  it("2. should return the max amount of increase to keep the city skyline", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    assertEquals(maxIncreaseToKeepCitySkyline(grid), 0);
  });
});

/**
There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.

A city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.

We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.

Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.
 */
