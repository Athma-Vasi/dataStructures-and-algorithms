declare const ICuboid: {
	new (length: number): ICuboid
}

interface ICuboid {
	length: number
	surfaceArea: number
	volume: number
}

class Cube implements ICuboid {
	length: number

	constructor(length: number) {
		this.length = length
	}

	get surfaceArea(): number {
		return 6 * this.length ** 2
	}
	set surfaceArea(newSurfaceArea: number) {
		this.length = Math.sqrt(newSurfaceArea / 6)
	}

	get volume(): number {
		return this.length ** 3
	}
	set volume(newVolume: number) {
		this.length = Math.round(Math.pow(newVolume, 1 / 3))
	}
}

export { Cube }
