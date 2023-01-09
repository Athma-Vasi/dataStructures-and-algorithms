function evenDigitSquares(a: number, b: number) {
	const result: number[] = []

	for (let i = a; i <= b; i += 1) {
		const boolArr = i
			.toString()
			.split('')
			.map((num) => (Number(num) % 2 === 0 ? true : false))

		if (!boolArr.includes(false)) {
			Math.sqrt(i) % 1 === 0 ? result.push(i) : result
		}
	}

	return result.sort((a, b) => a - b)
}

export { evenDigitSquares }
