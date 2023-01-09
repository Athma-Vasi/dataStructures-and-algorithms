function binaryArrayToNumber(arr: number[]) {
	const temp: number[] = []
	for (let i = arr.length - 1; i >= 0; i -= 1) {
		temp.push(2 ** i)
	}

	return temp.reduce((acc, curr, idx) => {
		acc += curr * arr[idx]

		return acc
	}, 0)
}

export { binaryArrayToNumber }
