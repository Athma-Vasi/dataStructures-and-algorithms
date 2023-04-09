import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function partitionArrGivenPivot(nums: number[], pivot: number) {
  return nums
    .reduce(
      (acc: [number[], number[], number[]], num) => {
        num < pivot
          ? acc[0].push(num)
          : num === pivot
          ? acc[1].push(num)
          : acc[2].push(num);

        return acc;
      },
      [[], [], []] // [lessThan, equalTo, greaterThan]
    )
    .flatMap((arr: number[]) => arr);
}

export { partitionArrGivenPivot };

describe("partitionArrGivenPivot", () => {
  it("1. should return the partitioned array", () => {
    const nums = [9, 12, 5, 10, 14, 3, 10];
    const pivot = 10;
    const result = [9, 5, 3, 10, 10, 12, 14];
    assertEquals(partitionArrGivenPivot(nums, pivot), result);
  });

  it("2. should return the partitioned array", () => {
    const nums = [-3, 4, 3, 2];
    const pivot = 2;
    const result = [-3, 2, 4, 3];
    assertEquals(partitionArrGivenPivot(nums, pivot), result);
  });
});
