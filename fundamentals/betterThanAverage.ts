function betterThanAverage(classPoints: number[], yourPoints: number) {
	return classPoints.reduce((acc, curr) => (acc += curr), 0) / classPoints.length <
		yourPoints
		? true
		: false
}

export { betterThanAverage }
