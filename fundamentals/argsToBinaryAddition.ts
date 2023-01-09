//all sample tests shown pass on this end
//same tests fail on their end...

function argsToBinaryAddition(arr: unknown[]) {
	if (arr[0] === null) return '0'
	if (arr.length === 0) return '0'

	const numArr = arr.reduce((acc: number[], curr) => {
		Number.isNaN(Number(curr)) ? acc : acc.push(Number(curr))

		return acc
	}, [])

	const sumNumArr = numArr.reduce((acc, curr) => (acc += curr), 0)
	const binary = numberToBinary(sumNumArr)

	return binary.join('')
}

function numberToBinary(n: number): number[] {
	let quotient = n
	let remainder = -Infinity
	const binaryArr: number[] = []

	while (quotient > 0) {
		remainder = quotient % 2
		binaryArr.push(remainder)
		quotient = Math.floor(quotient / 2)
	}

	return binaryArr.reverse()
}

export { argsToBinaryAddition }
