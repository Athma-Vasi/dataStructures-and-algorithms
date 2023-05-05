function filterElemFromArr(
  arr: number[],
  fn: (n: number, i: number) => boolean
) {
  return arr.reduce((acc: number[], num, idx) => {
    const val = fn(num, idx);
    val ? acc.push(num) : acc;

    return acc;
  }, []);
}

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n: number, i: number) {
  return n > 10;
};

console.log(filterElemFromArr(arr, fn));
