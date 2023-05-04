function maxSumWithKElements(nums: number[], k: number) {
  let max = Math.max(...nums);
  let maxSum = 0;

  for (let i = 0; i < k; i += 1) {
    maxSum += max;
    max += 1;
  }

  return maxSum;
}
