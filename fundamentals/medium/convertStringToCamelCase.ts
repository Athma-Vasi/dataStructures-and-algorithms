function toCamelCase(str: string) {
	const strArr = str.includes('-')
		? str.split('-')
		: str.includes('_')
		? str.split('_')
		: str.split(' ')

	return strArr
		.reduce((acc: string[], word, wordIdx) => {
			const camelCased = word.split('').reduce((acc, char, charIdx) => {
				wordIdx === 0 && charIdx === 0 && char === char.toUpperCase()
					? (acc += char)
					: wordIdx !== 0 && charIdx === 0
					? (acc += char.toUpperCase())
					: (acc += char)

				return acc
			}, '')

			acc.push(camelCased)

			return acc
		}, [])
		.join('')
}

export { toCamelCase }
