function maxLengthDiff(a1: string[], a2: string[]) {
	if (a1.length === 0 || a2.length === 0) return -1

	const a1Lengths = a1.reduce((acc: number[], curr) => {
		acc.push(curr.length)

		return acc
	}, [])

	const a2Lengths = a2.reduce((acc: number[], curr) => {
		acc.push(curr.length)

		return acc
	}, [])

	const a1MaxLength = Math.max(...a1Lengths)
	const a1MinLength = Math.min(...a1Lengths)

	const a2MaxLength = Math.max(...a2Lengths)
	const a2MinLength = Math.min(...a2Lengths)

	const a1MaxMinusA2Min = a1MaxLength - a2MinLength
	const a2MaxMinusA1Min = a2MaxLength - a1MinLength

	return Math.max(a1MaxMinusA2Min, a2MaxMinusA1Min)
}

export { maxLengthDiff }
