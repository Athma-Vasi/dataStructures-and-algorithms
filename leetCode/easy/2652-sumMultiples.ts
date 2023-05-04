import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function sumMultiples(n: number) {
  const divisors: Set<number> = new Set();

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0) divisors.add(i);
    if (i % 5 === 0) divisors.add(i);
    if (i % 7 === 0) divisors.add(i);
  }

  return Array.from(divisors).reduce((total, num) => (total += num), 0);
}

console.log(sumMultiples(15));

export { sumMultiples };

describe("sumMultiples", () => {
  it("1. should return the sum of all multiples of 3, 5, and 7", () => {
    const n = 7;
    assertEquals(sumMultiples(n), 21);
  });

  it("2. should return the sum of all multiples of 3, 5, and 7", () => {
    const n = 10;
    assertEquals(sumMultiples(n), 40);
  });

  it("3. should return the sum of all multiples of 3, 5, and 7", () => {
    const n = 9;
    assertEquals(sumMultiples(n), 30);
  });

  it("3. should return the sum of all multiples of 3, 5, and 7", () => {
    const n = 15;
    assertEquals(sumMultiples(n), 81);
  });
});
