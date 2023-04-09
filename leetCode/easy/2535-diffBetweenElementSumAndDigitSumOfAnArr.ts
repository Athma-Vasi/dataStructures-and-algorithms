import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function diffBetweenElementSumAndDigitSumOfAnArr(nums: number[]) {
  const elementSum = nums.reduce((total, num) => (total += num), 0);
  const digitSum = nums.reduce((total, num) => {
    const numStr = num.toString();
    numStr.split("").forEach((numChar) => (total += parseInt(numChar)));

    return total;
  }, 0);

  return Math.abs(elementSum - digitSum);
}

export { diffBetweenElementSumAndDigitSumOfAnArr };

describe("diffBetweenElementSumAndDigitSumOfAnArr", () => {
  it("1. should return the difference between the element sum and digit sum", () => {
    const nums = [1, 15, 6, 3];
    assertEquals(diffBetweenElementSumAndDigitSumOfAnArr(nums), 9);
  });

  it("2. should return the difference between the element sum and digit sum", () => {
    const nums = [1, 2, 3, 4];
    assertEquals(diffBetweenElementSumAndDigitSumOfAnArr(nums), 0);
  });
});
