import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";

function twoSum(nums: number[], target: number): number[] {
  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashTable.has(complement)) {
      return [hashTable.get(complement), i];
    }

    hashTable.set(nums[i], i);
  }

  return [];

  //   let left = 0;
  //   const length = nums.length;
  //   let right = 1;

  //   if (length < 2) return [];
  //   if (length === 3) {
  //     for (let i = 0; i < length; i += 1) {
  //       for (let j = i + 1; j < length; j += 1) {
  //         if (nums[i] + nums[j] === target) return [i, j];
  //       }
  //     }
  //   }

  //   while (left < right) {
  //     const sum = Math.abs(nums[left] + nums[right]);

  //     if (sum === Math.abs(target)) return [left, right];
  //     else if (sum < Math.abs(target)) left += 1;
  //     else right -= 1;
  //   }

  //   return [];
}

export { twoSum };

Deno.test("twoSum ~~ nums: [2, 7, 11, 15], target: 9", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

Deno.test("twoSum ~~ nums: [2, 7, 11, 15], target: 26", () => {
  assertEquals(twoSum([2, 7, 11, 15], 26), [2, 3]);
});

Deno.test("twoSum ~~ nums: [2, 7, 11, 15], target: 18", () => {
  assertEquals(twoSum([2, 7, 11, 15], 18), [1, 2]);
});

Deno.test("twoSum ~~ nums: [3, 2, 4], target: 6", () => {
  assertEquals(twoSum([3, 2, 4], 6), [1, 2]);
});

Deno.test("twoSum ~~ nums: [3, 3], target: 6", () => {
  assertEquals(twoSum([3, 3], 6), [0, 1]);
});

Deno.test("twoSum ~~ nums: [-1,-2,-3,-4,-5], target: -8", () => {
  assertEquals(twoSum([-1, -2, -3, -4, -5], -8), [2, 4]);
});

// for nums: [-10, -1, -18, -19], target: -19
Deno.test("twoSum ~~ nums: [-10, -1, -18, -19], target: -19", () => {
  assertEquals(twoSum([-10, -1, -18, -19], -19), [1, 2]);
});
