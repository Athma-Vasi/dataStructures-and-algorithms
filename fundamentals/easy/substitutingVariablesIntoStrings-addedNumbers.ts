function paddedNumbers(n: number) {
	const length = n.toString().length
	return '0'.repeat(5 - length) + n.toString()
}

export { paddedNumbers }
