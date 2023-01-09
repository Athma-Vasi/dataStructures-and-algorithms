function golfScoreCalculator(parList: string, scoreList: string) {
	const parArr = parList.split('')

	return scoreList
		.split('')
		.reduce((acc: number[], curr, idx) => {
			acc.push(Number(curr) - Number(parArr[idx]))

			return acc
		}, [])
		.reduce((acc, curr) => (acc += curr), 0)
}

export { golfScoreCalculator }
