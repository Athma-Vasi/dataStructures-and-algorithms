import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let charIdx = 0;
  let commonSet = new Set<string>();
  const commonChars: string[] = [];

  // find the min length of arr to use as the loop limit
  const minLength = Math.min(...strs.map((str) => str.length));

  // amount of times to keep looping through strs
  let arrLoop = 0;

  while (arrLoop < minLength) {
    // loop through strs and add each char to the set
    strs.forEach((str) => {
      const char = str[charIdx];
      commonSet.add(char);
    });

    // if set length === 1 there is a common prefix and is added to the commonChars array
    if (commonSet.size === 1) {
      commonChars.push(Array.from(commonSet.values())[0]);
    } else commonChars.push(" ");

    // reset set and increment charIdx and arrLoop
    commonSet = new Set<string>();
    charIdx += 1;
    arrLoop += 1;
  }

  // if the first char is a space, then no common prefix
  return commonChars[0] === " "
    ? ""
    : commonChars.join("").trim().split(" ")[0];
}

export { longestCommonPrefix };

// console.log(longestCommonPrefix(["aca", "cba"]));

describe("longestCommonPrefix", () => {
  it("1. should return the longest common prefix", () => {
    const strs = ["flower", "flow", "flight"];
    assertEquals(longestCommonPrefix(strs), "fl");
  });

  it("2. should return the longest common prefix", () => {
    const strs = ["dog", "racecar", "car"];
    assertEquals(longestCommonPrefix(strs), "");
  });

  it("3. should return the longest common prefix", () => {
    const strs = ["dog", "dog", "dog"];
    assertEquals(longestCommonPrefix(strs), "dog");
  });

  it("4. should return the longest common prefix", () => {
    const strs = ["dog"];
    assertEquals(longestCommonPrefix(strs), "dog");
  });

  it("5. should return the longest common prefix", () => {
    const strs = ["cir", "car"];
    assertEquals(longestCommonPrefix(strs), "c");
  });

  it("6. should return the longest common prefix", () => {
    const strs = ["aca", "cba"];
    assertEquals(longestCommonPrefix(strs), "");
  });

  it("7. should return the longest common prefix", () => {
    const strs = ["a"];
    assertEquals(longestCommonPrefix(strs), "a");
  });

  it("8. should return the longest common prefix", () => {
    const strs = ["ab", "a"];
    assertEquals(longestCommonPrefix(strs), "a");
  });

  it("9. should return the longest common prefix", () => {
    const strs = ["babb", "caa"];
    assertEquals(longestCommonPrefix(strs), "");
  });
});
