function findNextSquare(sq: number): number {
	if (Math.sqrt(sq) % 1 !== 0) return -1

	let square = sq + 1
	while (Math.sqrt(square) % 1 !== 0) square += 1

	return square
}

export { findNextSquare }
