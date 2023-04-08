function partsOfList(arr: string[]) {
	const tempArr: string[][] = []

	for (let i = 0; i < arr.length; i += 1) {
		let singleResult = arr.reduce(
			(acc: string[], curr, idx) => {
				if (idx <= i) {
					acc[0] += curr
					acc[0] += ' '
				} else {
					acc[1] += curr
					acc[1] += ' '
				}

				return acc
			},
			['', '']
		)

		singleResult = [singleResult[0].slice(0, -1), singleResult[1].slice(0, -1)]
		tempArr.push(singleResult)
	}
	return tempArr.slice(0, -1)
}

export { partsOfList }
