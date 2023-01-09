//fails tests with unknown args
//also test case explicitly contradicts statement that only lowercase
//vowels are included

function vowelShifting(text: string | null, n: number) {
	if (text === null) return null
	if (text === '') return ''

	const vowels = 'aeiou'

	const [vowelsText, vowelsIdxs] = text?.split('').reduce(
		(acc: [string[], number[]], curr, idx) => {
			if (vowels.includes(curr)) {
				acc[0].push(curr)
				acc[1].push(idx)
			}

			return acc
		},
		[[], []]
	) as [string[], number[]]

	let vowelsShifted: string[] = []

	if (n > 0) {
		const spliced = vowelsText.splice(vowelsText.length - n, n)
		vowelsText.unshift(spliced.join(''))
		vowelsShifted = vowelsText.join('').split('')
	} else {
		const spliced = vowelsText.splice(0, n)
		vowelsText.push(spliced.join(''))
		vowelsShifted = vowelsText.join('').split('')
	}

	const idxsShiftedVowels = vowelsIdxs.reduce((acc: Map<number, string>, curr, idx) => {
		acc.set(curr, vowelsShifted[idx])

		return acc
	}, new Map())

	return text
		?.split('')
		.reduce((acc: string[], curr, idx) => {
			vowels.includes(curr) ? acc.push(idxsShiftedVowels.get(idx) ?? '') : acc.push(curr)

			return acc
		}, [])
		.join('')
}

export { vowelShifting }
