function countUniqueElements(n: number[]) {
	let prev = n[0]
	let count = 0

	return n.reduce((acc: number[], curr, idx) => {
		if (idx === n.length - 1) {
			if (curr === prev) {
				count += 1
				acc.push(count)
			} else {
				count = 1
				acc.push(count)
			}
		}

		if (curr === prev) {
			count += 1
		} else {
			acc.push(count)
			count = 1
			prev = curr
		}

		return acc
	}, [])
}

//online solution
function countUniqueElements1(input: number[]) {
	const result = []

	let value = input[0]
	let count = 0

	for (let i = 0; i < input.length; i += 1) {
		const current = input[i]

		if (current !== value) {
			result.push(count)
			count = 1
			value = current
		} else {
			count += 1
		}
	}

	result.push(count)

	return result
}

export { countUniqueElements, countUniqueElements1 }
