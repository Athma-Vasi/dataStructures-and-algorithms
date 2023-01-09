function ruleOfDivisibilityBy13(n: number) {
	const remaindersOfMod13 = new Map([
		[0, 1],
		[1, 10],
		[2, 9],
		[3, 12],
		[4, 3],
		[5, 4],
	])

	let num = n
	let firstResult = -Infinity
	let secondResult = Infinity

	while (firstResult !== secondResult) {
		firstResult = num
			.toString()
			.split('')
			.reverse()
			.reduce((acc, curr, idx) => {
				if (idx < 6) {
					const mapResult = remaindersOfMod13.get(idx) ?? -Infinity
					acc += Number(curr) * mapResult
				} else {
					const shiftedIdx = idx - 6
					const mapResult = remaindersOfMod13.get(shiftedIdx) ?? -Infinity
					acc += Number(curr) * mapResult
				}

				return acc
			}, 0)

		secondResult = firstResult
			.toString()
			.split('')
			.reverse()
			.reduce((acc, curr, idx) => {
				if (idx < 6) {
					const mapResult = remaindersOfMod13.get(idx) ?? -Infinity
					acc += Number(curr) * mapResult
				} else {
					const shiftedIdx = idx - 6
					const mapResult = remaindersOfMod13.get(shiftedIdx) ?? -Infinity
					acc += Number(curr) * mapResult
				}

				return acc
			}, 0)

		num = secondResult
	}

	return firstResult
}

console.log(ruleOfDivisibilityBy13(1234567))
