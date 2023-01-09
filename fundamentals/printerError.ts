function printerError(s: string) {
	const correctStrSet = new Set([
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
	])

	const errorTuple = s.split('').reduce(
		(acc: number[], curr, idx) => {
			correctStrSet.has(curr) ? acc : (acc[0] += 1)

			return acc
		},
		[0, s.length]
	)

	return `${errorTuple[0]}/${errorTuple[1]}`
}

export { printerError }
