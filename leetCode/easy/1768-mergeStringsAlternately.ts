import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function mergeStringsAlternately(word1: string, word2: string) {
  const len1 = word1.length;
  const len2 = word2.length;

  let idx1 = 0;
  let idx2 = 0;
  let result = "";

  while (idx1 < len1 && idx2 < len2) {
    result += word1[idx1];
    result += word2[idx2];

    idx1 += 1;
    idx2 += 1;
  }

  len1 < len2
    ? (result += word2.slice(idx2))
    : len2 < len1
    ? (result += word1.slice(idx1))
    : result;

  return result;
}

export { mergeStringsAlternately };

describe("mergeStringsAlternately", () => {
  it("1. should merge strings alternately", () => {
    const word1 = "abc";
    const word2 = "pqr";
    assertEquals(mergeStringsAlternately(word1, word2), "apbqcr");
  });

  it("2. should merge strings alternately", () => {
    const word1 = "ab";
    const word2 = "pqrs";
    assertEquals(mergeStringsAlternately(word1, word2), "apbqrs");
  });

  it("3. should merge strings alternately", () => {
    const word1 = "abcd";
    const word2 = "pq";
    assertEquals(mergeStringsAlternately(word1, word2), "apbqcd");
  });
});
