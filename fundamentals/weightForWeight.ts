function weightForWeight(str: string) {
	return str
		.split(' ')
		.reduce((acc: [string, number][], curr) => {
			const weight = curr.split('').reduce((acc, curr) => (acc += Number(curr)), 0)
			acc.push([curr, weight])

			return acc
		}, [])
		.sort((a: [string, number], b: [string, number]) =>
			a[1] === b[1] ? (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0) : a[1] - b[1]
		)
		.reduce((acc: string[], curr: [string, number]) => {
			acc.push(curr[0])

			return acc
		}, [])
		.join(' ')
}

export { weightForWeight }
