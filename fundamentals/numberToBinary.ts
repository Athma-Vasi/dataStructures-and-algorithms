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

export { numberToBinary }
