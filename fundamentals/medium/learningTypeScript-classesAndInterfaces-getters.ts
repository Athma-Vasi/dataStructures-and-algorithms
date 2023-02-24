class Cuboid {
	length: number
	width: number
	height: number

	constructor(length = 1, width = 1, height = 1) {
		this.length = length
		this.width = width
		this.height = height
	}

	get surfaceArea(): number {
		return (
			2 *
			(this.length * this.width + this.width * this.height + this.length * this.height)
		)
	}

	get volume(): number {
		return this.length * this.width * this.height
	}
}

const cube = new Cuboid(2, 3, 5)
console.log(cube.surfaceArea)
console.log(cube.volume)

class Cube extends Cuboid {
	constructor(length = 1) {
		super(length, length, length)
	}
}

const cube1 = new Cube()
console.log(cube1.surfaceArea)
console.log(cube1.volume)
