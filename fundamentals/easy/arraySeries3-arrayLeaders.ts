function arrayLeaders(numbers: number[]) {
	const leaders: number[] = []
	let rightSide: number[] = []

	for (let i = 0; i < numbers.length; i += 1) {
		for (let j = i; j < numbers.length; j += 1) {
			i !== j ? rightSide.push(numbers[j]) : numbers[j]
		}

		if (rightSide.reduce((acc, curr) => (acc += curr), 0) < numbers[i]) {
			leaders.push(numbers[i])
			rightSide = []
		} else rightSide = []
	}

	return leaders
}

export { arrayLeaders }
