//passes basic tests but fails server tests with unknown args

function irreducibleSumOfRationals(l: number[][]) {
	if (l.length === 0) return null

	const commonDen = l.reduce((acc, curr) => (acc *= curr[1]), 1)

	const wholeNumerators = l.reduce((acc: number[], curr) => {
		acc.push((curr[0] / curr[1]) * commonDen)

		return acc
	}, [])

	const sumNumerators = wholeNumerators.reduce((acc, curr) => (acc += curr), 0)

	const factorCheck = [2, 3, 5, 7, 11, 13, 17]
	const boolArr: boolean[] = []
	factorCheck.forEach((n) => {
		sumNumerators % n === 0 && commonDen % n === 0
			? boolArr.push(true)
			: boolArr.push(false)
	})

	const smallestFactor = boolArr.includes(true)
		? boolArr.findIndex((bool) => bool === true)
		: -1

	let numerator = sumNumerators
	let denominator = commonDen

	do {
		numerator /= factorCheck[smallestFactor]
		denominator /= factorCheck[smallestFactor]
	} while (
		smallestFactor !== -1 &&
		numerator % factorCheck[smallestFactor] === 0 &&
		denominator % factorCheck[smallestFactor] === 0
	)

	return denominator === 1 ? `${numerator}` : `[${numerator}, ${denominator}]`
}

export { irreducibleSumOfRationals }
