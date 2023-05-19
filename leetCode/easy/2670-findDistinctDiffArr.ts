import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.188.0/testing/bdd.ts";

function findDistinctDiffArr(nums: number[]) {
  const result = Array.from({ length: nums.length });
  let idx = 0;
  const len = nums.length;

  while (idx < len) {
    const prefix = nums.slice(0, idx + 1);
    const suffix = nums.slice(idx + 1);
    const uniquePrefixNums = new Set(prefix).size;
    const uniqueSuffixNums = new Set(suffix).size;
    result[idx] = uniquePrefixNums - uniqueSuffixNums;

    idx += 1;
  }

  return result as number[];
}

export { findDistinctDiffArr };

describe("findDistinctDiffArr", () => {
  it("should return [-3,-1,1,3,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = findDistinctDiffArr(nums);
    assertEquals(result, [-3, -1, 1, 3, 5]);
  });
});
