function xo(str: string) {
	let amountX = 0
	let amountY = 0

	str
		.toLowerCase()
		.split('')
		.forEach((value, _) => {
			value === 'x' ? (amountX += 1) : value === 'o' ? (amountY += 1) : value
		})

	return amountX === amountY ? true : false
}

export { xo }
