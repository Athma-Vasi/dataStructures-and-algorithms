function greatestCommonDivisor(a: number, b: number) {
	if (a < 1 || b < 1) return -1

	let remainder = 0
	do {
		remainder = a % b
		a = b
		b = remainder
	} while (b !== 0)

	return a
}

function lowestCommonMultiple(a: number, b: number) {
	return a === 0 || b === 0 ? 0 : (a * b) / greatestCommonDivisor(a, b)
}

export { greatestCommonDivisor, lowestCommonMultiple }
