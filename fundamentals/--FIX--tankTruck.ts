function tankTruck(h: number, d: number, vt: number) {
	//Area of circular segment: A = (1 / 2)* r**2(theta-sin(theta))
	//where theta = 2 * arccos(m / r) and theta is in radians
	// therefore V(segment) = (1 / 2)* r**2(theta - sin(theta)) * l
	//if (fill height < 0.5 * d) V(fill) === V(segment)
	//else V(fill) === V(tank) - V(segment)

	const radius = d / 2

	let theta = -Infinity
	let lengthCylinder = -Infinity

	let volFilledSegment = -Infinity
	let volEmptySegment = -Infinity
	let remainingVol = -Infinity

	if (h < 0.5 * d) {
		theta = 2 * Math.acos((radius - h) / radius)
		lengthCylinder = vt / (0.5 * radius ** 2 * (theta - Math.sin(theta)))
		volFilledSegment = 0.5 * radius ** 2 * (theta - Math.sin(theta)) * lengthCylinder
		remainingVol = vt - volFilledSegment
	} else {
		const hOfEmptySegment = h - radius
		theta = 2 * Math.acos((radius - hOfEmptySegment) / radius)
		lengthCylinder = vt / (0.5 * radius ** 2 * (theta - Math.sin(theta)))
		volEmptySegment = 0.5 * radius ** 2 * (theta - Math.sin(theta)) * lengthCylinder
		remainingVol = volEmptySegment
	}

	return remainingVol
}

console.log(tankTruck(5, 7, 3848))
console.log(tankTruck(2, 7, 3848))
console.log(tankTruck(2, 8, 5026))
