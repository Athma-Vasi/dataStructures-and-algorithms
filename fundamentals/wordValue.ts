function wordValue(arr: string[]) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetsMap = alphabets
		.split('')
		.reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map())

	return arr.reduce((acc: number[], curr, idx) => {
		let temp = 0

		curr
			.toLowerCase()
			.split('')
			.forEach((value) => (temp += value === ' ' ? 0 : alphabetsMap.get(value)))

		temp *= idx + 1
		acc.push(temp)

		return acc
	}, [])
}

export { wordValue }
