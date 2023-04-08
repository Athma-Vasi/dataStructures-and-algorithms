function highestScoringWord(str: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetMap: Map<string, number> = new Map()

	alphabet.split('').forEach((value, idx) => {
		alphabetMap.set(value, (idx += 1))
	})

	const wordScoresArr = str
		.toLowerCase()
		.split(' ')
		.reduce((acc: number[], curr) => {
			let score = 0
			curr.split('').forEach((value, _) => {
				score += alphabetMap.get(value) ?? 0
			})

			acc.push(score)
			return acc
		}, [])

	const strArr = str.toLowerCase().split(' ')
	const highestScore = Math.max(...wordScoresArr)
	const highestScoreIndex = wordScoresArr.indexOf(highestScore)

	return strArr[highestScoreIndex]
}

export { highestScoringWord }
