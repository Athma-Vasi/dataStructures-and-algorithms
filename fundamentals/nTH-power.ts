function nThPower(array: number[], n: number) {
	return n > array.length - 1 ? -1 : n === array.length ? array[n] : array[n] ** n
}

export { nThPower }
