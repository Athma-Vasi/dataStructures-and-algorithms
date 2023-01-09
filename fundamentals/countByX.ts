function countByX(x: number, n: number) {
	// const z: number[] = []

	// for (let i = x; i <= x * n; i += x) z.push(i)

	// return z

	Array.from({ length: n }, (_, key) => key + 1 * x)
}

export { countByX }
