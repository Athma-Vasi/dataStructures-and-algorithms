function maximumGap(nums: number[]) {
	const sortedNums = nums.sort((a, b) => a - b)

	const diff: number[] = []
	for (let i = 0; i < nums.length - 1; i += 1) {
		diff.push(Math.abs(sortedNums[i] - sortedNums[i + 1]))
	}

	return Math.max(...diff)
}

export { maximumGap }
