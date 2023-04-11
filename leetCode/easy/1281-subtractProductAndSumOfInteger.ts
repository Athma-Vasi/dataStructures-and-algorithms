import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function subtractProductAndSumOfInteger(n: number) {
  const nStrArr = n.toString().split("");
  const product = nStrArr.reduce((prod, num) => (prod *= parseInt(num)), 1);
  const sum = nStrArr.reduce((total, num) => (total += parseInt(num)), 0);

  return product - sum;
}

export { subtractProductAndSumOfInteger };

describe("subtractProductAndSumOfInteger", () => {
  it("1. should return the difference between the product and sum of the digits of the integer", () => {
    const n = 234;
    assertEquals(subtractProductAndSumOfInteger(n), 15);
  });

  it("2. should return the difference between the product and sum of the digits of the integer", () => {
    const n = 4421;
    assertEquals(subtractProductAndSumOfInteger(n), 21);
  });
});
