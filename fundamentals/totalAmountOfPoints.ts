function points(games: string[]) {
	return games.reduce((acc, curr) => {
		const [homeTeamScore, awayTeamScore] = curr.split(':')
		homeTeamScore > awayTeamScore
			? (acc += 3)
			: homeTeamScore < awayTeamScore
			? acc
			: (acc += 1)

		return acc
	}, 0)
}

export { points }
