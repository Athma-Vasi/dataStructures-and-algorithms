function sabbatical(s: string, val: number, happiness: number) {
	const str = 'sabbatical'

	const scoreMap = s.split('').reduce((acc: Map<string, number>, curr) => {
		let hasValue = acc.get(curr) ?? 0
		str.includes(curr) ? acc.set(curr, (hasValue += 1)) : acc

		return acc
	}, new Map())

	const scoreTotal = Object.values(Object.fromEntries(scoreMap)).reduce(
		(acc, curr) => (acc += curr),
		0
	)

	return val + happiness + scoreTotal > 22
		? 'Sabbatical! Boom!'
		: 'Back to your desk, boy.'
}

export { sabbatical }
