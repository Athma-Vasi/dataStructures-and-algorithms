function sumOfDifferences(arr: number[]) {
	const descSortedArr = [...arr].sort((a, b) => b - a)

	const diffArr: number[] = []
	for (let i = 0; i < arr.length - 1; i += 1) {
		diffArr.push(descSortedArr[i] - descSortedArr[i + 1])
	}

	return diffArr.reduce((acc, curr) => (acc += curr), 0)
}

export { sumOfDifferences }
