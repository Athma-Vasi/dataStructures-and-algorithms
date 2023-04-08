function oddOnesOut(nums: number[]) {
	const numsMap = nums.reduce((acc: Map<number, [number, number[]]>, curr, idx) => {
		const hasValue = acc.get(curr) ?? [0, []]
		hasValue[0] += 1
		hasValue[1].push(idx)

		acc.set(curr, hasValue)

		return acc
	}, new Map())

	return Object.entries(Object.fromEntries(numsMap))
		.reduce((acc: number[][], [num, count]: [string, [number, number[]]]) => {
			if (count[0] % 2 === 0) {
				for (let i = 0; i < count[0]; i += 1) {
					acc.push([Number(num), count[1][i]])
				}
			}

			return acc
		}, [])
		.sort((a, b) => a[1] - b[1])
		.reduce((acc: number[], curr) => {
			acc.push(curr[0])

			return acc
		}, [])
}

export { oddOnesOut }
