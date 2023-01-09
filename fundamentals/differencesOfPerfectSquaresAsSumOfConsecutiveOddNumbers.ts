function squaresToOdd(sqr1: number, sqr2: number) {
	const amountOfConsecOddNums = sqr1 - sqr2
	const targetSum = sqr1 ** 2 - sqr2 ** 2

	if (amountOfConsecOddNums === 1)
		return `${sqr1}^2 - ${sqr2}^2 = ${targetSum} = ${targetSum}`

	//initializes consec odd nums starting at 1 with length of amountOfConsecOddNums
	const resultArr: number[] = []
	for (let i = 1; i <= amountOfConsecOddNums * 2; i += 2) resultArr.push(i)

	//initial temp sum from resultArr
	let tempSum = resultArr.reduce((acc, curr) => (acc += curr), 0)

	//sliding window technique
	while (tempSum !== targetSum) {
		resultArr.shift()
		const lastElem = resultArr[resultArr.length - 1]
		const newLastElem = lastElem + 2
		resultArr.push(newLastElem)

		tempSum = resultArr.reduce((acc, curr) => (acc += curr), 0)
	}

	return resultArr.reduce((acc, curr, idx) => {
		if (idx === resultArr.length - 1) {
			acc += `${curr} = ${targetSum}`
		} else acc += `${curr} + `

		return acc
	}, `${sqr1}^2 - ${sqr2}^2 = `)
}

export { squaresToOdd }
