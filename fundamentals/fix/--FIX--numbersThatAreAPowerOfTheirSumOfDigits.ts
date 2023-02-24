//arg of 4 results in infinite loop

function powerSumDigTerm(n: number) {
	if (n === 1) return 81

	let num = 82
	let numLength = num.toString().length
	let numTotal = num
		.toString()
		.split('')
		.reduce((acc, curr) => (acc += Number(curr)), 0)
	let numPowerSum = numTotal ** numLength
	let count = 1

	while (count < n) {
		while (numPowerSum !== num) {
			num += 1
			numLength = num.toString().length
			numTotal = num
				.toString()
				.split('')
				.reduce((acc, curr) => (acc += Number(curr)), 0)
			numPowerSum = numTotal ** numLength
		}
		count += 1
		num += 1
	}

	return numPowerSum
}

// console.log(powerSumDigTerm(1))
// console.log(powerSumDigTerm(2))
// console.log(powerSumDigTerm(3))
console.log(powerSumDigTerm(4))
