function sentenceSmash(words: string[]) {
	return words
		.reduce((acc, curr) => {
			acc += curr
			acc += ' '

			return acc
		}, '')
		.split('')
		.slice(0, -1)
		.join('')
}

export { sentenceSmash }
