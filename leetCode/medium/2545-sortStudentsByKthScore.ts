import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function sortStudentsByKthScore(score: Array<number[]>, k: number) {
  return score.sort((a, b) => b[k] - a[k]);
}

export { sortStudentsByKthScore };

describe("sortStudentsByKthScore", () => {
  it("1. should return the sorted array", () => {
    const score = [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ];
    const k = 2;
    assertEquals(sortStudentsByKthScore(score, k), [
      [7, 5, 11, 2],
      [10, 6, 9, 1],
      [4, 8, 3, 15],
    ]);
  });

  it("2. should return the sorted array", () => {
    const score = [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ];
    const k = 1;
    assertEquals(sortStudentsByKthScore(score, k), [
      [4, 8, 3, 15],
      [10, 6, 9, 1],
      [7, 5, 11, 2],
    ]);
  });
});
