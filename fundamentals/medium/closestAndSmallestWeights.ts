//cant figure out the logic of the sorting...

function closestAndSmallestWeights(str: string) {
  if (str === "") return [];

  const weightsMap = str
    .split(" ")
    .reduce((acc: Map<string, [number, number]>, curr, idx) => {
      const weight = curr
        .split("")
        .reduce((acc, curr) => (acc += Number(curr)), 0);
      acc.set(curr, [weight, idx]);

      return acc;
    }, new Map());

  const sortedWeightsAndIdxs = Object.entries(
    Object.fromEntries(weightsMap)
  ).sort((a: [string, [number, number]], b: [string, [number, number]]) => {
    return a[1][0] === b[1][0] ? a[1][1] - b[1][1] : a[1][0] - b[1][0];
  });

  const sortedWeightDiffs: Map<string, number[]> = new Map();
  for (let i = 1; i < sortedWeightsAndIdxs.length; i += 1) {
    const diffs = Math.abs(
      sortedWeightsAndIdxs[i - 1][1][0] - sortedWeightsAndIdxs[i][1][0]
    );
    const num = sortedWeightsAndIdxs[i - 1][0];
    const weights = sortedWeightsAndIdxs[i - 1][1][0];
    const idxs = sortedWeightsAndIdxs[i - 1][1][1];

    sortedWeightDiffs.set(num, [weights, idxs, diffs]);
  }

  return Object.entries(Object.fromEntries(sortedWeightDiffs))
    .sort((a: [string, number[]], b: [string, number[]]) => {
      return a[1][0] - b[1][0]; // only here to remove error
    })
    .slice(0, 2)
    .reduce(
      (acc: number[][], curr: [string, number[]], idx) => {
        acc[idx].push(curr[1][0]);
        acc[idx].push(curr[1][1]);
        acc[idx].push(Number(curr[0]));

        return acc;
      },
      [[], []]
    );
}

console.log(closestAndSmallestWeights("103 123 4444 99 2000"));
//[[2, 4, 2000], [4, 0, 103]]

console.log(closestAndSmallestWeights("80 71 62 53"));
//[[8, 0, 80], [8, 1, 71]]

console.log(
  closestAndSmallestWeights(
    "456899 50 11992 176 272293 163 389128 96 290193 85 52"
  )
); //[[13, 9, 85], [14, 3, 176]]

console.log(
  closestAndSmallestWeights(
    "239382 162 254765 182 485944 134 468751 62 49780 108 54"
  )
);
//[[8, 5, 134], [8, 7, 62]]

console.log(
  closestAndSmallestWeights(
    "241259 154 155206 194 180502 147 300751 200 406683 37 57"
  )
);
//[[10, 1, 154], [10, 9, 37]]

console.log(
  closestAndSmallestWeights(
    "89998 187 126159 175 338292 89 39962 145 394230 167 1"
  )
);
//[[13, 3, 175], [14, 9, 167]]
