function toAlternatingCase(s: string) {
	const upper = s.toUpperCase()
	const lower = s.toLowerCase()

	return s === upper
		? lower
		: s === lower
		? upper
		: s
				.split(' ')
				.reduce((acc, curr) => {
					curr
						.split('')
						.forEach(
							(char) =>
								(acc +=
									char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
						)
					acc += ' '

					return acc
				}, '')
				.split('')
				.slice(0, -1)
				.join('')
}

export { toAlternatingCase }
