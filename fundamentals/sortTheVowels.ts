function sortTheVowels(str?: number | string | null) {
	if (typeof str === 'number' || typeof str === 'undefined' || str === null) return ''

	const vowels = 'aeiou'

	return str
		.split('')
		.reduce((acc: string[], curr) => {
			if (vowels.includes(curr.toLowerCase())) {
				acc.push('|')
				acc.push(curr)
				acc.push('\n')
			} else {
				acc.push(curr)
				acc.push('|')
				acc.push('\n')
			}

			return acc
		}, [])
		.slice(0, -1)
		.join('')
}

export { sortTheVowels }
