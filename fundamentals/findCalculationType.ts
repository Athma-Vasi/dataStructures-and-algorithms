function findCalculationType(a: number, b: number, res: number) {
	return a + b === res
		? 'addition'
		: Math.abs(a - b) === Math.abs(res)
		? 'subtraction'
		: a * b === res
		? 'multiplication'
		: 'division'
}

export { findCalculationType }
