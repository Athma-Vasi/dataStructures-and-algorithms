function helpSuzukiCountVegetables(s: string) {
	const notAVeg = ['chopsticks']

	const vegCount = s.split(' ').reduce((acc: Map<string, number>, curr) => {
		if (!notAVeg.includes(curr) && curr !== '') {
			let hasCount = acc.get(curr) ?? 0
			acc.set(curr, (hasCount += 1))
		}

		return acc
	}, new Map())

	return Object.entries(Object.fromEntries(vegCount))
		.sort((a: [string, number], b: [string, number]) =>
			a[1] === b[1] ? (a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0) : b[1] - a[1]
		)
		.reduce((acc: [number, string][], curr: [string, number]) => {
			acc.push([curr[1], curr[0]])

			return acc
		}, [])
}

export { helpSuzukiCountVegetables }
