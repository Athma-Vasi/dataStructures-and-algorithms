import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function lengthOfLastWord(s: string) {
  return s
    .trim()
    .split(" ")
    .map((word) => word.length)
    .at(-1);
}

export { lengthOfLastWord };

describe("lengthOfLastWord", () => {
  it("1. should return 5 when s: Hello World", () => {
    const s = "Hello World";
    assertEquals(lengthOfLastWord(s), 5);
  });

  it("2. should return 1 when s: a ", () => {
    const s = "a ";
    assertEquals(lengthOfLastWord(s), 1);
  });

  it("3. should return 0 when s: ", () => {
    const s = "";
    assertEquals(lengthOfLastWord(s), 0);
  });

  it("4. should return 1 when s: a", () => {
    const s = "a";
    assertEquals(lengthOfLastWord(s), 1);
  });
});
