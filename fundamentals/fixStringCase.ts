function fixcharingCase(s: string) {
	const upper = s.toUpperCase()
	const lower = s.toLowerCase()

	let upperCount = 0
	s.split('').forEach((char, idx) =>
		char === upper[idx] ? (upperCount += 1) : upperCount
	)

	let lowerCount = 0
	s.split('').forEach((char, idx) =>
		char === lower[idx] ? (lowerCount += 1) : lowerCount
	)

	return upperCount > lowerCount ? upper : upperCount < lowerCount ? lower : lower
}

export { fixcharingCase }
