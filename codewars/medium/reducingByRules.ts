type RuleFunction = (a: number, b: number) => number

function reducingByRules(numbers: number[], rules: RuleFunction[]) {
	const cloneNumArr = [...numbers]

	const idx = 1
	let acc = numbers[0]

	while (cloneNumArr.length > 1) {
		for (let i = 0; i < rules.length; i += 1) {
			if (cloneNumArr.length === 1) return cloneNumArr[0]

			acc = rules[i](acc, cloneNumArr[idx])
			cloneNumArr.shift()
			cloneNumArr[0] = acc
		}
	}

	return acc
}

console.log(reducingByRules([2, 2, 3, 4], [(a, b) => a + b, (a, b) => a - b]))
