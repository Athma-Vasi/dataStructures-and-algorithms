function isSquare(n: number): boolean {
	return n === 0 ? true : Math.sqrt(n) % 1 === 0 ? true : false
}

export { isSquare }
