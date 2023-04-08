function incrementer(nums: number[]) {
	return nums.map((num, idx) =>
		num + idx + 1 > 9
			? Number((num + idx + 1).toString()[(num + idx + 1).toString().length - 1])
			: num + idx + 1
	)
}

export { incrementer }
