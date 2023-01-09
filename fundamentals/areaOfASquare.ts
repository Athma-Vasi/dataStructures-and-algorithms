function squareArea(num: number) {
	//arcL = 2πr (θ/360)
	// r =arcL*360/(2*pi*θ)

	const radius = (num * 360) / (2 * 3.14159 * 90)
	return radius * radius
}

export { squareArea }
