function tribonacci([a, b, c]: [number, number, number], n: number) {
	if (n === 0) return []
	if (n === 1) return [a]
	if (n === 2) return [a, b]
	if (n === 3) return [a, b, c]

	const temp: number[] = [a, b, c]
	for (let i = 0; i < n - 3; i += 1) {
		temp.push(temp[i] + temp[i + 1] + temp[i + 2])
	}

	return temp
}

export { tribonacci }
