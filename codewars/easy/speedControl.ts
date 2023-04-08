function speedControl(s: number, xs: number[]) {
	const tempArr: number[] = []

	for (let i = 1; i < xs.length; i += 1) {
		tempArr.push(((xs[i] - xs[i - 1]) * 3600) / s)
	}

	return Math.floor(Math.max(...tempArr)) === -Infinity
		? 0
		: Math.floor(Math.max(...tempArr))
}

export { speedControl }
