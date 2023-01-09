function countPositivesSumNegatives(input: number[]): [number, number] | [] {
	return input === null
		? []
		: input.length === 0
		? []
		: input.reduce(
				(acc, curr) => {
					curr > 0 ? (acc[0] += 1) : curr < 0 ? (acc[1] += curr) : acc
					return acc
				},
				[0, 0]
		  )
}

export { countPositivesSumNegatives }
