function sumOfASequence(begin: number, end: number, step: number) {
	return begin > end
		? 0
		: Array.from(
				{ length: (end - begin) / step + 1 },
				(_, key) => begin + key * step
		  ).reduce((acc, curr) => (acc += curr), 0)
}

export { sumOfASequence }
