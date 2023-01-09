function searchForLetters(string: string) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'

	const result: string[] = []

	alphabets
		.split('')
		.forEach((val) =>
			string.toLowerCase().includes(val) ? result.push('1') : result.push('0')
		)

	return result.join('')
}

export { searchForLetters }
