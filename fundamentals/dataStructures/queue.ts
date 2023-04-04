import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

class Queue<T> {
  private data: T[];
  private frontIndex = 0;
  private backIndex = 0;
  private length = 0;

  constructor(data: T[] = []) {
    this.data = data;
    this.backIndex = data.length;
    this.length = data.length;
  }

  get size() {
    return this.length;
  }

  get peek(): T | undefined {
    return this.data[this.frontIndex];
  }

  get tail(): T | undefined {
    return this.data[this.backIndex - 1];
  }

  enqueue(item: T): void {
    this.data.push(item);
    this.backIndex += 1;
    this.length += 1;
  }

  dequeue(): T | undefined {
    this.backIndex -= 1;
    this.length -= 1;
    return this.data.shift();
  }
}

describe("Queue", () => {
  let queue: Queue<unknown>;

  beforeEach(() => {
    queue = new Queue([1, 2, 3]);
  });

  afterEach(() => {
    queue = new Queue();
  });

  it("should have a size property", () => {
    assertEquals(queue.size, 3);
  });

  it("should have a peek property", () => {
    assertEquals(queue.peek, 1);
  });

  it("should have a tail property", () => {
    assertEquals(queue.tail, 3);
  });

  it("should have an enqueue method", () => {
    queue.enqueue(4);
    assertEquals(queue.size, 4);
    assertEquals(queue.tail, 4);
  });

  it("should have a dequeue method", () => {
    queue.dequeue();
    assertEquals(queue.size, 2);
    assertEquals(queue.peek, 2);
  });

  it("should have a default constructor", () => {
    queue = new Queue();
    assertEquals(queue.size, 0);
  });

  it("should have a constructor that takes an array", () => {
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array with a single item", () => {
    queue = new Queue([1]);
    assertEquals(queue.size, 1);
  });

  it("should have a constructor that takes an empty array", () => {
    queue = new Queue([]);
    assertEquals(queue.size, 0);
  });

  it("should have a constructor that takes no arguments", () => {
    queue = new Queue();
    assertEquals(queue.size, 0);
  });

  it("should have a constructor that takes an array of strings", () => {
    queue = new Queue(["a", "b", "c"]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of objects", () => {
    queue = new Queue([{ a: 1 }, { b: 2 }, { c: 3 }]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of arrays", () => {
    queue = new Queue([[1], [2], [3]]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of functions", () => {
    queue = new Queue([() => 1, () => 2, () => 3]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of booleans", () => {
    queue = new Queue([true, false, true]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of nulls", () => {
    queue = new Queue([null, null, null]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of undefineds", () => {
    queue = new Queue([undefined, undefined, undefined]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of NaNs", () => {
    queue = new Queue([NaN, NaN, NaN]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of Infinity", () => {
    queue = new Queue([Infinity, Infinity, Infinity]);
    assertEquals(queue.size, 3);
  });

  it("should have a constructor that takes an array of -Infinity", () => {
    queue = new Queue([-Infinity, -Infinity, -Infinity]);
    assertEquals(queue.size, 3);
  });
});
