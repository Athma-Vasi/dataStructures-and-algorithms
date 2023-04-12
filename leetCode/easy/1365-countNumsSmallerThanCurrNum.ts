import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function countNumsSmallerThanCurrNum(nums: number[]) {
  return nums.reduce((acc: number[], outerNum) => {
    const result = nums.reduce(
      (result, innerNum) => (innerNum < outerNum ? (result += 1) : result),
      0
    );
    acc.push(result);

    return acc;
  }, []);
}

export { countNumsSmallerThanCurrNum };

describe("countNumsSmallerThanCurrNum", () => {
  it("1. should return an array of the number of smaller numbers to the right of each index", () => {
    const nums = [8, 1, 2, 2, 3];
    assertEquals(countNumsSmallerThanCurrNum(nums), [4, 0, 1, 1, 3]);
  });

  it("2. should return an array of the number of smaller numbers to the right of each index", () => {
    const nums = [6, 5, 4, 8];
    assertEquals(countNumsSmallerThanCurrNum(nums), [2, 1, 0, 3]);
  });

  it("3. should return an array of the number of smaller numbers to the right of each index", () => {
    const nums = [7, 7, 7, 7];
    assertEquals(countNumsSmallerThanCurrNum(nums), [0, 0, 0, 0]);
  });
});
