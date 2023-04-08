function findTheStrayNumber(numbers: number[]) {
	return Number(
		Array.from(
			numbers.reduce((acc: Map<string, number>, curr) => {
				let hasVal = acc.get(`${curr}`) ?? 0
				acc.set(`${curr}`, (hasVal += 1))

				return acc
			}, new Map())
		).sort((a, b) => a[1] - b[1])[0][0]
	)
}

export { findTheStrayNumber }
