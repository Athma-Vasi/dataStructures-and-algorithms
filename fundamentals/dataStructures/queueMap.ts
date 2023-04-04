import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

class QueueMap<T> {
  constructor(
    private data: Map<number, T> = new Map(),
    private head = 0,
    private tail = 0
  ) {}

  get length(): number {
    return this.data.size;
  }

  get getfirstItem(): T | undefined {
    return this.data.get(this.head);
  }

  get getlastItem(): T | undefined {
    return this.data.get(this.tail - 1);
  }

  get isEmpty(): boolean {
    return this.data.size === 0;
  }

  get toString(): string {
    return JSON.stringify(Array.from(this.data.values()));
  }

  enqueue(item: T): void {
    this.data.set(this.tail, item);
    this.tail += 1;
  }

  dequeue(): T | undefined {
    const removedItem = this.data.get(this.head);
    this.data.delete(this.head);
    this.head += 1;
    return removedItem;
  }
}

describe("QueueMap", () => {
  let queue: QueueMap<unknown>;
  queue = new QueueMap();

  beforeEach(() => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  });

  afterEach(() => {
    queue = new QueueMap();
  });

  it("should have a length property", () => {
    assertEquals(queue.length, 3);
  });

  it("should have a getfirstItem property", () => {
    assertEquals(queue.getfirstItem, 1);
  });

  it("should have a getlastItem property", () => {
    assertEquals(queue.getlastItem, 3);
  });

  it("should have an isEmpty property", () => {
    assertEquals(queue.isEmpty, false);
  });

  it("should have an enqueue method", () => {
    queue.enqueue(4);
    assertEquals(queue.length, 4);
  });

  it("should have a dequeue method", () => {
    queue.dequeue();
    assertEquals(queue.length, 2);
  });

  it('should have a "first in, first out" behavior', () => {
    assertEquals(queue.dequeue(), 1);
    assertEquals(queue.dequeue(), 2);
    assertEquals(queue.dequeue(), 3);
    assertEquals(queue.dequeue(), undefined);
  });

  it("should have a peek method", () => {
    assertEquals(queue.getfirstItem, 1);
  });

  it("should have a tail method", () => {
    assertEquals(queue.getlastItem, 3);
  });

  it("should have a size method", () => {
    assertEquals(queue.length, 3);
  });

  it("should have a isEmpty method", () => {
    assertEquals(queue.isEmpty, false);
  });

  it("should have a toString method", () => {
    assertEquals(queue.toString, "[1,2,3]");
  });

  it("should correctly stringify objects passed in", () => {
    queue = new QueueMap();
    queue.enqueue({ a: 1 });
    queue.enqueue({ b: 2 });
    queue.enqueue({ c: 3 });
    assertEquals(queue.toString, '[{"a":1},{"b":2},{"c":3}]');
  });
});
