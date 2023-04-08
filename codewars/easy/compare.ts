function compare(a1: number[] | null, a2: number[] | null) {
	const a1Sorted = a1?.sort((a, b) => a - b)
	const a2Sorted = a2?.sort((a, b) => a - b)

	const a2Correct = a1Sorted?.map((n) => n * n)

	return JSON.stringify(a2Sorted) === JSON.stringify(a2Correct)
}

export { compare }
