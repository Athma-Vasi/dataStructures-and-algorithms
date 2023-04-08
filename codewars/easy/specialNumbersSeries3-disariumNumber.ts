function disariumNumber(n: number) {
	return n
		.toString()
		.split('')
		.reduce((acc, curr, idx) => {
			acc += Number(curr) ** (idx + 1)

			return acc
		}, 0) === n
		? 'Disarium !!'
		: 'Not !!'
}

export { disariumNumber }
