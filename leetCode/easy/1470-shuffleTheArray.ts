import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function shuffleTheArray(nums: number[], n: number) {
  const leftSlice = nums.slice(0, n);
  const rightSlice = nums.slice(n);

  return leftSlice.reduce((result: number[], num, idx) => {
    result.push(num);
    result.push(rightSlice[idx]);

    return result;
  }, []);
}

export { shuffleTheArray };

describe("shuffleTheArray", () => {
  it("1. should return the shuffled array", () => {
    const nums = [2, 5, 1, 3, 4, 7];
    const n = 3;
    assertEquals(shuffleTheArray(nums, n), [2, 3, 5, 4, 1, 7]);
  });

  it("2. should return the shuffled array", () => {
    const nums = [1, 2, 3, 4, 4, 3, 2, 1];
    const n = 4;
    assertEquals(shuffleTheArray(nums, n), [1, 4, 2, 3, 3, 2, 4, 1]);
  });

  it("3. should return the shuffled array", () => {
    const nums = [1, 1, 2, 2];
    const n = 2;
    assertEquals(shuffleTheArray(nums, n), [1, 2, 1, 2]);
  });
});
