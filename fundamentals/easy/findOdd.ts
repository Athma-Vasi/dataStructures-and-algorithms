function findOdd(xs: number[]) {
	if (xs.length === 1) return xs[0]

	const xsSet: Set<number> = new Set(xs)
	const xsMap: Map<number, number> = new Map()

	xs.forEach((value, _) => {
		let result = xsMap.get(value) ?? 0
		xsSet.has(value) ? xsMap.set(value, (result += 1)) : value
	})

	return Number(
		Object.entries(Object.fromEntries(xsMap)).reduce((acc, curr) => {
			curr[1] % 2 !== 0 ? (acc = curr[0]) : acc

			return acc
		}, '')
	)
}

export { findOdd }
