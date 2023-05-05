import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

type F = (x: number) => number;

function functionComposition(functions: F[]): F {
  return function (x: number) {
    return functions.reduceRight((acc: number, func: F) => {
      acc = func(acc);

      return acc;
    }, x);
  };
}

export { functionComposition };

describe("functionComposition", () => {
  it("1. should return the function composition", () => {
    const functions = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x,
    ];
    const f = functionComposition(functions);
    assertEquals(f(0), 1);
  });

  it("2. should return the function composition", () => {
    const functions = [
      (x: number) => x + 5,
      (x: number) => x * 2,
      (x: number) => x / 2,
      (x: number) => x - 1,
    ];
    const f = functionComposition(functions);
    assertEquals(f(3), 7);
  });

  it("3. should return the function composition", () => {
    const functions = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x,
    ];
    const f = functionComposition(functions);
    assertEquals(f(2), 17);
  });
});
