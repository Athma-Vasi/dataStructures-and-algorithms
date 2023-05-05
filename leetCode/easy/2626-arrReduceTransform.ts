type Fn = (acc: number, curr: number) => number;

function arrReduceTransform(nums: number[], fn: Fn, init: number) {
  let val = init;

  for (const num of nums) val = fn(val, num);

  return val;
}

const nums = [1, 2, 3, 4];
const fn = function sum(acc: number, curr: number) {
  return acc + curr;
};
const init = 0;

console.log(arrReduceTransform(nums, fn, init));
