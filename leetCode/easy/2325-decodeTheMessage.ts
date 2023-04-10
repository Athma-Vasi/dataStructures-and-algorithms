import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function decodeTheMessage(key: string, message: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sanitizedKeys = new Set(key.split(" ").join("").split(""));

  const cypherPad = Array.from(sanitizedKeys).reduce(
    (pad: Map<string, string>, key, idx) => {
      const decryptVal = alphabet[idx];
      // only add to pad if key is not already present
      if (!pad.has(key)) pad.set(key, decryptVal);

      return pad;
    },
    new Map()
  );

  return message
    .split("")
    .reduce((decrypted: string[], char) => {
      decrypted.push(cypherPad.get(char) ?? " ");

      return decrypted;
    }, [])
    .join("");
}

export { decodeTheMessage };

describe("decodeTheMessage", () => {
  it("1. should return the decoded message", () => {
    const key = "the quick brown fox jumps over the lazy dog";
    const message = "vkbs bs t suepuv";
    const output = "this is a secret";
    assertEquals(decodeTheMessage(key, message), output);
  });

  it("2. should return the decoded message", () => {
    const key = "eljuxhpwnyrdgtqkviszcfmabo";
    const message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";
    const output = "the five boxing wizards jump quickly";
    assertEquals(decodeTheMessage(key, message), output);
  });
});
