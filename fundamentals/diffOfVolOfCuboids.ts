function diffOfVolOfCuboids(a: [number, number, number], b: [number, number, number]) {
	return Math.abs(
		a.reduce((acc, curr) => (acc *= curr), 1) - b.reduce((acc, curr) => (acc *= curr), 1)
	)
}

export { diffOfVolOfCuboids }
