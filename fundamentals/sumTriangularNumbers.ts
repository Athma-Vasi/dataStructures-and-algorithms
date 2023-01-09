function sumTriangularNumbers(n: number) {
	if (n < 0) return 0
	if (n === 1) return 1

	const tempArr: number[] = [1]
	for (let i = 2; i <= n; i += 1) {
		tempArr.push(i ** 2 - tempArr[i - 2])
	}

	return tempArr.reduce((acc, curr) => (acc += curr), 0)
}

export { sumTriangularNumbers }
