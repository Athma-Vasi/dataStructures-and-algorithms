import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function jewelsAndStones(jewels: string, stones: string) {
  return stones.split("").reduce((count, stone) => {
    jewels.includes(stone) ? (count += 1) : count;

    return count;
  }, 0);
}

export { jewelsAndStones };

describe("jewelsAndStones", () => {
  it("1. should return the amount of jewels in the stones", () => {
    const jewels = "aA";
    const stones = "aAAbbbb";

    assertEquals(jewelsAndStones(jewels, stones), 3);
  });

  it("2. should return the amount of jewels in the stones", () => {
    const jewels = "z";
    const stones = "ZZ";

    assertEquals(jewelsAndStones(jewels, stones), 0);
  });
});
