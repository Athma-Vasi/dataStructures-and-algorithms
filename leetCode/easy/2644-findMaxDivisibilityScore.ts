import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function findMaxDivisibilityScore(nums: number[], divisors: number[]) {
  // Calculate the number of elements in `nums` that are divisible by each divisor
  const scores = divisors.reduce(
    (score: number[], divisor, idx) => {
      // Iterate over each element in `nums` and check if it is divisible by the current divisor
      nums.forEach((num) => {
        if (num % divisor === 0) score[idx] += 1;
      });

      return score;
    },
    // Initialize the `score` array with zeros
    Array.from({ length: divisors.length }).map((_) => 0)
  );

  // Find the maximum score
  const maxScore = Math.max(...scores);
  // Find the indices of the scores that are tied for the maximum score
  const tiedScoresIdxs = scores.reduce((acc: number[], score, idx) => {
    score === maxScore ? acc.push(idx) : acc;

    return acc;
  }, []);
  // Map the tied score indices to their corresponding divisors
  const tiedScores = tiedScoresIdxs.map((scoreIdx) => divisors[scoreIdx]);

  // Return the smallest tied score
  return Math.min(...tiedScores);
}

export { findMaxDivisibilityScore };

describe("findMaxDivisibilityScore", () => {
  it("1. should return the smallest divisor with the maximum divisibility score", () => {
    const nums = [4, 7, 9, 3, 9];
    const divisors = [5, 2, 3];
    const expected = 3;
    assertEquals(findMaxDivisibilityScore(nums, divisors), expected);
  });

  it("2. should return the smallest divisor with the maximum divisibility score", () => {
    const nums = [20, 14, 21, 10];
    const divisors = [5, 7, 5];
    const expected = 5;
    assertEquals(findMaxDivisibilityScore(nums, divisors), expected);
  });

  it("3. should return the smallest divisor with the maximum divisibility score", () => {
    const nums = [12];
    const divisors = [10, 16];
    const expected = 10;
    assertEquals(findMaxDivisibilityScore(nums, divisors), expected);
  });

  it("4. should return the smallest divisor with the maximum divisibility score", () => {
    const nums = [
      56, 22, 79, 41, 8, 39, 81, 59, 74, 14, 45, 49, 15, 10, 28, 16, 77, 22, 65,
      8, 36, 79, 94, 44, 80, 72, 8, 96, 78,
    ];
    const divisors = [
      39, 92, 69, 55, 9, 44, 26, 76, 40, 77, 16, 69, 40, 64, 12, 48, 66, 7, 59,
      10, 33, 72, 97, 60, 79, 68, 25, 63,
    ];
    const expected = 7;
    assertEquals(findMaxDivisibilityScore(nums, divisors), expected);
  });

  it("5. should return the smallest divisor with the maximum divisibility score", () => {
    const nums = [73, 13, 20, 6];
    const divisors = [56, 75, 83, 26, 24, 53, 56, 61];
    const expected = 24;
    assertEquals(findMaxDivisibilityScore(nums, divisors), expected);
  });
});
