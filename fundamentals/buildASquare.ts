function buildASquare(int: number) {
	if (int === 1) return '+'

	const str = '+'
	let temp = ''
	for (let i = 1; i <= int; i += 1) {
		temp += str.repeat(int)
		temp += '\n'
	}

	return temp.slice(0, -1)
}

export { buildASquare }
