function prizeDraw(st: string, we: number[], n: number) {
	if (st === '') return 'No participants'
	if (n > st.split(',').length) return 'Not enough participants'

	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetsMap = alphabets
		.split('')
		.reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map())

	const scores = st
		.toLowerCase()
		.split(',')
		.reduce((acc: number[], curr, idx) => {
			const nameLength = curr.length
			let temp = 0

			curr.split('').forEach((char) => {
				temp += alphabetsMap.get(char)
			})
			temp += nameLength
			temp = temp * we[idx]

			acc.push(temp)

			return acc
		}, [])

	const areThereDuplicates = scores.length === new Set(scores).size ? false : true

	const sortedNames = areThereDuplicates
		? Object.entries(
				Object.fromEntries(
					st
						.split(',')
						.reduce(
							(acc: Map<string, number>, curr, idx) => acc.set(curr, scores[idx]),
							new Map()
						)
				)
		  ).sort((a: [string, number], b: [string, number]) =>
				a[1] === b[1] ? (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0) : b[1] - a[1]
		  )
		: Object.entries(
				Object.fromEntries(
					st
						.split(',')
						.reduce(
							(acc: Map<string, number>, curr, idx) => acc.set(curr, scores[idx]),
							new Map()
						)
				)
		  ).sort((a: [string, number], b: [string, number]) => b[1] - a[1])

	return sortedNames[n - 1][0]
}

export { prizeDraw }
