function ballUpwards(v0: number) {
	const velMPerS = v0 / 3.6
	const secHeightMap: Map<string, number> = new Map([['0', 0]])

	let height = Infinity
	let time = 0.1
	while (height >= 0) {
		const distance = velMPerS * time
		height = distance - 0.5 * 9.81 * time * time
		secHeightMap.set(`${time}`, height)
		time += 0.1
	}

	const maxHeight = Object.entries(Object.fromEntries(secHeightMap)).sort(
		(a, b) => b[1] - a[1]
	)[0][0]

	return Math.round(Number(maxHeight) * 10)
}

export { ballUpwards }
