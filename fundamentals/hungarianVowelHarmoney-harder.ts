function hungarianVowelHarmonyHarder(word: string) {
	const frontVowels = 'eéiíöőüű'
	const backVowels = 'aáoóuú'
	const allVowels = 'eéiíöőüűaáoóuú'
	const digraphs = ['sz', 'zs', 'cs']
	const vowelPairs = new Map([
		['a', 'á'],
		['e', 'é'],
		['i', 'í'],
		['o', 'ó'],
		['u', 'ú'],
		['ö', 'ő'],
		['ü', 'ű'],
	])

	let result = ''

	if (allVowels.includes(word[word.length - 1])) {
		const wordArr = word.split('')
		const lastChar = wordArr[wordArr.length - 1]
		const modifiedLastChar = vowelPairs.get(lastChar) ?? lastChar

		if (modifiedLastChar === lastChar) {
			frontVowels.includes(lastChar) ? wordArr.push('vel') : wordArr.push('val')
		} else {
			wordArr[wordArr.length - 1] = modifiedLastChar
			frontVowels.includes(modifiedLastChar) ? wordArr.push('vel') : wordArr.push('val')
		}

		result = wordArr.join('')
	} else {
		const lastTwoChars = word
			.split('')
			.slice(word.length - 2)
			.join('')

		const onlyVowels = word
			.split('')
			.reduce((acc: string, curr) => (allVowels.includes(curr) ? (acc += curr) : acc), '')

		const isLastVowelAFront = frontVowels.includes(onlyVowels[onlyVowels.length - 1])

		const wordMinusLastChars = digraphs.includes(lastTwoChars)
			? word.slice(0, -2)
			: word.slice(0, -1)

		const modifiedLastTwoChars = digraphs.includes(lastTwoChars)
			? lastTwoChars[0].repeat(2) + lastTwoChars[1]
			: lastTwoChars[1].repeat(2)

		result = isLastVowelAFront
			? wordMinusLastChars + modifiedLastTwoChars + 'el'
			: wordMinusLastChars + modifiedLastTwoChars + 'al'
	}

	return result
}

export { hungarianVowelHarmonyHarder }
