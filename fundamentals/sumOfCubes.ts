function sumOfCubes(n: number) {
	const tempArr: number[] = []

	for (let i = 1; i <= n; i += 1) tempArr.push(i ** 3)

	return tempArr.reduce((acc, curr) => (acc += curr), 0)
}

export { sumOfCubes }
