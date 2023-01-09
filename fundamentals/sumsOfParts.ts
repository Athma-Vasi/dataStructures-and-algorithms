//fails random test with unknown args : execution time out error

function sumsOfParts(ls: number[]) {
	const clone = [...ls]
	const resultArr: number[] = []

	while (clone.length > 0) {
		const sum = clone.reduce((acc, curr) => (acc += curr), 0)
		resultArr.push(sum)
		clone.shift()
	}
	resultArr.push(0)

	return resultArr
}

export { sumsOfParts }
