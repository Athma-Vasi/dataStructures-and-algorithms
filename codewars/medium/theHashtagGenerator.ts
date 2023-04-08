function generateHashtag(str: string) {
	if (str === '') return false
	if (
		str
			.split('')
			.map((val) => val === ' ')
			.filter((val) => val === true).length === str.length
	)
		return false

	const hashTagged = str
		.split(' ')
		.reduce(
			(acc: string[], word) => {
				if (word !== '') {
					const firstCharCapitalized = word[0].toUpperCase()
					const [_, ...rest] = word.split('')
					const wordCapitalized = `${firstCharCapitalized}${rest.join('')}`
					acc.push(wordCapitalized)
				}

				return acc
			},
			['#']
		)
		.join('')

	return hashTagged.length > 140 ? false : hashTagged
}

export { generateHashtag }
