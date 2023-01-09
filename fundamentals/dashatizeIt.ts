//was not accepted because their JS hoisting environment does not
//support the function String.prototype.replaceAll

function dashatizeIt(num: number) {
	if (num === 0) return 0

	const isNegative = num < 0
	const isFirstOdd = Number(num.toString()[0]) % 2 !== 0
	const isLastOdd = Number(num.toString()[num.toString().length - 1]) % 2 !== 0

	let result = num
		.toString()
		.split('')
		.reduce((acc, curr) => {
			Number(curr) % 2 === 0 ? (acc += curr) : (acc += `-${curr}-`)

			return acc
		}, '')
		.replaceAll('--', '-')

	isFirstOdd ? (result = result.slice(1)) : result
	isLastOdd ? (result = result.slice(0, -1)) : result
	isNegative ? (result = result.slice(1)) : result

	return result
}

export { dashatizeIt }
