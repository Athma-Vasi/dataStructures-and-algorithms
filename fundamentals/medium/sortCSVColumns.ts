function sortCSVColumns(csv: string) {
	const newLineArr = csv.split('\n')
	const peopleToSortMap = newLineArr.reduce(
		(acc: Map<string, string[]>, curr: string) => {
			const rowArr = curr.split(';')

			rowArr.forEach((val, idx_) => {
				const tempArr: string[] = acc.get(`${idx_}`) ?? []
				tempArr.push(val)
				acc.set(`${idx_}`, tempArr)
			})

			return acc
		},
		new Map()
	)

	const sortedPeople = Object.entries(Object.fromEntries(peopleToSortMap)).sort(
		(a: [string, string[]], b: [string, string[]]) =>
			a[1][0].toLowerCase() < b[1][0].toLowerCase()
				? -1
				: a[1][0].toLowerCase() > b[1][0].toLowerCase()
				? 1
				: 0
	)

	const sortedPplArr = sortedPeople.reduce(
		(acc: string[][], [_, val]: [string, string[]]) => {
			acc.push(val)

			return acc
		},
		[]
	)

	const iLength = sortedPplArr[0].length
	const jLength = sortedPplArr.length
	const resultArr: string[] = []

	for (let i = 0; i < iLength; i += 1) {
		const tempArr: string[] = []
		for (let j = 0; j < jLength; j += 1) {
			tempArr.push(sortedPplArr[j][i])
		}
		resultArr.push(tempArr.join(';'))
	}

	return resultArr.join('\n')
}

export { sortCSVColumns }
