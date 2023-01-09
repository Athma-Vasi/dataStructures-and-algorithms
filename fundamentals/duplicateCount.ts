function duplicateCount(text: string): number {
	if (text === '') return 0

	const textSet: Set<string> = new Set()
	const textMap: Map<string, number> = new Map()

	text
		.toLowerCase()
		.split('')
		.forEach((value, _) => {
			textSet.has(value) ? textMap.set(value, 1) : textSet.add(value)
		})

	return textMap.size
}

export { duplicateCount }
