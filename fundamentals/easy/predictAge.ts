function predictAge(...ages: number[]) {
	const total = ages.reduce((acc, curr) => {
		acc += curr * curr

		return acc
	}, 0)

	return Math.floor(Math.sqrt(total) / 2)
}
