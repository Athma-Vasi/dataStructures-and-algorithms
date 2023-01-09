function vowelRemover(string: string) {
	const vowels = 'aeiou'
	return string
		.split('')
		.reduce((acc, curr) => (vowels.includes(curr) ? acc : (acc += curr)), '')
}

export { vowelRemover }
