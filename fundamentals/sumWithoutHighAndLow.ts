function sumWithoutHighAndLow(array: number[] | null) {
	if (array === null || array === undefined) return 0
	if (array.length <= 1) return 0

	const min = Math.min(...array)
	const minIndex = array.indexOf(min)
	const max = Math.max(...array)
	const maxIndex = array.indexOf(max)

	return array.reduce(
		(acc, curr, idx) => (idx === minIndex || idx === maxIndex ? acc : (acc += curr)),
		0
	)
}

export { sumWithoutHighAndLow }
