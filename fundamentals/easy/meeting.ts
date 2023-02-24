function meeting(s: string) {
	return s
		.toLowerCase()
		.split(';')
		.reduce((acc: string[][], curr) => {
			acc.push(curr.split(':'))

			return acc
		}, [])
		.sort((a, b) =>
			a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
		)
		.reduce((acc, curr) => {
			acc += `(${curr[1].toUpperCase()}, ${curr[0].toUpperCase()})`

			return acc
		}, '')
}

export { meeting }
