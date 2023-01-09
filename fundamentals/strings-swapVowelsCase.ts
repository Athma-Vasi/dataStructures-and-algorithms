function swapVowelsCase(str: string) {
	if (str === '') return ''
	if (str === ' ') return ' '

	const vowelsSet = 'aeiouAEIOU'

	return str.split('').reduce((acc, curr) => {
		vowelsSet.includes(curr)
			? curr.toLowerCase() === curr
				? (acc += curr.toUpperCase())
				: (acc += curr.toLowerCase())
			: (acc += curr)

		return acc
	}, '')
}

export { swapVowelsCase }
