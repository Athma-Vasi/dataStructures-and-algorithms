function applyTransformOverEachElemInArr(
  arr: number[],
  fn: (n: number, i: number) => number
) {
  return arr.reduce((acc: number[], num, idx) => {
    acc[idx] = fn(num, idx);

    return acc;
  }, Array.from({ length: arr.length }) as number[]);
}

console.log(Array.from({ length: 5 }));

export { applyTransformOverEachElemInArr };
