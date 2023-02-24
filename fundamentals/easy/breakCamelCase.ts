function breakCamelCase(string: string) {
	return string
		.split('')
		.reduce((acc: string[], curr) => {
			curr === curr.toUpperCase() ? acc.push(' ') && acc.push(curr) : acc.push(curr)

			return acc
		}, [])
		.join('')
}

export { breakCamelCase }
