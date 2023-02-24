function checkExam(array1: string[], array2: string[]) {
	let score = 0

	array1.forEach((value, idx) => {
		array2[idx] === ''
			? (score += 0)
			: value === array2[idx]
			? (score += 4)
			: (score -= 1)
	})

	return score < 0 ? 0 : score
}

export { checkExam }
