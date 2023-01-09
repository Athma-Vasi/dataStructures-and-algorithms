function squareDigitsSequence(a: number) {
	const prevSeq: number[] = []
	let num = Infinity
	let seq = 0

	while (!prevSeq.includes(num)) {
		num = seq === 0 ? a : num
		prevSeq.push(num)

		num = num
			.toString()
			.split('')
			.reduce((acc, curr) => (acc += Number(curr) ** 2), 0)

		seq += 1
	}

	return seq + 1
}

console.log(squareDigitsSequence(16)) //  9
console.log(squareDigitsSequence(103)) //  4
console.log(squareDigitsSequence(1)) //  2
