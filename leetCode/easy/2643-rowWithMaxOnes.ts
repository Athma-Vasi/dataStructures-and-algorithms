function rowWithMaxOnes(mat: number[][]) {
  return mat.reduce(
    (result: [number, number], row: number[], rowIdx) => {
      const oneCount = row.reduce((count, elem) => {
        elem === 1 ? (count += 1) : count;

        return count;
      }, 0);

      if (oneCount > result[1]) {
        result[0] = rowIdx;
        result[1] = oneCount;
      }

      return result;
    },
    [0, Number.MIN_SAFE_INTEGER]
  );
}

export { rowWithMaxOnes };
