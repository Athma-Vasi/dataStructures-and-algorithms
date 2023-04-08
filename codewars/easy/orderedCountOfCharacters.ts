function orderedCountOfCharacters(text: string) {
	const charCountMap = text.split('').reduce((acc: Map<string, number>, curr) => {
		let hasValue = acc.get(curr) ?? 0
		acc.set(curr, (hasValue += 1))

		return acc
	}, new Map())

	const result: [string, number][] = []
	charCountMap.forEach((value, key) => {
		result.push([key, value])
	})

	return result
}

export { orderedCountOfCharacters }
