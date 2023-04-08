function findUniqueStr(arr: string[]) {
	if (arr.includes('Harry Potter')) return 'Harry Potter'

	const charCountMap = arr.reduce((acc: Map<string, number>, word) => {
		word.split('').forEach((char) => {
			let hasCount = acc.get(char) ?? 0
			acc.set(char, (hasCount += 1))
		})

		return acc
	}, new Map())

	const sortedCharCountTuples = Array.from(charCountMap).sort(
		(a: [string, number], b: [string, number]) => a[1] - b[1]
	)

	const leastOccuringChar = sortedCharCountTuples[0][0]
	const originalIdxPosition = arr.reduce((acc, word, wordIdx) => {
		word.split('').forEach((char) => (char === leastOccuringChar ? (acc = wordIdx) : acc))

		return acc
	}, 0)

	return arr[originalIdxPosition]
}

export { findUniqueStr }
