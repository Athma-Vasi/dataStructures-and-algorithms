function dancingWitch(arr: string[]) {
	const mapsArr = arr.map((_) => new Map())

	//creates arr of maps with char key and index values
	const charIdxTuplesArr = arr
		.reduce((acc: Map<string, number>[], curr, idx) => {
			curr
				.split('')
				.forEach((char, idx_) => (char === ' ' ? acc : acc[idx].set(char, idx_)))

			return acc
		}, mapsArr)
		//that is turned into a tuple and sorted asc by char in order to compare
		.reduce((acc: [string, number][][], curr: Map<string, number>) => {
			acc.push(
				Object.entries(Object.fromEntries(curr)).sort(
					(a: [string, number], b: [string, number]) =>
						a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
				)
			)

			return acc
		}, [])

	const charShiftsMaps: Map<string, number[]> = new Map()

	//each tuple arr is compared with next to find diff in index positions
	//and pushed into a map of key: char with value: array of shifted idxs
	for (let i = 1; i < charIdxTuplesArr.length; i += 1) {
		const prevCharIdxTuples = charIdxTuplesArr[i - 1]
		const nextCharIdxTuples = charIdxTuplesArr[i]

		prevCharIdxTuples.forEach((charIdx: [string, number], index) => {
			const shiftedAmounts = charShiftsMaps.get(charIdx[0]) ?? []
			//if idx positions changed, push the diff
			//else push 0
			if (charIdx[1] !== nextCharIdxTuples[index][1]) {
				shiftedAmounts.push(Math.abs(charIdx[1] - nextCharIdxTuples[index][1]))
			} else shiftedAmounts.push(0)

			charShiftsMaps.set(
				charIdx[0],
				shiftedAmounts.sort((a, b) => b - a)
			)
		})
	}

	let witch = ''

	charShiftsMaps.forEach((shiftedAmounts: number[], char) => {
		shiftedAmounts.forEach((amount) => (amount > 1 ? (witch = char) : witch))
	})

	return witch === '' ? null : witch
}

export { dancingWitch }
