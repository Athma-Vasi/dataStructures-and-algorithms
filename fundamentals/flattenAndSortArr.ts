function flattenAndSortArr(inputArray: number[][]) {
	return inputArray.flatMap((num) => num).sort((a, b) => a - b)
}

export { flattenAndSortArr }
