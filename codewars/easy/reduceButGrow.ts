function reduceButGrow(arr: number[]) {
	return arr.reduce((acc, curr) => (acc *= curr), 1)
}

export { reduceButGrow }
