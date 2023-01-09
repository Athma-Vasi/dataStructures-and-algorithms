function findTheUniqueNumber(arr: number[]) {
	const countMap = arr.reduce((acc: Map<number, number>, curr, ) => {
		let hasVal = acc.get(curr) ?? 0
		acc.set(curr, (hasVal += 1))

		return acc
	}, new Map())

	return Number(
		Object.entries(Object.fromEntries(countMap)).sort((a, b) => a[1] - b[1])[0][0]
	)
}

export { findTheUniqueNumber }
