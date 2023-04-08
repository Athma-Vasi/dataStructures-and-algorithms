function spinningRings(innerMax: number, outerMax: number) {
	let innerNum = innerMax
	let outerNum = 1
	let moves = 1

	while (innerNum !== outerNum) {
		innerNum = innerNum === 0 ? innerMax : innerNum - 1
		outerNum = outerNum === outerMax ? 0 : outerNum + 1
		moves += 1
	}

	return moves
}

export { spinningRings }
