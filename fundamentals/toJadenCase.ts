function toJadenCase(str: string) {
	return str.split(' ').reduce((acc, curr) => {
		acc += `${curr[0].toUpperCase()}${curr.slice(1)} `

		return acc
	}, '')
}

export { toJadenCase }
