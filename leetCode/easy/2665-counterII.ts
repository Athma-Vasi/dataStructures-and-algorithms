import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function counterII(init: number): ReturnObj {
  let temp = init;

  const increment = () => {
    temp += 1;
    return temp;
  };
  const decrement = () => {
    temp -= 1;
    return temp;
  };
  const reset = () => {
    temp = init;
    return temp;
  };

  return {
    increment,
    decrement,
    reset,
  };
}

export { counterII };

describe("counterII", () => {
  it("1. should return the correct value", () => {
    const counter = counterII(3);
    assertEquals(counter.increment(), 4);
    assertEquals(counter.increment(), 5);
    assertEquals(counter.decrement(), 4);
    assertEquals(counter.reset(), 3);
  });
});
