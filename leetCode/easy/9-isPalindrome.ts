import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function isPalindrome(x: number) {
  if (x < 0) return false;
  if (x < 10) return true;

  const numStr = x.toString();
  const length = numStr.length;
  const mid = Math.floor(length / 2);
  let left = 0;
  let right = length - 1;

  while (left < mid) {
    if (numStr[left] !== numStr[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

export { isPalindrome };

describe("isPalindrome", () => {
  it("should return true if the number is palindrome", () => {
    assertEquals(isPalindrome(121), true);
    assertEquals(isPalindrome(1221), true);
    assertEquals(isPalindrome(12321), true);
    assertEquals(isPalindrome(123321), true);
    assertEquals(isPalindrome(1), true);
    assertEquals(isPalindrome(0), true);
  });

  it("should return false if the number is not palindrome", () => {
    assertEquals(isPalindrome(10), false);
    assertEquals(isPalindrome(123), false);
    assertEquals(isPalindrome(1234), false);
    assertEquals(isPalindrome(-121), false);
  });
});
