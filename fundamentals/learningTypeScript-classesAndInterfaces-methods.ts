interface IGeometricFigure {
	/** Calculates area of the figure */
	area: () => number
	/** Calculates perimeter of the figure */
	perimeter: () => number
}

class Square implements IGeometricFigure {
	side: number

	constructor(side: number) {
		this.side = side
	}

	area(): number {
		return this.side * this.side
	}

	perimeter(): number {
		return 4 * this.side
	}
}

class Circle implements IGeometricFigure {
	radius: number

	constructor(radius: number) {
		this.radius = radius
	}

	area(): number {
		return Math.PI * this.radius ** 2
	}

	perimeter(): number {
		return 2 * Math.PI * this.radius
	}
}
export { Square, Circle }
