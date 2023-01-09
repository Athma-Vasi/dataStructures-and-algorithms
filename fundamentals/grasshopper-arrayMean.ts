function arrayMean(nums: number[]) {
	const total = nums.reduce((acc, curr) => (acc += curr), 0)
	return total / nums.length
}

export { arrayMean }
