function findTheParityOutlier(integers: number[]) {
	//testing a small sample to find main parity
	const sample = integers.slice(0, 3).map((num) => (num % 2 === 0 ? 'even' : 'odd'))
	const [evenCount, oddCount] = sample.reduce(
		(acc: [number, number], curr) => {
			curr === 'even' ? (acc[0] += 1) : (acc[1] += 1)

			return acc
		},
		[0, 0]
	)
	const mainParity = evenCount > oddCount ? 'even' : 'odd'

	return integers.reduce((acc, curr) => {
		curr % 2 === 0
			? mainParity === 'even'
				? acc
				: (acc = curr)
			: mainParity === 'odd'
			? acc
			: (acc = curr)

		return acc
	}, Infinity)
}

export { findTheParityOutlier }
