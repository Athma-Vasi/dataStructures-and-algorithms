//fails random tests with unknown args

function sortTwisted(array: number[]) {
	const clonedArr = [...array]

	const ogToTwistedMap = clonedArr.reduce((acc: Map<string, number>, curr) => {
		const index = curr.toString().includes('3')
			? curr.toString().indexOf('3')
			: curr.toString().includes('7')
			? curr.toString().indexOf('7')
			: null

		let temp: string[] = []
		let twistedNum = ''

		if (index !== null) {
			temp = curr.toString().split('')
			temp[index] === '3'
				? (temp[index] = '7')
				: temp[index] === '7'
				? (temp[index] = '3')
				: temp

			twistedNum = temp.join('')
			acc.set(`${curr}`, Number(twistedNum))
		} else acc.set(`${curr}`, Number(curr))

		return acc
	}, new Map())

	return Object.entries(Object.fromEntries(ogToTwistedMap))
		.sort((a: [string, number], b: [string, number]) => a[1] - b[1])
		.reduce((acc: number[], curr: [string, number]) => {
			acc.push(Number(curr[0]))

			return acc
		}, [])
}

export { sortTwisted }
