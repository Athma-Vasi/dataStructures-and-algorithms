function pieChart(obj: string) {
	const tuple: [string, number][] = Object.entries(JSON.parse(obj))
	const totalValue = tuple.reduce((acc, curr: [string, number]) => (acc += curr[1]), 0)

	return JSON.stringify(
		Object.fromEntries(
			tuple.reduce((acc: Map<string, number>, curr: [string, number]) => {
				acc.set(curr[0], (curr[1] / totalValue) * 360)

				return acc
			}, new Map())
		)
	)
}

export { pieChart }
