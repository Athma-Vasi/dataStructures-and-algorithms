function frequencySequence(str: string, sep: string) {
	const strMap = str.split('').reduce((acc: Map<string, number>, curr) => {
		let hasVal = acc.get(curr) ?? 0
		acc.set(curr, (hasVal += 1))

		return acc
	}, new Map())

	return str
		.split('')
		.reduce((acc: number[], curr) => {
			const hasVal = strMap.get(curr) ?? 0
			acc.push(hasVal)

			return acc
		}, [])
		.join(`${sep}`)
}

export { frequencySequence }
