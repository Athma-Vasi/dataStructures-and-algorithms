function numberToBinaryOrHex(n: number) {
	const decToHexTable: Map<number, string> = new Map([
		[0, '0'],
		[1, '1'],
		[2, '2'],
		[3, '3'],
		[4, '4'],
		[5, '5'],
		[6, '6'],
		[7, '7'],
		[8, '8'],
		[9, '9'],
		[10, 'a'],
		[11, 'b'],
		[12, 'c'],
		[13, 'd'],
		[14, 'e'],
		[15, 'f'],
	])
	const bits: unknown[] = []

	const isEven = n % 2 === 0
	let num = n
	let quotient = Infinity
	let remainder = Infinity

	while (quotient > 0) {
		quotient = Math.floor(num / (isEven ? 2 : 16))
		remainder = num % (isEven ? 2 : 16)
		num = quotient
		bits.push(isEven ? remainder : decToHexTable.get(remainder))
	}

	return bits.reverse().join('')
}

export { numberToBinaryOrHex }
