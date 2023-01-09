function anagramDetection(test: string, original: string) {
	const testStringsCount = test.split('').reduce((acc: Map<string, number>, curr) => {
		let hasVal =
			acc.get(curr.toLowerCase()) === undefined ? 0 : acc.get(curr.toLowerCase())
		if (hasVal !== undefined) acc.set(curr.toLowerCase(), (hasVal += 1))

		return acc
	}, new Map())

	const originalStringsCount = original
		.split('')
		.reduce((acc: Map<string, number>, curr) => {
			let hasVal =
				acc.get(curr.toLowerCase()) === undefined ? 0 : acc.get(curr.toLowerCase())
			if (hasVal !== undefined) acc.set(curr.toLowerCase(), (hasVal += 1))

			return acc
		}, new Map())

	const testStringsTuple = Array.from(testStringsCount).sort(
		(a: [string, number], b: [string, number]) => (a < b ? -1 : a > b ? 1 : 0)
	)
	const originalStringsTuple = Array.from(originalStringsCount).sort(
		(a: [string, number], b: [string, number]) => (a < b ? -1 : a > b ? 1 : 0)
	)

	return testStringsTuple.length === originalStringsTuple.length
		? testStringsTuple
				.reduce((acc: boolean[], curr: [string, number], idx) => {
					curr[0] === originalStringsTuple[idx][0] &&
					curr[1] === originalStringsTuple[idx][1]
						? acc.push(true)
						: acc.push(false)

					return acc
				}, [])
				.includes(false)
			? false
			: true
		: false
}

export { anagramDetection }
