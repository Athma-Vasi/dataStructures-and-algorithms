function sortNumbers(nums: number[]) {
	return nums.length === 0 ? [] : nums === null ? [] : nums.sort((a, b) => a - b)
}
