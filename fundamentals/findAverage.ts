function findAverage(array: number[]): number {
	if (array.length === 0) return 0

	const sum = array.reduce((acc, curr) => {
		acc += curr

		return acc
	}, 0)

	return sum / array.length
}

export { findAverage }
