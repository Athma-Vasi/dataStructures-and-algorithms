import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function shuffleString(s: string, indices: number[]) {
  return indices
    .reduce((newStr, indice, idx) => {
      newStr[indice] = s[idx];

      return newStr;
    }, Array.from({ length: s.length }))
    .join("");
}

export { shuffleString };

describe("shuffleString", () => {
  it("1. should return a string with the characters at the indices shuffled", () => {
    const s = "codeleet";
    const indices = [4, 5, 6, 7, 0, 2, 1, 3];
    const result = "leetcode";
    assertEquals(shuffleString(s, indices), result);
  });

  it("2. should return a string with the characters at the indices shuffled", () => {
    const s = "abc";
    const indices = [0, 1, 2];
    const result = "abc";
    assertEquals(shuffleString(s, indices), result);
  });

  it("3. should return a string with the characters at the indices shuffled", () => {
    const s = "aiohn";
    const indices = [3, 1, 4, 2, 0];
    const result = "nihao";
    assertEquals(shuffleString(s, indices), result);
  });
});
