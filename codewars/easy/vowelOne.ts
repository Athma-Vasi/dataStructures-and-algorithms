function vowelOne(s: string) {
	const vowels = 'aeiou'

	return s
		.split('')
		.reduce(
			(acc, char) => (vowels.includes(char.toLowerCase()) ? (acc += '1') : (acc += '0')),
			''
		)
}

export { vowelOne }
