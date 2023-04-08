function pyramidArray(n: number) {
	const result: number[][] = []
	let i = 1

	while (i <= n) {
		const tempArr: number[] = new Array(i)
		tempArr.fill(1)
		result.push(tempArr)

		i += 1
	}

	return result
}

export { pyramidArray }
