function positiveSum(arr: number[]) {
	return arr.reduce((acc, curr) => {
		curr > 0 ? (acc += curr) : acc

		return acc
	}, 0)
}

export { positiveSum }
