function meanAndConcatenateStr(lst: string[]): [number, string] {
	const mean =
		lst.reduce((acc, curr) => {
			Number.isNaN(Number(curr)) ? curr : (acc += Number(curr))
			return acc
		}, 0) / 10

	const strConcat = lst.reduce((acc, curr) => {
		Number.isNaN(Number(curr)) ? (acc += curr) : curr

		return acc
	}, '')

	return [mean, strConcat]
}

export { meanAndConcatenateStr }
