function minValue(values: number[]) {
	return Number(
		Array.from(new Set(values))
			.sort((a, b) => a - b)
			.join('')
	)
}

export { minValue }
