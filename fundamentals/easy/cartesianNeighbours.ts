function cartesianNeighbours(x: number, y: number) {
	//anti-clockwise
	const xPlus = [x + 1, y]
	const xyPlus = [x + 1, y + 1]
	const yPlus = [x, y + 1]
	const xMinusYPlus = [x - 1, y + 1]
	const xMinus = [x - 1, y]
	const xMinusYMinus = [x - 1, y - 1]
	const yMinus = [x, y - 1]
	const xPlusYMinus = [x + 1, y - 1]

	return [xPlus, xyPlus, yPlus, xMinusYPlus, xMinus, xMinusYMinus, yMinus, xPlusYMinus]
}

export { cartesianNeighbours }
