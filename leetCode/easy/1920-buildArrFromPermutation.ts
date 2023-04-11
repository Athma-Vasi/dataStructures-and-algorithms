import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function buildArrFromPermutation(nums: number[]) {
  return nums.reduce((arr: number[], num) => {
    arr.push(nums[num]);

    return arr;
  }, []);
}

export { buildArrFromPermutation };

describe("buildArrFromPermutation", () => {
  it("1. should return the array from the permutation", () => {
    const nums = [0, 2, 1, 5, 3, 4];
    assertEquals(buildArrFromPermutation(nums), [0, 1, 2, 4, 5, 3]);
  });

  it("2. should return the array from the permutation", () => {
    const nums = [5, 0, 1, 2, 3, 4];
    assertEquals(buildArrFromPermutation(nums), [4, 5, 0, 1, 2, 3]);
  });
});
