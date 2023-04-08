function rowWeights(arr: number[]) {
	return arr
		.reduce(
			(acc: number[][], curr, idx) => {
				idx % 2 === 0 ? acc[0].push(curr) : acc[1].push(curr)

				return acc
			},
			[[], []]
		)
		.reduce(
			(acc, curr, idx) => {
				curr.forEach((num) => (acc[idx] += num))

				return acc
			},
			[0, 0]
		)
}

export { rowWeights }
