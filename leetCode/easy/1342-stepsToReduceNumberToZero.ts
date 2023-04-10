import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function stepsToReduceNumberToZero(num: number) {
  let steps = 0;

  while (num > 0) {
    num % 2 === 0 ? (num /= 2) : (num -= 1);
    steps += 1;
  }

  return steps;
}

export { stepsToReduceNumberToZero };

describe("stepsToReduceNumberToZero", () => {
  it("1. should return the number of steps to reduce a number to zero", () => {
    const num = 14;
    assertEquals(stepsToReduceNumberToZero(num), 6);
  });

  it("2. should return the number of steps to reduce a number to zero", () => {
    const num = 8;
    assertEquals(stepsToReduceNumberToZero(num), 4);
  });

  it("3. should return the number of steps to reduce a number to zero", () => {
    const num = 123;
    assertEquals(stepsToReduceNumberToZero(num), 12);
  });
});
