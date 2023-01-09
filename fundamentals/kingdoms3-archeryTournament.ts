//cannot figure out why my sorting is wrong...
//everything else works

function archeryTournament(target: string[]) {
	//dynamically generates scores based on target length
	const targetLength = target[0].length
	const midIdx = Math.floor(targetLength / 2)
	const leftTargetsIdxs: number[] = []
	const rightTargetsIdxs: number[] = []

	let incr = 1
	let leftTarget = 0
	let rightTarget = 0
	while (incr <= Math.floor(targetLength / 2)) {
		leftTarget = midIdx - incr
		rightTarget = midIdx + incr

		leftTargetsIdxs.unshift(leftTarget)
		rightTargetsIdxs.push(rightTarget)

		leftTarget = 0
		rightTarget = 0
		incr += 1
	}

	const midIdxScore = rightTargetsIdxs.length + 1

	const idxScores = [...leftTargetsIdxs, midIdx, ...rightTargetsIdxs].reduce(
		(acc: Map<string, number>, curr, idx) => {
			acc.set(`${curr}`, midIdxScore - Math.abs(midIdxScore - idx - 1))

			return acc
		},
		new Map()
	)

	const monkScores = target.reduce((acc: Map<string, [number, number]>, curr, idx) => {
		curr.split('').forEach((char_, idx_) => {
			if (char_ !== '*') {
				const idxScore = idxScores.get(`${idx_}`) ?? 0
				const result = acc.get(char_.toLowerCase()) ?? [idxScore, 1]
				const score = result[0]
				let quantity = result[1]

				if (acc.has(char_.toLowerCase())) {
					char_ === char_.toUpperCase()
						? acc.set(char_.toLowerCase(), [score + idxScore * 2, (quantity += 1)])
						: acc.set(char_, [score + idxScore, (quantity += 1)])
				} else {
					char_ === char_.toUpperCase()
						? acc.set(char_.toLowerCase(), [idxScore * 2, (quantity += 1)])
						: acc.set(char_, [idxScore, (quantity += 1)])
				}
			}
		})

		return acc
	}, new Map())

	return Object.entries(Object.fromEntries(monkScores))
		.sort((a: [string, [number, number]], b: [string, [number, number]]) => {
			const aLetter = a[0]
			const bLetter = b[0]
			const aScore = a[1][0]
			const bScore = b[1][0]
			const aQuantity = a[1][1]
			const bQuantity = b[1][1]

			return aScore === bScore
				? aQuantity === bQuantity
					? aLetter < bLetter
						? -1
						: aLetter > bLetter
						? 1
						: 0
					: bQuantity - aQuantity
				: aScore - bScore
		})
		.map((monkScore: [string, [number, number]]) => monkScore[0])
}

export { archeryTournament }
