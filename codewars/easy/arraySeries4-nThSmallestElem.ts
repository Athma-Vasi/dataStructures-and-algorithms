function nThSmallestElem(arr: number[], pos: number) {
	return arr.sort((a, b) => a - b)[pos - 1]
}

export { nThSmallestElem }
