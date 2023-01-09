function sumOfMinimums(arrays: number[][]) {
	return arrays.reduce((acc, numArr: number[]) => (acc += Math.min(...numArr)), 0)
}

export { sumOfMinimums }
