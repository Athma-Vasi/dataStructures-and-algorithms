function doubletonNumber(num: number) {
	const isNumADoubleton = new Set(num.toString()).size === 2

	let doubleton = isNumADoubleton ? num + 1 : num
	let found = false

	while (!found) {
		new Set(doubleton.toString()).size === 2 ? (found = true) : (doubleton += 1)
	}

	return doubleton
}

export { doubletonNumber }
