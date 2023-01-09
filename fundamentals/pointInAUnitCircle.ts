function pointInAUnitCircle(x: number, y: number) {
	if (x === 0) {
		if (y < 1 && y > -1) return true
		else return false
	} else if (y === 0) {
		if (x < 1 && x > -1) return true
		else return false
	}

	if (x === 0 && y === 0) return true

	if (x !== 0 && y !== 0) {
		if (x * x + y * y < 1) return true
		else return false
	}
}

export { pointInAUnitCircle }
