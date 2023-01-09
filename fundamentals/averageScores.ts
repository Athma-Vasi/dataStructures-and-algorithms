function averageScores(scores: number[]) {
	return Math.round(scores.reduce((acc, curr) => (acc += curr), 0) / scores.length)
}

export { averageScores }
