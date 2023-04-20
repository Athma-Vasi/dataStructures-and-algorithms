import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function rearrangeArrayElementsBySign(nums: number[]) {
  const [posNums, negNums] = nums.reduce(
    (acc: [number[], number[]], curr: number) => {
      curr > 0
        ? acc[0].push(curr)
        : curr < 0
        ? acc[1].push(curr)
        : acc[0].push(curr);

      return acc;
    },
    [[], []]
  );

  const posLen = posNums.length;
  const negLen = negNums.length;

  let posIdx = 0;
  let negIdx = 0;
  let numsIdx = 0;

  while (posIdx < posLen && negIdx < negLen) {
    nums[numsIdx] = posNums[posIdx];
    numsIdx += 1;
    nums[numsIdx] = negNums[negIdx];
    numsIdx += 1;
    posIdx += 1;
    negIdx += 1;
  }

  return nums;
}

console.log(rearrangeArrayElementsBySign([3, 1, -2, -5, 2, -4]));

export { rearrangeArrayElementsBySign };

describe("rearrangeArrayElementsBySign", () => {
  it("1. should return the longest common prefix", () => {
    const nums = [3, 1, -2, -5, 2, -4];
    assertEquals(rearrangeArrayElementsBySign(nums), [3, -2, 1, -5, 2, -4]);
  });

  it("2. should return the longest common prefix", () => {
    const nums = [-1, 1];
    assertEquals(rearrangeArrayElementsBySign(nums), [1, -1]);
  });
});
