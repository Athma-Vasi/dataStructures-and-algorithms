function squareSum(numbers: number[]): number {
	return numbers.reduce((acc, curr) => {
		acc += curr * curr

		return acc
	}, 0)
}

export { squareSum }
