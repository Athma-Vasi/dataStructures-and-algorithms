function hungarianVowelHarmony(word: string) {
	const vowels = 'eéiíöőüűaáoóuú'
	const frontVowel = 'eéiíöőüű'
	// const backVowel = 'aáoóuú'

	const consonantsRemoved = word
		.split('')
		.reduce((acc, curr) => (vowels.includes(curr) ? (acc += curr) : acc), '')

	return frontVowel.includes(consonantsRemoved[consonantsRemoved.length - 1])
		? (word += 'nek')
		: (word += 'nak')
}

export { hungarianVowelHarmony }
