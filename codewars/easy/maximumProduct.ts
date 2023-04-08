function maximumProduct(arr: number[]) {
	const tempArr: number[] = []

	for (let i = 1; i < arr.length; i += 1) {
		tempArr.push(arr[i] * arr[i - 1])
	}

	return Math.max(...tempArr)
}

export { maximumProduct }
