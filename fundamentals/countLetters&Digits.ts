function countLettersAndDigits(input: string) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	const numbers = '0123456789'

	return input
		.toLowerCase()
		.split('')
		.reduce(
			(acc, curr) =>
				alphabets.includes(curr) ? (acc += 1) : numbers.includes(curr) ? (acc += 1) : acc,
			0
		)
}

export { countLettersAndDigits }
