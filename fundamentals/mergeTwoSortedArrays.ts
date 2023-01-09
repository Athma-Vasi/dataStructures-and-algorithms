function mergeArrays(arr1: number[], arr2: number[]) {
	return arr1.length === 0 && arr2.length === 0
		? []
		: Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b)
}

export { mergeArrays }
