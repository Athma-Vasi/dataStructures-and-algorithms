import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function createArrInGivenOrder(nums: number[], index: number[]) {
  return index.reduce((newArr: number[], pos, idx) => {
    if (newArr[pos] === undefined) newArr.push(nums[idx]);
    else {
      const leftSlice = newArr.slice(0, pos);
      const rightSlice = newArr.slice(pos);
      leftSlice.push(nums[idx]);
      newArr = [...leftSlice, ...rightSlice];
    }

    return newArr;
  }, []);
}

export { createArrInGivenOrder };

describe("createArrInGivenOrder", () => {
  it("1. should return the new array", () => {
    const nums = [0, 1, 2, 3, 4];
    const index = [0, 1, 2, 2, 1];
    assertEquals(createArrInGivenOrder(nums, index), [0, 4, 1, 3, 2]);
  });

  it("2. should return the new array", () => {
    const nums = [1, 2, 3, 4, 0];
    const index = [0, 1, 2, 3, 0];
    assertEquals(createArrInGivenOrder(nums, index), [0, 1, 2, 3, 4]);
  });

  it("3. should return the new array", () => {
    const nums = [1];
    const index = [0];
    assertEquals(createArrInGivenOrder(nums, index), [1]);
  });
});

/**
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.

Return the target array.

It is guaranteed that the insertion operations will be valid.
 */
