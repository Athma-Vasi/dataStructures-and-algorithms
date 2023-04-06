import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function idxOfFirstOccurInStr(haystack: string, needle: string): number {
  const hayLen = haystack.length;
  const needleLen = needle.length;

  if (needleLen === 0) return 0;
  if (hayLen < needleLen) return -1;
  if (hayLen === needleLen) return haystack === needle ? 0 : -1;

  let hayIdx = 0;
  let needleIdx = 0;

  while (hayIdx < hayLen && needleIdx < needleLen) {
    const char1 = haystack[hayIdx + needleIdx];
    const char2 = needle[needleIdx];

    if (char1 === char2) needleIdx += 1;
    else {
      hayIdx += 1;
      needleIdx = 0;
    }
  }

  return needleIdx === needleLen ? hayIdx : -1;
}

console.log(idxOfFirstOccurInStr("mississippi", "issip"));
console.log(idxOfFirstOccurInStr("misississippi", "sissip"));

describe("idxOfFirstOccurInStr", () => {
  it("1. should return 2 when haystack: hello, needle: ll", () => {
    const haystack = "hello";
    const needle = "ll";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), 2);
  });

  it("2. should return 0 when haystack: sadbutsad, needle: sad", () => {
    const haystack = "sadbutsad";
    const needle = "sad";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), 0);
  });

  it("3. should return -1 when haystack: leetcode, needle: leeto", () => {
    const haystack = "leetcode";
    const needle = "leeto";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), -1);
  });

  it("4. should return 0 when haystack: a, needle: a", () => {
    const haystack = "a";
    const needle = "a";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), 0);
  });

  it("5. should return -1 when haystack: a, needle: b", () => {
    const haystack = "a";
    const needle = "b";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), -1);
  });

  it("6. should return 0 when haystack: a, needle: ''", () => {
    const haystack = "a";
    const needle = "";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), 0);
  });

  it("7. should return -1 when haystack: '', needle: a", () => {
    const haystack = "";
    const needle = "a";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), -1);
  });

  it("8. should return 0 when haystack: '', needle: ''", () => {
    const haystack = "";
    const needle = "";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), 0);
  });

  it("9. should return 0 when haystack: 'mississippi', needle: 'issip'", () => {
    const haystack = "mississippi";
    const needle = "issip";
    assertEquals(idxOfFirstOccurInStr(haystack, needle), 4);
  });
});

/**
 * 
 * below is my original algo - was unable to make it work, above is not my own
  
let left = 0;
  let right = 0;
  let leftNeedle = 0;
  const needleLen = needleLen;
  const haystackLen = hayLen;

  if (needleLen === 0) return 0;
  if (needleLen > haystackLen) return -1;
  if (needleLen === haystackLen) return haystack === needle ? 0 : -1;

  const resultIdx: number[] = [];

  while (left < haystackLen && right < haystackLen) {
    if (haystack[right] !== needle[leftNeedle]) {
      if (right - left === needleLen) resultIdx.push(left);

      right += 1;
      left = leftNeedle;
      leftNeedle = 0;
    } else {
      if (right === haystackLen - 1 && leftNeedle === needleLen - 1) {
        resultIdx.push(left);
        break;
      }

      right += 1;
      leftNeedle += 1;
    }
  }

  return resultIdx.length === 0 ? -1 : resultIdx[0];

 */
