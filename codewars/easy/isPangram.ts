function isPangram(phrase: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	const phraseArr = phrase.toLowerCase().replace(/\s+/g, '').replace('.', '').split('')

	return alphabet.split('').reduce((acc, curr) => {
		if (acc === false) return acc

		phraseArr.includes(curr) ? (acc = true) : (acc = false)

		return acc
	}, true)
}

export { isPangram }
