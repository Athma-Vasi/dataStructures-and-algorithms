import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @param nums sorted array of distinct integers
 * @param target target value
 * @returns index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @description runtime O(n) space O(1)
 */
function searchInsertPosition(nums: number[], target: number) {
  let left = 0;
  let right = 1;
  const numsLen = nums.length;

  if (numsLen === 0) return 0;
  if (numsLen === 1) return target > nums[0] ? 1 : 0;

  while (left < numsLen && right < numsLen) {
    const leftNum = nums[left];
    const rightNum = nums[right];

    // if target is equal to a number return the index
    if (target === leftNum || target === rightNum)
      return target === leftNum ? left : right;

    // if target is less than first number
    if (target < leftNum) return 0;

    // if target is between two numbers return the right index
    if (target > leftNum && target < rightNum) return right;

    left += 1;
    right += 1;
  }

  // if target is greater than last number
  return right;
}

export { searchInsertPosition };

describe("searchInsertPosition", () => {
  it("1. should return 2 when nums: [1, 3, 5, 6] and target: 5", () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    assertEquals(searchInsertPosition(nums, target), 2);
  });

  it("2. should return 1 when nums: [1, 3, 5, 6] and target: 2", () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    assertEquals(searchInsertPosition(nums, target), 1);
  });

  it("3. should return 4 when nums: [1, 3, 5, 6] and target: 7", () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    assertEquals(searchInsertPosition(nums, target), 4);
  });

  it("4. should return 0 when nums: [1, 3, 5, 6] and target: 0", () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    assertEquals(searchInsertPosition(nums, target), 0);
  });

  it("5. should return 0 when nums: [1] and target: 0", () => {
    const nums = [1];
    const target = 0;
    assertEquals(searchInsertPosition(nums, target), 0);
  });

  it("6. should return 1 when nums: [1] and target: 2", () => {
    const nums = [1];
    const target = 2;
    assertEquals(searchInsertPosition(nums, target), 1);
  });

  it("7. should return 0 when nums: [] and target: 0", () => {
    const nums: number[] = [];
    const target = 0;
    assertEquals(searchInsertPosition(nums, target), 0);
  });

  it("8. should return 1 when nums: [1, 3] and target: 2", () => {
    const nums = [1, 3];
    const target = 2;
    assertEquals(searchInsertPosition(nums, target), 1);
  });
});

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @param nums sorted array of distinct integers
 * @param target target value
 * @returns index if the target is found. If not, return the index where it would be if it were inserted in order.
 * @description runtime O(log n) space O(1)
 */
function searchInsertPositionBinary(nums: number[], target: number) {
  const numsLen = nums.length;
  let lowIdx = 0;
  let highIdx = numsLen;

  if (target < nums[0]) return 0;
  if (target > nums[numsLen - 1]) return numsLen;

  while (lowIdx < highIdx) {
    const midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2);
    const mid = nums[midIdx];

    if (target > mid) lowIdx = midIdx + 1;
    else highIdx = midIdx;
  }

  return lowIdx;
}

export { searchInsertPositionBinary };

console.log(searchInsertPositionBinary([1, 3], 2));

describe("searchInsertPositionBinary", () => {
  it("1. should return 2 when nums: [1, 3, 5, 6] and target: 5", () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    assertEquals(searchInsertPositionBinary(nums, target), 2);
  });

  it("2. should return 1 when nums: [1, 3, 5, 6] and target: 2", () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    assertEquals(searchInsertPositionBinary(nums, target), 1);
  });

  it("3. should return 4 when nums: [1, 3, 5, 6] and target: 7", () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    assertEquals(searchInsertPositionBinary(nums, target), 4);
  });

  it("4. should return 0 when nums: [1, 3, 5, 6] and target: 0", () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    assertEquals(searchInsertPositionBinary(nums, target), 0);
  });

  it("5. should return 0 when nums: [1] and target: 0", () => {
    const nums = [1];
    const target = 0;
    assertEquals(searchInsertPositionBinary(nums, target), 0);
  });

  it("6. should return 1 when nums: [1] and target: 2", () => {
    const nums = [1];
    const target = 2;
    assertEquals(searchInsertPositionBinary(nums, target), 1);
  });

  it("7. should return 0 when nums: [] and target: 0", () => {
    const nums: number[] = [];
    const target = 0;
    assertEquals(searchInsertPositionBinary(nums, target), 0);
  });

  it("8. should return 1 when nums: [1, 3] and target: 2", () => {
    const nums = [1, 3];
    const target = 2;
    assertEquals(searchInsertPositionBinary(nums, target), 1);
  });
});
