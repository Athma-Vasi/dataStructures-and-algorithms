type Staff = Record<string, string>

function boredomScore(staff: Staff) {
	const boredomScoreMap = new Map([
		['accounts', 1],
		['finance', 2],
		['canteen', 10],
		['regulation', 3],
		['trading', 6],
		['change', 6],
		['IS', 8],
		['retail', 5],
		['cleaning', 4],
		['pissing about', 25],
	])

	const boredomScore = Object.entries(staff).reduce(
		(totalScore, [_, department]: [string, string]) => {
			const score =
				boredomScoreMap.get(department) === undefined
					? undefined
					: boredomScoreMap.get(department)
			if (score !== undefined) totalScore += score

			return totalScore
		},
		0
	)

	return boredomScore <= 80
		? 'kill me now'
		: boredomScore < 100
		? 'i can handle this'
		: 'party time!!'
}

export { boredomScore }
