import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function validPalindrome(s: string) {
  if (s === " ") return true;

  const alphabetSet = new Set<string>("abcdefghijklmnopqrstuvwxyz");
  const filteredStr = s
    .toLowerCase()
    .split("")
    .filter((str) => alphabetSet.has(str));

  let left = 0;
  let right = filteredStr.length - 1;
  let result = true;

  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) result = false;
    left += 1;
    right -= 1;
  }

  return result;
}

export { validPalindrome };

describe("validPalindrome", () => {
  it("1. should return true if the string is a palindrome", () => {
    const str = "A man, a plan, a canal: Panama";
    assertEquals(validPalindrome(str), true);
  });

  it("2. should return false if the string is not a palindrome", () => {
    const str = "race a car";
    assertEquals(validPalindrome(str), false);
  });

  it("3. should return true if the string is a palindrome", () => {
    const str = " ";
    assertEquals(validPalindrome(str), true);
  });
});
