function tetrisScoringSystem(arr: number[]) {
	const totalLinesCleared = arr.reduce((acc, curr) => (acc += curr), 0)
	const maxLevel = Math.floor(totalLinesCleared / 10)

	let oneLine = 40
	let twoLines = 100
	let threeLines = 300
	let fourLines = 1200
	let level = 0

	const levelMap: Map<string, Map<string, number>> = new Map()

	while (level <= maxLevel) {
		const scoreMap: Map<string, number> = new Map()
		scoreMap.set('0', 0)
		scoreMap.set('1', oneLine)
		scoreMap.set('2', twoLines)
		scoreMap.set('3', threeLines)
		scoreMap.set('4', fourLines)

		levelMap.set(`${level}`, scoreMap)

		oneLine += 40
		twoLines += 100
		threeLines += 300
		fourLines += 1200

		level += 1
	}

	let linesCleared = 0
	let level_ = 0
	let totalScore = 0

	while (linesCleared < totalLinesCleared) {
		arr.forEach((val) => {
			const currLvl = levelMap.get(`${level_}`)
			const currScore = currLvl?.get(`${val}`) ?? 0
			totalScore += currScore

			linesCleared += val
			level_ = Math.floor(linesCleared / 10)
		})
	}
	return totalScore
}

export { tetrisScoringSystem }
