import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function runningSumOf1DArray(nums: number[]) {
  let runningCount = 0;
  const numsLen = nums.length;
  const sumArr: number[] = [];

  while (runningCount < numsLen) {
    let tempSum = 0;
    for (let i = 0; i <= runningCount; i += 1) tempSum += nums[i];
    sumArr.push(tempSum);
    runningCount += 1;
  }

  return sumArr;
}

export { runningSumOf1DArray };

describe("runningSumOf1DArray", () => {
  it("1. should return the running sum of 1d array", () => {
    const nums = [1, 2, 3, 4];
    assertEquals(runningSumOf1DArray(nums), [1, 3, 6, 10]);
  });

  it("2. should return the running sum of 1d array", () => {
    const nums = [1, 1, 1, 1, 1];
    assertEquals(runningSumOf1DArray(nums), [1, 2, 3, 4, 5]);
  });

  it("3. should return the running sum of 1d array", () => {
    const nums = [3, 1, 2, 10, 1];
    assertEquals(runningSumOf1DArray(nums), [3, 4, 6, 16, 17]);
  });
});
