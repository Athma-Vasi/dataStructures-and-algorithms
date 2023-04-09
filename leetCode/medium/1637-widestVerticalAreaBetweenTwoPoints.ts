import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function widestVerticalAreaBetweenTwoPoints(points: Array<[number, number]>) {
  const xCoordsSorted = points.map((point) => point[0]).sort((a, z) => a - z);

  let left = 0;
  let right = 1;
  const coordsLen = xCoordsSorted.length;
  const distanceArr: number[] = [];

  while (right < coordsLen && left < right) {
    const leftXCoord = xCoordsSorted[left];
    const rightXCoord = xCoordsSorted[right];
    distanceArr.push(rightXCoord - leftXCoord);

    left += 1;
    right += 1;
  }

  return Math.max(...distanceArr);
}

export { widestVerticalAreaBetweenTwoPoints };

describe("widestVerticalAreaBetweenTwoPoints", () => {
  it("1. should return the widest vertical area between two points", () => {
    const points: Array<[number, number]> = [
      [8, 7],
      [9, 9],
      [7, 4],
      [9, 7],
    ];
    assertEquals(widestVerticalAreaBetweenTwoPoints(points), 1);
  });

  it("2. should return the widest vertical area between two points", () => {
    const points: Array<[number, number]> = [
      [3, 1],
      [9, 0],
      [1, 0],
      [1, 4],
      [5, 3],
      [8, 8],
    ];
    assertEquals(widestVerticalAreaBetweenTwoPoints(points), 3);
  });
});
