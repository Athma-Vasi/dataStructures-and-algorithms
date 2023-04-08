function bigToSmall(arr: number[][]) {
	return arr
		.flatMap((num) => num)
		.sort((a, b) => b - a)
		.join('>')
}
