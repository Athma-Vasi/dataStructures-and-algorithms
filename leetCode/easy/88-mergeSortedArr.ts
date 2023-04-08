import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function mergeSortedArr(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  let left = m - 1;
  let right = n - 1;
  const numsLen = nums1.length;

  for (let i = numsLen - 1; i >= 0; i -= 1) {
    if (right < 0) break;

    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[i] = nums1[left];
      left -= 1;
    } else {
      nums1[i] = nums2[right];
      right -= 1;
    }
  }
}

export { mergeSortedArr };

describe("mergeSortedArr", () => {
  it("1. should merge two sorted arrays", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const output = [1, 2, 2, 3, 5, 6];
    mergeSortedArr(nums1, m, nums2, n);
    assertEquals(nums1, output);
  });

  it("2. should merge two sorted arrays", () => {
    const nums1 = [1];
    const m = 1;
    const nums2: number[] = [];
    const n = 0;
    const output = [1];
    mergeSortedArr(nums1, m, nums2, n);
    assertEquals(nums1, output);
  });

  it("3. should merge two sorted arrays", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    const output = [1];
    mergeSortedArr(nums1, m, nums2, n);
    assertEquals(nums1, output);
  });

  it("4. should merge two sorted arrays", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;
    const output = [1, 2, 3, 4, 5, 6];
    mergeSortedArr(nums1, m, nums2, n);
    assertEquals(nums1, output);
  });
});
