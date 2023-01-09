function followThatSpy(routes: string[][]) {
	const countriesCount = routes.reduce((acc: Map<string, number>, curr) => {
		curr.forEach((country) => {
			let visitCount = acc.get(country) ?? 0
			acc.set(country, (visitCount += 1))
		})

		return acc
	}, new Map())

	//start country and end country will have count = 1
	//idx position allows to find start and end countries
	const [startOrEndCountriesWithIndexes, restOfCountriesWithIndexes] = Object.entries(
		Object.fromEntries(countriesCount)
	).reduce(
		(acc: [Map<string, string>, Map<string, string[]>], curr: [string, number]) => {
			routes.forEach((itinerary: string[], xIdx) =>
				itinerary.forEach((country: string, yIdx) => {
					if (curr[1] === 1) {
						curr[0] === country ? acc[0].set(curr[0], `${xIdx},${yIdx}`) : acc
					} else {
						if (curr[0] === country) {
							const restCountriesWithIndex: string[] = acc[1].get(curr[0]) ?? []
							restCountriesWithIndex.push(`${xIdx},${yIdx}`)
							acc[1].set(curr[0], restCountriesWithIndex)
						}
					}
				})
			)

			return acc
		},
		[new Map(), new Map()]
	)

	//start country idx is of form 'n,0' & end country idx is of form 'n,1'
	//where n < routes.length
	const [startCountry, endCountry] = Object.entries(
		Object.fromEntries(startOrEndCountriesWithIndexes)
	).reduce(
		(acc: [string, string], [country, index]: [string, string]) => {
			const [_, yIdx] = index.split(',')

			Number(yIdx) === 0
				? (acc[0] = country)
				: Number(yIdx) === 1
				? (acc[1] = country)
				: acc

			return acc
		},
		['', '']
	)

	let itineraries: string[] = [startCountry]
	let length = 1
	const startIndex = startOrEndCountriesWithIndexes.get(startCountry) ?? ''
	let [xIdxStart, yIdxStart] = startIndex?.split(',')

	while (length < routes.length + 1) {
		//from start country idx, we can find the next country idx by incrementing yIdxStart
		const nextCountryXIdx = xIdxStart
		const nextCountryYIdx = Number(yIdxStart) + 1
		const nextCountryIdx = `${nextCountryXIdx},${nextCountryYIdx}`

		//using the yIdxStart we can find the next country from the map
		const [nextCountry, nextCountriesStartIdx] = Object.entries(
			Object.fromEntries(restOfCountriesWithIndexes)
		).reduce(
			(acc: [string, string], [country, indexes]: [string, string[]]) => {
				if (indexes.includes(nextCountryIdx)) {
					const foundIdx = indexes.findIndex((elem) => elem === nextCountryIdx)
					acc[0] = country
					//and also find the index of next position of same country
					acc[1] = foundIdx === 0 ? indexes[foundIdx + 1] : indexes[foundIdx - 1]
				}

				return acc
			},
			['', '']
		)

		itineraries.push(nextCountry)

		//reset the following idxes to the next position of same country
		xIdxStart = nextCountriesStartIdx.split(',')[0]
		yIdxStart = nextCountriesStartIdx.split(',')[1]

		length += 1
	}

	//me being lazy
	itineraries = itineraries.slice(0, -1)
	itineraries.push(endCountry)

	return itineraries.join(', ')
}

export { followThatSpy }
