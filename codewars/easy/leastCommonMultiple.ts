function lcm(...args: number[]) {
	if (args.length === 0) return 1
	if (args.includes(0)) return 0
	if (args.length === 1) return args[0]

	return args.reduce((acc, curr, idx) => {
		if (idx > 1) {
			acc = (acc * curr) / gcd(acc, curr)
		}

		return acc
	}, (args[0] * args[1]) / gcd(args[0], args[1]))
}

function gcd(a: number, b: number) {
	if (a < 1 || b < 1) throw new Error(`a: ${a} or b: ${b} is less than 1`)

	let remainder = 0
	do {
		remainder = a % b
		a = b
		b = remainder
	} while (b !== 0)

	return a
}

export { lcm, gcd }
