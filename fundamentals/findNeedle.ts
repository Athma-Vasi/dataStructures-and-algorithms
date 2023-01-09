function findNeedle(haystack: unknown[]) {
	const result = haystack.reduce((acc, curr, idx) => {
		curr === 'needle' ? (acc = idx) : acc

		return acc
	}, 0)

	return `found the needle at position ${result}`
}

export { findNeedle }
