function duplicateEncode(word: string) {
	if (word === '') return ''

	const wordArr = word.toLowerCase().split('')

	const wordSet: Set<string> = new Set(wordArr)
	const wordMap: Map<string, number> = new Map()

	wordArr.forEach((value, _) => {
		let mapValue = wordMap.get(value) ?? 0
		wordSet.has(value) ? wordMap.set(value, (mapValue += 1)) : value
	})

	return wordArr.reduce((acc, curr) => {
		acc += wordMap.get(curr) === 1 ? '(' : ')'

		return acc
	}, '')
}

export { duplicateEncode }
