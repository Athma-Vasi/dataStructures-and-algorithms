function sortArrByParity(nums: number[]) {
  return nums
    .reduce(
      (acc: [number[], number[]], num) => {
        num % 2 === 0 ? acc[0].push(num) : acc[1].push(num);

        return acc;
      },
      [[], []]
    )
    .flat();
}
