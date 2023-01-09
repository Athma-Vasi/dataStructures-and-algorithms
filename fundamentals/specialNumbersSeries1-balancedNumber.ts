function balancedNumber(number: number) {
	const isEvenLength = number.toString().length % 2 === 0

	const toLeftIndex = !isEvenLength
		? Math.floor(number.toString().length / 2)
		: number.toString().length / 2 - 1
	const fromRightIndex = !isEvenLength
		? Math.floor(number.toString().length / 2) + 1
		: number.toString().length / 2 + 1

	const leftSide = number.toString().slice(0, toLeftIndex)
	const rightSide = number.toString().slice(fromRightIndex)

	return leftSide.split('').reduce((acc, curr) => (acc += Number(curr)), 0) ===
		rightSide.split('').reduce((acc, curr) => (acc += Number(curr)), 0)
		? 'Balanced'
		: 'Not Balanced'
}

export { balancedNumber }
