function deodorantEvaporator(content: number, evapPerDay: number, threshold: number) {
	let startAmount = content
	let remainFluid = Infinity
	let count = 0

	while (remainFluid > threshold) {
		startAmount *= 1 - evapPerDay / 100
		remainFluid = (startAmount / content) * 100

		count += 1
	}

	return count
}

export { deodorantEvaporator }
