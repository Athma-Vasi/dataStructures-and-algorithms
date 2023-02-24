function multiplicationTable(size: number) {
	const resultArr: number[][] = []

	for (let i = 1; i <= size; i += 1) {
		const tempArr: number[] = []
		for (let j = 1; j <= size; j += 1) {
			tempArr.push(j * i)
		}
		resultArr.push(tempArr)
	}
	return resultArr
}

export { multiplicationTable }
