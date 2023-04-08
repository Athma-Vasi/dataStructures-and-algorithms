function sumDigits(n: number) {
	return n
		.toString()
		.split('')
		.reduce((acc, curr) => (acc += curr === '-' ? acc : Math.abs(Number(curr))), 0)
}

export { sumDigits }
