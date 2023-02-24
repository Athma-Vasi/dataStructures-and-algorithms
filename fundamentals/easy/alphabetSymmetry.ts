function alphabetSymmetry(arr: string[]) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetsMap = alphabet
		.split('')
		.reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map())

	return arr.reduce((acc: number[], curr, _) => {
		let temp = 0
		curr.split('').forEach((val_, idx_) => {
			idx_ + 1 === alphabetsMap.get(val_.toLowerCase()) ? (temp += 1) : temp
		})
		acc.push(temp)

		return acc
	}, [])
}

export { alphabetSymmetry }
