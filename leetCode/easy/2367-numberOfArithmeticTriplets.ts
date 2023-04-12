import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function numberOfArithmeticTriplets(nums: number[], diff: number) {
  const triplets: number[][] = [];
  const numsLen = nums.length;

  for (let i = 0; i < numsLen - 2; i += 1) {
    for (let j = i + 1; j < numsLen - 1; j += 1) {
      for (let k = j + 1; k < numsLen; k += 1) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff)
          triplets.push([i, j, k]);
      }
    }
  }

  return triplets.length;
}

export { numberOfArithmeticTriplets };

describe("numberOfArithmeticTriplets", () => {
  it("1. should return the number of arithmetic triplets", () => {
    const nums = [0, 1, 4, 6, 7, 10];
    const diff = 3;
    assertEquals(numberOfArithmeticTriplets(nums, diff), 2);
  });

  it("2. should return the number of arithmetic triplets", () => {
    const nums = [4, 5, 6, 7, 8, 9];
    const diff = 2;
    assertEquals(numberOfArithmeticTriplets(nums, diff), 2);
  });
});
