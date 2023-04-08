function largestPairSumInArray(numbers: number[]) {
	const pairSums: number[] = []

	for (let i = 0; i < numbers.length - 1; i += 1) {
		for (let j = i + 1; j < numbers.length; j += 1) {
			pairSums.push(numbers[i] + numbers[j])
		}
	}

	return Math.max(...pairSums)
}
export { largestPairSumInArray }
