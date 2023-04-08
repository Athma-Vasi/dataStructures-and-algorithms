import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

function decompressRLEncoded(nums: number[]) {
  let left = 0;
  let right = 1;
  const numsLen = nums.length;
  const decoded: number[] = [];

  while (right < numsLen && left < right) {
    const freq = nums[left];
    const val = nums[right];

    for (let i = 0; i < freq; i += 1) decoded.push(val);

    left += 2;
    right += 2;
  }

  return decoded;
}

export { decompressRLEncoded };

describe("decompressRLEncoded", () => {
  it("1. should return the decompressed array", () => {
    const nums = [1, 2, 3, 4];
    assertEquals(decompressRLEncoded(nums), [2, 4, 4, 4]);
  });

  it("2. should return the decompressed array", () => {
    const nums = [1, 1, 2, 3];
    assertEquals(decompressRLEncoded(nums), [1, 3, 3]);
  });

  it("3. should return the decompressed array", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    assertEquals(
      decompressRLEncoded(nums),
      [2, 4, 4, 4, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8]
    );
  });
});
