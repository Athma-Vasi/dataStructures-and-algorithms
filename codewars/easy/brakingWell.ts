function dist(v: number, mu: number) {
	const velInMPerS = v / 3.6
	const brakingDist = velInMPerS ** 2 / (2 * mu * 9.81)
	const reactionDist = velInMPerS // * 1sec = itself

	return brakingDist + reactionDist
}

//need to complete this
// function speed(d: number, mu: number) {
// 	const velInMPerS = Math.sqrt(d * 2 * mu * 9.81)
// 	return velInMPerS * 3.6
// }

export { dist }
