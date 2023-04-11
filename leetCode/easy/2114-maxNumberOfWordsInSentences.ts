import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function maxNumberOfWordsInSentences(sentences: string[]) {
  return Math.max(...sentences.map((sentence) => sentence.split(" ").length));
}

export { maxNumberOfWordsInSentences };

describe("maxNumberOfWordsInSentences", () => {
  it("1. should return the max number of words in a sentence", () => {
    const sentences = ["i love you", "island", "iroman", "i love leetcode"];
    assertEquals(maxNumberOfWordsInSentences(sentences), 3);
  });

  it("2. should return the max number of words in a sentence", () => {
    const sentences = ["hello world", "leetcode"];
    assertEquals(maxNumberOfWordsInSentences(sentences), 2);
  });

  it("3. should return the max number of words in a sentence", () => {
    const sentences = [
      "alice and bob love leetcode",
      "i think so too",
      "this is great thanks very much",
    ];
    assertEquals(maxNumberOfWordsInSentences(sentences), 6);
  });
});
