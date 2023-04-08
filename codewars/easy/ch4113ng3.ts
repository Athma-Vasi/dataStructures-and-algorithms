function ch4113ng3(txt: string) {
	const nerdyChars = new Map([
		['a', '4'],
		['A', '4'],
		['e', '3'],
		['E', '3'],
		['l', '1'],
	])

	return txt
		.split('')
		.reduce((acc: string[], curr) => {
			acc.push(nerdyChars.get(curr) ?? curr)

			return acc
		}, [])
		.join('')
}

export { ch4113ng3 }
