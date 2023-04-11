import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function kidsWithLargestCandies(candies: number[], extraCandies: number) {
  const largestCandy = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= largestCandy);
}

export { kidsWithLargestCandies };

describe("kidsWithLargestCandies", () => {
  it("1. should return an array of booleans", () => {
    const candies = [2, 3, 5, 1, 3];
    const extraCandies = 3;
    assertEquals(kidsWithLargestCandies(candies, extraCandies), [
      true,
      true,
      true,
      false,
      true,
    ]);
  });

  it("2. should return an array of booleans", () => {
    const candies = [4, 2, 1, 1, 2];
    const extraCandies = 1;
    assertEquals(kidsWithLargestCandies(candies, extraCandies), [
      true,
      false,
      false,
      false,
      false,
    ]);
  });

  it("3. should return an array of booleans", () => {
    const candies = [12, 1, 12];
    const extraCandies = 10;
    assertEquals(kidsWithLargestCandies(candies, extraCandies), [
      true,
      false,
      true,
    ]);
  });
});
