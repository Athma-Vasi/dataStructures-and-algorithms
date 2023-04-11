import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function numberOfGoodPairs(nums: number[]) {
  return (
    nums.reduce((pairArr: Set<string>, outerNum, outerIdx) => {
      nums.forEach((innerNum, innerIdx) => {
        if (outerNum === innerNum && outerIdx !== innerIdx)
          pairArr.add(`(${outerIdx},${innerIdx})`);
      });

      return pairArr;
    }, new Set<string>()).size / 2
  );
}

export { numberOfGoodPairs };

describe("numberOfGoodPairs", () => {
  it("1. should return the number of good pairs", () => {
    const nums = [1, 2, 3, 1, 1, 3];
    assertEquals(numberOfGoodPairs(nums), 4);
  });

  it("2. should return the number of good pairs", () => {
    const nums = [1, 1, 1, 1];
    assertEquals(numberOfGoodPairs(nums), 6);
  });

  it("3. should return the number of good pairs", () => {
    const nums = [1, 2, 3];
    assertEquals(numberOfGoodPairs(nums), 0);
  });
});
