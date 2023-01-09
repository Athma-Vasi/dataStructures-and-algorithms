function histogram(s: string) {
	const errors = 'uwxz'

	const strCountMap = s.split('').reduce((acc: Map<string, number>, curr) => {
		let hasValue = acc.get(curr) ?? 0
		acc.set(curr, (hasValue += 1))

		return acc
	}, new Map())

	const errorSet: string[] = []
	strCountMap.forEach((_, key) => (errors.includes(key) ? errorSet.push(key) : errorSet))

	return errorSet
		.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
		.reduce((acc: string[], curr) => {
			const count = strCountMap.get(curr) ?? 0
			let temp = ''
			temp += curr
			temp += '  ' //two spaces
			temp += count

			const countLength = count?.toString().length ?? 0
			temp += ' '.repeat(6 - countLength)

			temp += '*'.repeat(count)
			acc.push(temp)

			return acc
		}, [])
		.join('\r')
}

export { histogram }
