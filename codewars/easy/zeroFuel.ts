function zeroFuel(distance: number, mpg: number, fuelLeft: number): boolean {
	return distance > mpg * fuelLeft ? false : true
}

export { zeroFuel }
