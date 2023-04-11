import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function finalValueAfterOperations(operations: string[]) {
  const operationsTable = new Map<string, number>([
    ["++X", 1],
    ["X++", 1],
    ["--X", -1],
    ["X--", -1],
  ]);

  return operations.reduce((result, oper) => {
    result += operationsTable.get(oper) ?? 0;

    return result;
  }, 0);
}

export { finalValueAfterOperations };

describe("finalValueAfterOperations", () => {
  it("1. should return the final value after all operations", () => {
    const operations = ["--X", "X++", "X++"];
    assertEquals(finalValueAfterOperations(operations), 1);
  });

  it("2. should return the final value after all operations", () => {
    const operations = ["++X", "++X", "X++"];
    assertEquals(finalValueAfterOperations(operations), 3);
  });

  it("3. should return the final value after all operations", () => {
    const operations = ["X++", "++X", "--X", "X--"];
    assertEquals(finalValueAfterOperations(operations), 0);
  });
});
