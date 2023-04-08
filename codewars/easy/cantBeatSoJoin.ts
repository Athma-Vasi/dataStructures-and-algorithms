function cantBeatSoJoin(numbers: number[][]) {
	return numbers
		.sort((a: number[], b: number[]) => {
			const aTotal = a.reduce((acc, curr) => (acc += curr), 0)
			const bTotal = b.reduce((acc, curr) => (acc += curr), 0)

			return aTotal === bTotal ? aTotal - bTotal : bTotal - aTotal
		})
		.flatMap((x) => x)
}

export { cantBeatSoJoin }
