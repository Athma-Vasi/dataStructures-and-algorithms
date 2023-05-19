class ArrayWrapper {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  private valueOf() {
    return this.nums.reduce((total, num) => (total += num), 0);
  }

  private toString() {
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log({
  obj1,
  obj2,
});

// console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));
