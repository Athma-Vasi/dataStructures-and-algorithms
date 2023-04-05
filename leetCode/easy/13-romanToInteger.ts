import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

// lmao the optimized solution is so simple (ง ͠ಥ_ಥ)ง

function romanToInteger(s: string): number {
  const regularSymbolsMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  const specialSymbolsMap = new Map([
    // special cases
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
  ]);

  const length = s.length;
  let left = 0;
  let right = 1;
  let resultNum = 0;

  while (right <= length) {
    const leftChar = s[left];
    const rightChar = s[right];

    const specialPair = `${leftChar}${rightChar}`;
    if (specialSymbolsMap.has(specialPair)) {
      resultNum += specialSymbolsMap.get(specialPair) ?? 0;
      left += 2;
      right += 2;
    } else {
      resultNum += regularSymbolsMap.get(leftChar) ?? 0;
      left += 1;
      right += 1;
    }
  }

  return resultNum;
}

describe("romanToInteger", () => {
  it("should return 3", () => {
    assertEquals(romanToInteger("III"), 3);
  });

  it("should return 4", () => {
    assertEquals(romanToInteger("IV"), 4);
  });

  it("should return 9", () => {
    assertEquals(romanToInteger("IX"), 9);
  });

  it("should return 58", () => {
    assertEquals(romanToInteger("LVIII"), 58);
  });

  it("should return 1994", () => {
    assertEquals(romanToInteger("MCMXCIV"), 1994);
  });
});
