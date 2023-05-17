import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.182.0/testing/bdd.ts";

function chunkArray<T>(arr: T[], size: number): Array<T[]> {
  let chunk: T[] = [];
  let count = 0;

  return arr.reduce((chunks: Array<T[]>, elem: T, idx) => {
    if (count < size) {
      chunk.push(elem);
      count += 1;
    } else if (count === size) {
      chunks.push(chunk);
      chunk = [];
      chunk.push(elem);
      count = 1;
    }

    if (idx === arr.length - 1) chunks.push(chunk);

    return chunks;
  }, []);
}

export { chunkArray };

describe("chunkArray", () => {
  it("1. should return an array of arrays", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    assertEquals(chunkArray(arr, size), [[1, 2, 3], [4, 5, 6], [7]]);
  });

  it("2. should return an array of arrays", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    assertEquals(chunkArray(arr, size), [[1, 2], [3, 4], [5]]);
  });

  it("3. should return an array of arrays", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 1;
    assertEquals(chunkArray(arr, size), [[1], [2], [3], [4], [5]]);
  });

  it("4. should return an array of arrays", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 10;
    assertEquals(chunkArray(arr, size), [[1, 2, 3, 4, 5]]);
  });
});
