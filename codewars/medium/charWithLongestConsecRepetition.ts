function longestRepetition(text: string) {
	if (text === '') return ['', 0]

	const charCountTuples: [string, number][] = []

	let count = 0
	for (let i = 1; i < text.length; i += 1) {
		if (text[i] === text[i - 1]) {
			charCountTuples.push([text[i - 1], (count += 1)])
		} else {
			charCountTuples.push([text[i - 1], (count += 1)])
			count = 0
		}
		if (i === text.length - 1) {
			charCountTuples.push([text[i - 1], (count += 1)])
		}
	}

	return charCountTuples.sort(
		(a: [string, number], b: [string, number]) => b[1] - a[1]
	)[0]
}

export { longestRepetition }
