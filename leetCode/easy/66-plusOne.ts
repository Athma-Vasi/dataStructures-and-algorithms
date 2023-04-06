import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function plusOne(digits: number[]) {
  return (BigInt(digits.join("")) + BigInt(1))
    .toString()
    .split("")
    .map((str) => parseInt(str));
}

export { plusOne };

describe("plusOne", () => {
  it("1. should return [1, 2, 4] when input: [1, 2, 3]", () => {
    const digits = [1, 2, 3];
    assertEquals(plusOne(digits), [1, 2, 4]);
  });

  it("2. should return [4, 3, 2, 2] when input: [4, 3, 2, 1]", () => {
    const digits = [4, 3, 2, 1];
    assertEquals(plusOne(digits), [4, 3, 2, 2]);
  });

  it("3. should return [1, 0, 0, 0] when input: [9, 9, 9]", () => {
    const digits = [9, 9, 9];
    assertEquals(plusOne(digits), [1, 0, 0, 0]);
  });

  it("4. should return [1] when input: [0]", () => {
    const digits = [0];
    assertEquals(plusOne(digits), [1]);
  });

  it("5. should return [1, 0] when input: [9]", () => {
    const digits = [9];
    assertEquals(plusOne(digits), [1, 0]);
  });

  it("6. should return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0] when input: [9, 9, 9, 9, 9, 9, 9, 9, 9]", () => {
    const digits = [9, 9, 9, 9, 9, 9, 9, 9, 9];
    assertEquals(plusOne(digits), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it("7. should return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] when input: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]", () => {
    const digits = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    assertEquals(plusOne(digits), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
