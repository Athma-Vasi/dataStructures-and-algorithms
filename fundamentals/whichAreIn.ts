//passes sample tests; fails random tests (which make no sense)

function inArray(a1: string[], a2: string[]) {
	const result: string[] = []
	let boolArr: boolean[] = []

	for (let i = 0; i < a1.length; i += 1) {
		for (let j = 0; j < a2.length; j += 1) {
			a1[i]
				.split('')
				.forEach((val) =>
					a2[j].includes(val) ? boolArr.push(true) : boolArr.push(false)
				)
			boolArr.includes(false) ? (boolArr = []) : result.push(a1[i])
		}
	}

	return Array.from(new Set(result)).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
}

export { inArray }
