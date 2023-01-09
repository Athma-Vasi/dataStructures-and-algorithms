function factorsOfANumber(num: number): number[] {
	const arr = []
	let i = 1

	while (i * i <= num) {
		if (num % i === 0) {
			arr.push(i)
			if (Math.floor(num / i) !== i) arr.push(Math.floor(num / i))
		}

		i += 1
	}

	return arr.sort((a, b) => a - b)
}

export { factorsOfANumber }
