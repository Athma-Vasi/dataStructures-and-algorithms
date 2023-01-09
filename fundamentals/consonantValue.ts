function consonantValue(s: string) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	const vowelsSet: Set<string> = new Set(['a', 'e', 'i', 'o', 'u'])

	const alphabetsMap: Map<string, number> = alphabets
		.split('')
		.reduce((acc: Map<string, number>, curr, idx) => {
			acc.set(curr, idx + 1)

			return acc
		}, new Map())

	const vowelIndexes: number[] = []
	s.split('').forEach((val, idx) =>
		vowelsSet.has(val) ? vowelIndexes.push(idx) : vowelIndexes
	)

	let highestScore = 0
	s.split('').reduce((acc, curr, idx) => {
		if (!vowelIndexes.includes(idx)) {
			acc += alphabetsMap.get(curr) ?? -Infinity

			if (highestScore < acc) highestScore = acc
		} else {
			acc = 0
		}

		return acc
	}, 0)

	return highestScore
}

export { consonantValue }
