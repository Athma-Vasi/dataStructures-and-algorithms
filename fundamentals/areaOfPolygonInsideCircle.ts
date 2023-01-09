//passes all tests, error is from the thousandth decimal place being off by 0.001

function areaOfPolygonInsideCircle(circleRadius: number, numberOfSides: number) {
	const r = circleRadius
	const s = numberOfSides

	const area = 0.5 * s * r ** 2 * Math.sin((2 * 3.14159) / s)

	return Number(area.toFixed(3))
}

export { areaOfPolygonInsideCircle }
