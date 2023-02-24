function factorial(n: number) {
	let num = n
	let factorial = 1

	while (num > 0) {
		factorial *= num
		num = num - 1
	}

	return factorial
}

export { factorial }
