function derive(coefficient: number, exponent: number) {
	return `${coefficient * exponent}x^${exponent - 1}`
}

export { derive }
