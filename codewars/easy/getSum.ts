function getSum(a: number, b: number) {
	if (a === b) return a

	const ordered = [Math.min(a, b), Math.max(a, b)]

	const numsArr: number[] = []
	for (let i = ordered[0]; i <= ordered[1]; i += 1) {
		numsArr.push(i)
	}

	return numsArr.reduce((acc, curr) => {
		acc += curr

		return acc
	}, 0)
}

export { getSum }
