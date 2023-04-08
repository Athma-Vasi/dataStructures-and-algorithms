//times out without explaining test args

function isPowerOfTwo(n: number): boolean {
	if (n === 0) return false
	if (n === 1) return true

	let num = n
	let isPower = false

	while (num > 0) {
		2 ** num === n ? (isPower = true) : isPower
		num -= 1
	}

	return isPower
}

export { isPowerOfTwo }

console.log(isPowerOfTwo(40969034))
