//fails random tests with unknown args

function carParkEscape(carpark: number[][]) {
	const [start, stairs] = carpark.reduce(
		(acc: [[number, number], [number, number][]], currLvl, yIdx) => {
			currLvl.forEach((spot, xIdx) =>
				spot === 2
					? (acc[0] = [yIdx, xIdx])
					: spot === 1
					? acc[1].push([yIdx, xIdx])
					: acc
			)

			return acc
		},
		[[0, 0], []]
	)

	const end = [carpark.length - 1, carpark[0].length - 1]

	let currLvl = 0
	let newLvLStart = start
	const movesArr: string[] = []

	while (currLvl <= end[0]) {
		if (currLvl === end[0]) {
			const movesToEnd = newLvLStart[1] - end[1]
			const dir = movesToEnd < 0 ? 'R' : movesToEnd > 0 ? 'L' : null

			dir === null ? movesArr : movesArr.push(`${dir}${Math.abs(movesToEnd)}`)
			currLvl += 1
		} else {
			const movesToStairs = newLvLStart[1] - stairs[currLvl][1]
			const dir = movesToStairs < 0 ? 'R' : movesToStairs > 0 ? 'L' : null

			dir === null ? movesArr : movesArr.push(`${dir}${Math.abs(movesToStairs)}`)
			movesArr.push('D1')

			newLvLStart = [stairs[currLvl][0] + 1, stairs[currLvl][1]]
			currLvl += 1
		}
	}

	let numOfConsecD1s = 1
	const idxsOfConsecD1s: number[] = []

	for (let i = 1; i <= movesArr.length; i += 1) {
		if (movesArr[i - 1] === 'D1' && movesArr[i] === 'D1') {
			numOfConsecD1s += 1
			idxsOfConsecD1s.push(i - 1)
		}
	}
	numOfConsecD1s === 1
		? idxsOfConsecD1s
		: idxsOfConsecD1s.length < numOfConsecD1s
		? idxsOfConsecD1s.push(idxsOfConsecD1s[idxsOfConsecD1s.length - 1] + 1)
		: idxsOfConsecD1s

	let isDPresent = false
	let incr = 0

	return movesArr.reduce((acc: string[], curr, idx) => {
		if (curr === 'D1') {
			if (idx === idxsOfConsecD1s[incr]) {
				if (!isDPresent) {
					acc.push(`D${numOfConsecD1s}`)
					isDPresent = true
					incr += 1
				}
			} else {
				if (!isDPresent) acc.push(curr)
			}
		} else acc.push(curr)

		return acc
	}, [])
}

export { carParkEscape }
