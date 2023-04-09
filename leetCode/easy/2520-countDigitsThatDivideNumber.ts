import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function countDigitsThatDivideNumber(num: number) {
  return num
    .toString()
    .split("")
    .reduce((acc: number[], numStr) => {
      const numInt = parseInt(numStr);
      num % numInt === 0 ? acc.push(numInt) : acc;

      return acc;
    }, []).length;
}

export { countDigitsThatDivideNumber };

describe("countDigitsThatDivideNumber", () => {
  it("1. should return 1", () => {
    assertEquals(countDigitsThatDivideNumber(7), 1);
  });

  it("2. should return 2", () => {
    assertEquals(countDigitsThatDivideNumber(121), 2);
  });

  it("3. should return 4", () => {
    assertEquals(countDigitsThatDivideNumber(1248), 4);
  });
});
