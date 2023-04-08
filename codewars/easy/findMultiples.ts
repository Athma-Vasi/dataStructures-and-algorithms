function findMultiples(integer: number, limit: number) {
	const tempArr: number[] = []

	for (let i = integer; i <= limit; i += integer) tempArr.push(i)

	return tempArr
}

export { findMultiples }
