function findTheVowels(word: string) {
	//y is y a vowel? sus
	const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'y'])

	return word
		.toLowerCase()
		.split('')
		.reduce((acc: number[], curr, idx) => {
			vowelsSet.has(curr) ? acc.push(idx + 1) : acc

			return acc
		}, [])
}

export { findTheVowels }
