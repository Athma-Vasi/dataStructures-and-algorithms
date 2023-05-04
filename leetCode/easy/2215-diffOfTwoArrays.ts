import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function diffOfTwoArrays(nums1: number[], nums2: number[]) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const diffArrs1 = new Set(nums1.filter((num) => !nums2Set.has(num)));
  const diffArrs2 = new Set(nums2.filter((num) => !nums1Set.has(num)));

  return [Array.from(diffArrs1), Array.from(diffArrs2)];
}

export { diffOfTwoArrays };

describe("diffOfTwoArrays", () => {
  it("1. should return the diff of two arrays", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [2, 3, 4, 5, 6];
    assertEquals(diffOfTwoArrays(nums1, nums2), [[1], [6]]);
  });

  it("2. should return the diff of two arrays", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [1, 2, 3, 4, 5];
    assertEquals(diffOfTwoArrays(nums1, nums2), [[], []]);
  });

  it("3. should return the diff of two arrays", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [6, 7, 8, 9, 10];
    assertEquals(diffOfTwoArrays(nums1, nums2), [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ]);
  });
});
