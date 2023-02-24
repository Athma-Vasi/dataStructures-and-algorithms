function mean(town: string, s: string) {
	if (s === '') return -1

	const townsWithDataSplitArr = s.split('\n')
	const allTownsWithDataMap = townsWithDataSplitArr.reduce(
		(acc: Map<string, string>, curr) => {
			const [town_, allYrRainfall] = curr.split(':')
			acc.set(town_, allYrRainfall)

			return acc
		},
		new Map()
	)

	if (allTownsWithDataMap.get(town) === undefined) return -1

	const dataForReqTown = allTownsWithDataMap.get(town) ?? ''
	const rainfallMap = dataForReqTown
		.split(',')
		.reduce((acc: Map<string, number>, curr) => {
			const [month, rainfall] = curr.split(' ')
			acc.set(month, Number(rainfall))

			return acc
		}, new Map())

	return (
		Object.values(Object.fromEntries(rainfallMap)).reduce(
			(acc, curr) => (acc += curr),
			0
		) / rainfallMap.size
	)
}

function variance(town: string, strng: string) {
	if (strng === '') return -1

	const avg = mean(town, strng)

	const townsWithDataSplitArr = strng.split('\n')
	const allTownsWithDataMap = townsWithDataSplitArr.reduce(
		(acc: Map<string, string>, curr) => {
			const [town_, allYrRainfall] = curr.split(':')
			acc.set(town_, allYrRainfall)

			return acc
		},
		new Map()
	)

	if (allTownsWithDataMap.get(town) === undefined) return -1

	const dataForReqTown = allTownsWithDataMap.get(town) ?? ''
	const rainfallMap = dataForReqTown
		.split(',')
		.reduce((acc: Map<string, number>, curr) => {
			const [month, rainfall] = curr.split(' ')
			acc.set(month, Number(rainfall))

			return acc
		}, new Map())

	return (
		Object.keys(Object.fromEntries(rainfallMap))
			.reduce((acc: number[], curr: string) => {
				acc.push(((rainfallMap.get(curr) ?? Infinity) - avg) ** 2)

				return acc
			}, [])
			.reduce((acc, curr) => (acc += curr), 0) / rainfallMap.size
	)
}

export { mean, variance }
