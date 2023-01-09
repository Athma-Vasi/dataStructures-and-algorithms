function lastSurvivor(letters: string, coords: number[]) {
	let coords_ = [...coords]
	let str = letters

	while (coords_.length > 0) {
		str = str
			.split('')
			.filter((_, idx) => idx !== coords_[0])
			.join('')
		coords_ = coords_.slice(1)
	}

	return str
}

export { lastSurvivor }
