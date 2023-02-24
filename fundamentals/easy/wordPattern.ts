function wordPattern(word: string) {
	const charSetArr: Array<string> = Array.from(new Set(word.toLowerCase()))

	const charMap = charSetArr.reduceRight((acc: Map<string, number>, curr, idx) => {
		acc.set(curr, idx)

		return acc
	}, new Map())

	return word
		.toLowerCase()
		.split('')
		.reduce((acc: number[], curr) => {
			const hasValue = charMap.get(curr) ?? Infinity
			acc.push(hasValue)

			return acc
		}, [])
		.join('.')
}

export { wordPattern }
